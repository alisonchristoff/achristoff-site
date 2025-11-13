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
  patreon: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/>
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
                  <motion.a
                    href={siteConfig.links[0]?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 transition-transform"
                    style={{
                      border: `3px solid ${siteConfig.colors.rust}`,
                      backgroundColor: siteConfig.colors.rust,
                      color: siteConfig.colors.white,
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      letterSpacing: '0.05em'
                    }}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icons.patreon />
                    PATREON
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

        {/* PATREON SECTION - Clear value prop with artistic flair */}
        <motion.section
          className="py-8 md:py-12 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.43, 0.13, 0.62, 1.45] }}
        >
          <div className="max-w-4xl mx-auto">

            {/* Decorative accent - animated */}
            <motion.div
              className="absolute right-0 w-48 h-48 border-r-3 border-b-3 opacity-20"
              style={{
                borderColor: siteConfig.colors.mauve,
                transform: 'rotate(3deg)'
              }}
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 0.2, x: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
              aria-hidden="true"
            />

            <motion.a
              href={siteConfig.links[0]?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
              initial={{ opacity: 0, rotate: -3 }}
              whileInView={{ opacity: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            >
              <div
                className="p-8 md:p-12 relative overflow-hidden"
                style={{
                  border: `4px solid ${siteConfig.colors.rust}`,
                  backgroundColor: siteConfig.colors.deepBg,
                  transform: 'rotate(-1deg)'
                }}
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center relative z-10">

                  {/* Image */}
                  {siteConfig.links[0]?.image && (
                    <div
                      className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 relative"
                      style={{
                        border: `3px solid ${siteConfig.colors.sage}`,
                        transform: 'rotate(2deg)'
                      }}
                    >
                      <Image
                        src={siteConfig.links[0].image}
                        alt={siteConfig.links[0].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <h3
                      className="text-3xl md:text-5xl font-black mb-4"
                      style={{
                        color: siteConfig.colors.white,
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        lineHeight: 1.1
                      }}
                    >
                      {siteConfig.links[0]?.title}
                    </h3>

                    {siteConfig.links[0]?.description && (
                      <p
                        className="text-base md:text-lg mb-6 max-w-xl"
                        style={{
                          color: siteConfig.colors.darkGray,
                          fontFamily: 'var(--font-inter), sans-serif',
                          lineHeight: 1.6
                        }}
                      >
                        {siteConfig.links[0].description}
                      </p>
                    )}

                    <div
                      className="inline-flex items-center gap-2 text-xl md:text-2xl font-black"
                      style={{
                        color: siteConfig.colors.rust,
                        fontFamily: 'var(--font-space-grotesk), sans-serif'
                      }}
                    >
                      SUBSCRIBE →
                    </div>
                  </div>

                </div>

                {/* Accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2"
                  style={{
                    background: `linear-gradient(90deg, ${siteConfig.colors.sage}, ${siteConfig.colors.rust})`,
                    opacity: 0.6
                  }}
                />
              </div>
            </motion.a>

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
                  <div
                    className="relative"
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
                  </div>
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
