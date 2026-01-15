import { NextResponse } from 'next/server'
import { getLatestVideos } from '@/app/lib/youtube'

export async function GET() {
  // Debug: Check if environment variables are present
  const hasApiKey = !!process.env.YOUTUBE_API_KEY
  const hasChannelId = !!process.env.YOUTUBE_CHANNEL_ID

  console.log('Environment check:', {
    hasApiKey,
    hasChannelId,
    apiKeyPrefix: process.env.YOUTUBE_API_KEY?.substring(0, 10) || 'missing',
    channelIdPrefix: process.env.YOUTUBE_CHANNEL_ID?.substring(0, 10) || 'missing'
  })

  if (!hasApiKey || !hasChannelId) {
    console.error('Missing YouTube credentials')
    return NextResponse.json({
      videos: [],
      error: 'YouTube API credentials not configured',
      debug: { hasApiKey, hasChannelId }
    })
  }

  try {
    const videos = await getLatestVideos()
    console.log(`Successfully fetched ${videos.length} videos`)
    return NextResponse.json({ videos, success: true })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json({
      videos: [],
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false
    }, { status: 200 })
  }
}
