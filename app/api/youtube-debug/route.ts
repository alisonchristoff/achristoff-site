import { NextResponse } from 'next/server'

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

  const debug = {
    hasApiKey: !!API_KEY,
    hasChannelId: !!CHANNEL_ID,
    apiKeyLength: API_KEY?.length || 0,
    apiKeyPrefix: API_KEY?.substring(0, 15) || 'missing',
    channelIdLength: CHANNEL_ID?.length || 0,
    channelIdPrefix: CHANNEL_ID?.substring(0, 15) || 'missing',
    nodeEnv: process.env.NODE_ENV,
  }

  if (!API_KEY || !CHANNEL_ID) {
    return NextResponse.json({
      error: 'Missing credentials',
      debug
    })
  }

  // Try a simple API call
  try {
    const testUrl = `https://www.googleapis.com/youtube/v3/search?` +
      `key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`

    const response = await fetch(testUrl)
    const data = await response.json()

    return NextResponse.json({
      debug,
      apiResponse: {
        status: response.status,
        ok: response.ok,
        data: data,
        itemCount: data.items?.length || 0
      }
    })
  } catch (error) {
    return NextResponse.json({
      debug,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorDetails: error
    })
  }
}
