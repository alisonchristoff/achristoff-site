// Fetch latest videos from YouTube API, filtering out Shorts
export async function getLatestVideos(maxResults = 4) {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

  if (!API_KEY || !CHANNEL_ID) {
    console.warn('YouTube API credentials not configured')
    return []
  }

  try {
    // Step 1: Get latest videos
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?` +
      `key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date` +
      `&maxResults=${maxResults}&type=video`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )

    if (!searchResponse.ok) {
      throw new Error(`YouTube API error: ${searchResponse.status}`)
    }

    const searchData = await searchResponse.json()
    const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',')

    // Step 2: Get video details including duration
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?` +
      `key=${API_KEY}&id=${videoIds}&part=contentDetails,snippet`,
      { next: { revalidate: 3600 } }
    )

    if (!detailsResponse.ok) {
      throw new Error(`YouTube API error: ${detailsResponse.status}`)
    }

    const detailsData = await detailsResponse.json()

    // Step 3: Filter out Shorts (videos < 60 seconds)
    const longFormVideos = detailsData.items.filter((video: any) => {
      const duration = parseDuration(video.contentDetails.duration)
      return duration >= 60
    })

    return longFormVideos.slice(0, 3) // Return top 3 long-form videos
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
