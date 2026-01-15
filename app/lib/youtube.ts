// Fetch latest videos from YouTube API, filtering out Shorts
export async function getLatestVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

  if (!API_KEY || !CHANNEL_ID) {
    console.warn('YouTube API credentials not configured')
    return []
  }

  try {
    // Step 1: Fetch multiple pages to get enough videos to find 5 long-form ones
    let allVideos: any[] = []
    let nextPageToken: string | undefined = undefined
    const maxPages = 4 // Fetch up to 200 videos (50 per page * 4)

    for (let page = 0; page < maxPages; page++) {
      const searchUrl: string = `https://www.googleapis.com/youtube/v3/search?` +
        `key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date` +
        `&maxResults=50&type=video` +
        (nextPageToken ? `&pageToken=${nextPageToken}` : '')

      const searchResponse = await fetch(searchUrl, { next: { revalidate: 3600 } })

      if (!searchResponse.ok) {
        throw new Error(`YouTube API error: ${searchResponse.status}`)
      }

      const searchData = await searchResponse.json()
      allVideos.push(...searchData.items)

      nextPageToken = searchData.nextPageToken

      // Stop if no more pages
      if (!nextPageToken) break
    }

    console.log(`Fetched ${allVideos.length} videos from API across multiple pages`)

    const videoIds = allVideos.map((item: any) => item.id.videoId).join(',')

    // Step 2: Get video details including duration, tags, and title
    // Note: YouTube API allows up to 50 video IDs per request, so we may need multiple calls
    const allVideoDetails: any[] = []
    const videoIdChunks: string[][] = []

    // Split video IDs into chunks of 50
    const videoIdArray = allVideos.map((item: any) => item.id.videoId)
    for (let i = 0; i < videoIdArray.length; i += 50) {
      videoIdChunks.push(videoIdArray.slice(i, i + 50))
    }

    // Fetch details for each chunk
    for (const chunk of videoIdChunks) {
      const chunkIds = chunk.join(',')
      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?` +
        `key=${API_KEY}&id=${chunkIds}&part=contentDetails,snippet`,
        { next: { revalidate: 3600 } }
      )

      if (!detailsResponse.ok) {
        throw new Error(`YouTube API error: ${detailsResponse.status}`)
      }

      const detailsData = await detailsResponse.json()
      allVideoDetails.push(...detailsData.items)
    }

    // Step 3: Filter out YouTube Shorts using multiple detection methods
    const longFormVideos = allVideoDetails.filter((video: any) => {
      // Method 1: Check for #shorts hashtag in title, description, or tags
      const title = video.snippet.title?.toLowerCase() || ''
      const description = video.snippet.description?.toLowerCase() || ''
      const tags = video.snippet.tags?.map((tag: string) => tag.toLowerCase()) || []

      const hasShortTag =
        title.includes('#shorts') ||
        title.includes('#short') ||
        description.includes('#shorts') ||
        description.includes('#short') ||
        tags.some((tag: string) => tag === 'shorts' || tag === 'short')

      // If it has the shorts tag, it's definitely a Short
      if (hasShortTag) {
        return false
      }

      // Method 2: Duration check as fallback
      const duration = parseDuration(video.contentDetails.duration)

      // Filter out videos under 4 minutes (240 seconds)
      // This catches Shorts that don't have hashtags
      // Shorts can be up to 3 minutes, so 4 minutes is a safe threshold
      if (duration < 240) {
        return false
      }

      // Videos 4+ minutes are definitely long-form content
      return true
    })

    console.log(`After filtering: ${longFormVideos.length} long-form videos found`)
    longFormVideos.slice(0, 5).forEach((video: any, idx: number) => {
      const duration = parseDuration(video.contentDetails.duration)
      console.log(`Video ${idx + 1}: "${video.snippet.title}" - ${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`)
    })

    return longFormVideos.slice(0, 5) // Return top 5 long-form videos
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error)
    return []
  }
}

// Parse ISO 8601 duration format (PT1M30S → 90 seconds)
function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 0

  const hours = parseInt(match[1] || '0')
  const minutes = parseInt(match[2] || '0')
  const seconds = parseInt(match[3] || '0')

  return hours * 3600 + minutes * 60 + seconds
}
