import { NextResponse } from 'next/server'
import { getLatestVideos } from '@/app/lib/youtube'

export async function GET() {
  try {
    const videos = await getLatestVideos()
    return NextResponse.json({ videos })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json({ videos: [] }, { status: 200 })
  }
}
