"use client"

import Image from "next/image"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"

interface YouTubeSectionProps {
  videos: any[]
}

export default function YouTubeSection({ videos }: YouTubeSectionProps) {
  return (
    <motion.section
      className="py-8 md:py-12 px-4 relative"
      style={{ transform: 'rotate(-0.5deg)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.43, 0.13, 0.62, 1.45] }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 inline-block px-6 py-3 glitch-text-slow"
          style={{
            color: siteConfig.colors.white,
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            border: `4px solid ${siteConfig.colors.sage}`,
            transform: 'rotate(-2deg)',
            WebkitTextStroke: `1px ${siteConfig.colors.rust}`,
            paintOrder: 'stroke fill'
          }}
          initial={{ opacity: 0, x: -40, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          LATEST VIDEOS
        </motion.h2>

        {videos.length > 0 ? (
          <>
            {/* Main Video Player */}
            <motion.div
              className="relative mb-8 diagonal-stripes"
              style={{
                border: `4px solid ${siteConfig.colors.mauve}`,
                transform: 'rotate(1deg)',
                boxShadow: `0 12px 48px rgba(0,0,0,0.5), 0 0 30px ${siteConfig.colors.mauve}33`
              }}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              {/* Corner brackets - all 4 colors */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-l-4 border-t-4 pointer-events-none z-10"
                   style={{ borderColor: siteConfig.colors.sage }} />
              <div className="absolute -top-2 -right-2 w-12 h-12 border-r-4 border-t-4 pointer-events-none z-10"
                   style={{ borderColor: siteConfig.colors.rust }} />
              <div className="absolute -bottom-2 -left-2 w-14 h-14 border-l-4 border-b-4 pointer-events-none z-10"
                   style={{ borderColor: siteConfig.colors.slate }} />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-r-4 border-b-4 pointer-events-none z-10"
                   style={{ borderColor: siteConfig.colors.mauve }} />

              {/* 16:9 responsive embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[0].id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={videos[0].snippet.title}
                />
              </div>

              {/* Scanline overlay */}
              <div className="absolute inset-0 scanline pointer-events-none opacity-10" />

              {/* Floating geometric shape */}
              <motion.div
                className="absolute left-1/4 -top-6 pointer-events-none"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: siteConfig.colors.sage,
                  opacity: 0.15,
                  transform: 'rotate(12deg)',
                  filter: 'blur(8px)'
                }}
                animate={{
                  rotate: [12, 16, 9, 12],
                  scale: [1, 1.05, 0.98, 1],
                  y: [0, -5, 3, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>

            {/* Thumbnail Row */}
            <div className="relative mb-6">
              <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory pr-16 md:pr-0 hide-scrollbar">

                {videos.slice(0, 3).map((video: any, idx: number) => {
                  const colors = [siteConfig.colors.rust, siteConfig.colors.slate, siteConfig.colors.sage]
                  const accentColors = [siteConfig.colors.mauve, siteConfig.colors.rust, siteConfig.colors.slate]
                  const rotations = [-1, 0.5, -0.5]

                  return (
                    <motion.div
                      key={video.id}
                      className="flex-shrink-0 w-64 md:w-full snap-start"
                      initial={{ opacity: 0, y: 30, rotate: rotations[idx] - 2 }}
                      whileInView={{ opacity: 1, y: 0, rotate: rotations[idx] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.15, duration: 0.8 }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                      <a href={`https://youtube.com/watch?v=${video.id}`}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="block"
                      >
                        <div style={{
                          border: `3px solid ${colors[idx]}`,
                          transform: `rotate(${rotations[idx]}deg)`,
                          boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
                        }}>
                          <Image
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                            width={320}
                            height={180}
                            className="w-full aspect-video object-cover"
                          />
                        </div>

                        <h3 className="text-sm font-black mt-2 uppercase truncate"
                            style={{
                              color: siteConfig.colors.white,
                              fontFamily: 'var(--font-space-grotesk)',
                              transform: `rotate(${[0.5, -0.5, 1][idx]}deg)`
                            }}>
                          {video.snippet.title}
                        </h3>

                        {/* Accent bar */}
                        <div style={{
                          height: '3px',
                          width: `${[80, 65, 90][idx]}%`,
                          backgroundColor: accentColors[idx],
                          opacity: 0.7,
                          transform: 'rotate(-1deg)'
                        }} />
                      </a>
                    </motion.div>
                  )
                })}
              </div>

              {/* Mobile scroll indicator */}
              <div className="md:hidden absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-black/80 to-transparent pointer-events-none flex items-center justify-center">
                <span className="text-2xl opacity-60" style={{ color: siteConfig.colors.white }}>→</span>
              </div>
            </div>

            {/* See More Link */}
            <motion.a
              href="https://www.youtube.com/@alisonchristoff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 transition-transform"
              style={{
                border: `3px solid ${siteConfig.colors.rust}`,
                backgroundColor: siteConfig.colors.midBg,
                color: siteConfig.colors.white,
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                transform: 'rotate(-1deg)'
              }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              SEE MORE ON YOUTUBE →
            </motion.a>
          </>
        ) : (
          /* Fallback if no videos */
          <div className="text-center py-12" style={{ color: siteConfig.colors.darkGray }}>
            <p className="text-lg">Videos coming soon...</p>
          </div>
        )}
      </div>

      {/* Background geometric shapes */}
      <motion.div
        className="absolute right-1/4 top-10 pointer-events-none"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: siteConfig.colors.slate,
          opacity: 0.08,
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1],
          x: [0, 10, -5, 0],
          y: [0, -10, 5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute left-1/3 bottom-20 pointer-events-none"
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: siteConfig.colors.mauve,
          opacity: 0.06,
          transform: 'rotate(25deg)',
          filter: 'blur(15px)'
        }}
        animate={{
          rotate: [25, 30, 20, 25],
          scale: [1, 1.1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </motion.section>
  )
}
