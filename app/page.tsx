"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"

const Icons = {
  mail: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Artistic Personal Brand - Intentional Design with Clear UX */}
      <main className="min-h-screen pt-16 relative" style={{ backgroundColor: siteConfig.colors.lightBg }}>

        {/* HERO SECTION - Clear hierarchy with artistic character */}
        <section className="relative py-8 md:py-12 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Decorative border accents - animated jazz riffs */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 border-l-3 border-t-3"
              style={{
                borderColor: siteConfig.colors.sage,
                transform: 'rotate(-2deg)',
                opacity: 0.3
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              aria-hidden="true"
            />

            {/* Additional border fragment - bottom right */}
            <motion.div
              className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 border-r-3 border-b-3"
              style={{
                borderColor: siteConfig.colors.rust,
                transform: 'rotate(3deg)',
                opacity: 0.25
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.25, x: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.43, 0.13, 0.62, 1.45] }}
              aria-hidden="true"
            />

            {/* Profile + Identity - Clear visual relationship */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-6 md:mb-8">

              {/* Profile Image - Prominent, clear */}
              <motion.div
                className="relative mx-auto md:mx-0"
                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.1,
                  ease: [0.68, -0.55, 0.265, 1.55],
                  rotate: { duration: 1.4, ease: [0.43, 0.13, 0.62, 1.45] }
                }}
              >
                <div
                  className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
                  style={{
                    border: `4px solid ${siteConfig.colors.slate}`,
                    transform: 'rotate(-3deg)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.5)'
                  }}
                >
                  <Image
                    src={siteConfig.profile.image}
                    alt={siteConfig.profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Accent corner - animated */}
                <motion.div
                  className="absolute -bottom-3 -right-3 w-24 h-24 border-r-3 border-b-3"
                  style={{
                    borderColor: siteConfig.colors.rust,
                    transform: 'rotate(2deg)'
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 2 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.0,
                    ease: [0.68, -0.55, 0.265, 1.55]
                  }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Identity Text - Readable, hierarchical */}
              <div>
                {/* UNKNOWN title - readable but dramatic */}
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-black mb-6"
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    color: siteConfig.colors.sage,
                    WebkitTextStroke: `2px ${siteConfig.colors.rust}`,
                    paintOrder: 'stroke fill',
                    lineHeight: 0.9,
                    transform: 'rotate(-1deg)',
                    display: 'inline-block'
                  }}
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: -1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.43, 0.13, 0.62, 1.45]
                  }}
                >
                  UNKNOWN
                </motion.h1>

                {/* Name + Bio - Clear, scannable */}
                <motion.div
                  className="inline-block mb-6 px-6 py-4"
                  style={{
                    border: `3px solid ${siteConfig.colors.mauve}`,
                    backgroundColor: siteConfig.colors.deepBg,
                    transform: 'rotate(1deg)'
                  }}
                  initial={{ opacity: 0, x: -50, rotate: -3 }}
                  animate={{ opacity: 1, x: 0, rotate: 1 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.6,
                    ease: [0.68, -0.55, 0.265, 1.55]
                  }}
                >
                  <h2
                    className="text-2xl md:text-3xl font-black mb-2"
                    style={{
                      color: siteConfig.colors.white,
                      fontFamily: 'var(--font-space-grotesk), sans-serif'
                    }}
                  >
                    {siteConfig.profile.name.toUpperCase()}
                  </h2>
                  <p
                    className="text-sm md:text-base tracking-widest"
                    style={{
                      color: siteConfig.colors.sage,
                      fontFamily: 'var(--font-inter), sans-serif'
                    }}
                  >
                    {siteConfig.profile.bio}
                  </p>
                </motion.div>

                {/* Location - Subtle but findable */}
                <motion.p
                  className="text-xs uppercase tracking-wider mb-6 opacity-60"
                  style={{ color: siteConfig.colors.darkGray }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                >
                  📍 {siteConfig.profile.location}
                </motion.p>

                {/* Contact CTAs - Clear, accessible */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0.43, 0.13, 0.62, 1.45]
                  }}
                >
                  <motion.a
                    href={`mailto:${siteConfig.profile.email}`}
                    className="flex items-center gap-2 px-6 py-3 transition-transform"
                    style={{
                      border: `3px solid ${siteConfig.colors.slate}`,
                      backgroundColor: siteConfig.colors.midBg,
                      color: siteConfig.colors.white,
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      letterSpacing: '0.05em'
                    }}
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icons.mail />
                    EMAIL
                  </motion.a>
                </motion.div>
              </div>

            </div>

          </div>
        </section>

        {/* Visual divider - animated */}
        <motion.div
          className="w-full h-px mx-auto my-8 md:my-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${siteConfig.colors.sage}, transparent)`,
            opacity: 0.3
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* UNDER CONSTRUCTION NOTICE - Laura Nyro reincarnated: organic chaos meets intentional beauty */}
        <motion.section
          className="py-8 md:py-12 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.43, 0.13, 0.62, 1.45] }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="p-8 md:p-12 relative overflow-hidden diagonal-stripes"
              style={{
                border: `4px solid ${siteConfig.colors.rust}`,
                backgroundColor: siteConfig.colors.deepBg,
                transform: 'rotate(-1deg)',
                color: siteConfig.colors.rust
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${siteConfig.colors.rust}33`,
                  `0 0 35px ${siteConfig.colors.rust}28`,
                  `0 0 25px ${siteConfig.colors.rust}30`,
                  `0 0 40px ${siteConfig.colors.rust}25`,
                  `0 0 20px ${siteConfig.colors.rust}33`
                ]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.5, 0.8, 1]
              }}
            >
              {/* LAYER 2: Stained Glass Geometric Overlays - Visible drift & color bleed */}
              {/* Rotated square - mauve glow, slow exhale drift */}
              <motion.div
                className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: '140px',
                  height: '140px',
                  backgroundColor: siteConfig.colors.mauve,
                  opacity: 0.18,
                  transform: 'rotate(12deg)',
                  filter: 'blur(12px)',
                  zIndex: 0
                }}
                initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
                animate={{
                  opacity: [0.18, 0.22, 0.16, 0.18],
                  rotate: [12, 16, 9, 12],
                  scale: [1, 1.08, 0.96, 1],
                  x: [0, -8, 5, 0],
                  y: [0, 12, -6, 0]
                }}
                transition={{
                  duration: 11,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.4, 0.7, 1]
                }}
                aria-hidden="true"
              />

              {/* Overlapping circle - slate glow, quick inhale drift */}
              <motion.div
                className="absolute right-1/4 top-1/3 pointer-events-none"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: siteConfig.colors.slate,
                  opacity: 0.16,
                  filter: 'blur(10px)',
                  zIndex: 1
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.16, 0.14, 0.20, 0.16],
                  scale: [1, 1.10, 0.93, 1],
                  x: [0, 8, -5, 0],
                  y: [0, -7, 10, 0]
                }}
                transition={{
                  duration: 6,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.6, 1]
                }}
                aria-hidden="true"
              />

              {/* Triangle accent - sage glow, asymmetric breath */}
              <motion.div
                className="absolute left-1/3 bottom-1/4 pointer-events-none"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '50px solid transparent',
                  borderRight: '50px solid transparent',
                  borderBottom: `70px solid ${siteConfig.colors.sage}`,
                  opacity: 0.17,
                  transform: 'rotate(-15deg)',
                  filter: 'blur(8px)',
                  zIndex: 2
                }}
                initial={{ opacity: 0, rotate: -45, scale: 0 }}
                animate={{
                  opacity: [0.17, 0.21, 0.14, 0.18, 0.17],
                  rotate: [-15, -11, -19, -13, -15],
                  scale: [1, 1.06, 1.02, 0.96, 1],
                  x: [0, 6, -8, 3, 0],
                  y: [0, -5, 7, -3, 0]
                }}
                transition={{
                  duration: 9,
                  delay: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.8, 1]
                }}
                aria-hidden="true"
              />

              {/* LAYER 3: Main Content */}
              {/* Main Message with RGB Split Glitch */}
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-black text-center glitch-text-slow mb-4"
                style={{
                  color: siteConfig.colors.white,
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  lineHeight: 1.1,
                  letterSpacing: '0.05em',
                  position: 'relative',
                  zIndex: 10
                }}
              >
                SITE UNDER CONSTRUCTION
              </h2>

              {/* Subtitle - new contemplation coming soon */}
              <motion.p
                className="text-sm md:text-base lg:text-lg font-bold text-center uppercase tracking-widest"
                style={{
                  color: siteConfig.colors.sage,
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  opacity: 0.8,
                  letterSpacing: '0.15em',
                  position: 'relative',
                  zIndex: 10
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 1.0, delay: 1.0, ease: [0.43, 0.13, 0.62, 1.45] }}
              >
                new contemplation coming soon
              </motion.p>

              {/* LAYER 4: Grid + Scanline Overlay (Fun Element) */}
              <div
                className="absolute inset-0 grid-overlay scanline pointer-events-none"
                style={{
                  opacity: 0.15,
                  mixBlendMode: 'overlay',
                  zIndex: 5
                }}
                aria-hidden="true"
              />

              {/* LAYER 4b: Film Grain / Paper Texture - Adds warmth & tactility */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  opacity: 0.06,
                  mixBlendMode: 'overlay',
                  zIndex: 6
                }}
                aria-hidden="true"
              />

              {/* LAYER 5: Four Asymmetric Corner Brackets */}
              {/* Top-left corner bracket - dominant sage */}
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 border-l-3 border-t-3"
                style={{
                  borderColor: siteConfig.colors.sage,
                  opacity: 0.5
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 0.5, scale: 1, rotate: -3 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                aria-hidden="true"
              />

              {/* Top-right corner bracket - smaller mauve */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 border-r-3 border-t-3"
                style={{
                  borderColor: siteConfig.colors.mauve,
                  opacity: 0.4
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                animate={{ opacity: 0.4, scale: 1, rotate: 2 }}
                transition={{ duration: 1.0, delay: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                aria-hidden="true"
              />

              {/* Bottom-left corner bracket - asymmetric slate */}
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 border-l-3 border-b-3"
                style={{
                  borderColor: siteConfig.colors.slate,
                  opacity: 0.45
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                animate={{ opacity: 0.45, scale: 1, rotate: 4 }}
                transition={{ duration: 1.3, delay: 0.4, ease: [0.43, 0.13, 0.62, 1.45] }}
                aria-hidden="true"
              />

              {/* Bottom-right corner bracket - completes frame rust */}
              <motion.div
                className="absolute bottom-0 right-0 w-18 h-18 md:w-24 md:h-24 border-r-3 border-b-3"
                style={{
                  borderColor: siteConfig.colors.rust,
                  opacity: 0.35
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 0.35, scale: 1, rotate: -2 }}
                transition={{ duration: 1.1, delay: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                aria-hidden="true"
              />

              {/* LAYER 6: Structural hand-drawn elements */}
              {/* Loose sketchy line - parallel to left border */}
              <motion.svg
                className="absolute left-6 top-16 md:left-8 md:top-20 pointer-events-none"
                width="3"
                height="200"
                viewBox="0 0 3 200"
                style={{ opacity: 0.2, zIndex: 4 }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.2, scaleY: 1 }}
                transition={{ duration: 1.3, delay: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}
                aria-hidden="true"
              >
                <path
                  d="M 1.5,10 Q 2,50 1.5,90 T 1.5,170 Q 2,185 1.5,190"
                  fill="none"
                  stroke={siteConfig.colors.slate}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Loose sketchy line - parallel to right border */}
              <motion.svg
                className="absolute right-6 top-20 md:right-8 md:top-24 pointer-events-none"
                width="3"
                height="180"
                viewBox="0 0 3 180"
                style={{ opacity: 0.22, zIndex: 4 }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.22, scaleY: 1 }}
                transition={{ duration: 1.4, delay: 1.0, ease: [0.68, -0.55, 0.265, 1.55] }}
                aria-hidden="true"
              >
                <path
                  d="M 1.5,15 Q 1,55 1.5,95 T 1.5,155 Q 1,165 1.5,170"
                  fill="none"
                  stroke={siteConfig.colors.mauve}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>

            </motion.div>
          </div>
        </motion.section>

        {/* Visual divider - animated */}
        <motion.div
          className="w-full h-px mx-auto my-8 md:my-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${siteConfig.colors.slate}, transparent)`,
            opacity: 0.3
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* FORMER BANDS - Scannable grid with artistic rotation */}
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-5xl mx-auto">

            {/* Section heading - animated */}
            <motion.h2
              className="text-xl md:text-2xl font-black mb-8 inline-block px-4 py-2"
              style={{
                color: siteConfig.colors.white,
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                border: `3px solid ${siteConfig.colors.mauve}`,
                transform: 'rotate(-1deg)'
              }}
              initial={{ opacity: 0, x: -40, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              FORMER BANDS
            </motion.h2>

            {/* Grid layout - clear but artistic */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.formerBands.map((band, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.85,
                    rotate: [-5, 3, -4][index % 3]
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: [-2, 1, -1][index % 3]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.9,
                    ease: [0.68, -0.55, 0.265, 1.55]
                  }}
                  whileHover={{ scale: 1.08, rotate: 0 }}
                >
                  <motion.a
                    href={band.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                    style={{
                      transform: `rotate(${[-2, 1, -1][index % 3]}deg)`,
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    {/* Image */}
                    <div
                      className="relative w-full aspect-square mb-4"
                      style={{
                        border: `4px solid ${[siteConfig.colors.sage, siteConfig.colors.rust, siteConfig.colors.slate][index % 3]}`,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                      }}
                    >
                      <Image
                        src={band.image}
                        alt={band.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div
                      style={{
                        transform: `rotate(${[1, -1, 2][index % 3]}deg)`
                      }}
                    >
                      <h3
                        className="text-xl md:text-2xl font-black mb-1"
                        style={{
                          color: siteConfig.colors.white,
                          fontFamily: 'var(--font-space-grotesk), sans-serif'
                        }}
                      >
                        {band.name.toUpperCase()}
                      </h3>
                      <p
                        className="text-sm uppercase tracking-wider"
                        style={{ color: siteConfig.colors.darkGray }}
                      >
                        {band.role}
                      </p>
                    </div>

                    {/* Accent bar */}
                    <div
                      className="absolute bottom-0 left-0 h-2"
                      style={{
                        width: `${[70, 85, 60][index % 3]}%`,
                        backgroundColor: [siteConfig.colors.mauve, siteConfig.colors.sage, siteConfig.colors.rust][index % 3],
                        opacity: 0.7
                      }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* FOOTER - TINY AND OFFSET */}
        <footer className="py-6 border-t-4" style={{ borderColor: siteConfig.colors.midBg }}>
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-[9px] uppercase tracking-widest text-right" style={{ color: siteConfig.colors.darkGray, opacity: 0.5 }}>
              © 2025 {siteConfig.name.toUpperCase()} // ALL RIGHTS RESERVED
            </p>
          </div>
        </footer>

      </main>
    </>
  )
}
