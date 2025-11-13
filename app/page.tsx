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

      {/* Y2K CHAOS MODE - DESTROY THE GRID */}
      <main className="min-h-screen pt-16 relative scanline diagonal-stripes" style={{ backgroundColor: siteConfig.colors.lightBg }}>

        {/* Wild Card Geometric Shapes - Scattered Chaos */}
        <div className="fixed top-20 right-10 geo-triangle opacity-10 rotate-chaos" style={{ color: siteConfig.colors.sage }} />
        <div className="fixed bottom-40 left-20 geo-square opacity-10" style={{ color: siteConfig.colors.rust }} />
        <div className="fixed top-1/3 right-1/4 w-2 h-32 opacity-20" style={{ backgroundColor: siteConfig.colors.mauve, transform: 'rotate(25deg)' }} />

        {/* HERO SECTION - MASSIVE TEXT CHAOS */}
        <section className="relative py-6 sm:py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">

            {/* GIGANTIC OVERLAPPING HERO TEXT */}
            <div className="relative mb-8">
              <motion.h1
                className="text-[60px] sm:text-[120px] lg:text-[160px] font-black leading-none glitch-text-slow pr-28 sm:pr-0"
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  color: siteConfig.colors.sage,
                  WebkitTextStroke: `2px ${siteConfig.colors.rust}`,
                  paintOrder: 'stroke fill'
                }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                UNKNOWN
              </motion.h1>

              {/* Small profile tucked in corner with chunky border */}
              <motion.div
                className="absolute -top-2 right-0 sm:-top-4 sm:right-10 chunky-border"
                style={{ borderColor: siteConfig.colors.slate }}
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-20 h-20 sm:w-32 sm:h-32 relative">
                  <Image
                    src={siteConfig.profile.image}
                    alt={siteConfig.profile.name}
                    fill
                    className="object-cover"
                    style={{ imageRendering: 'crisp-edges' }}
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Rotated name section */}
            <motion.div
              className="mb-6 inline-block"
              style={{ transform: 'rotate(-2deg)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="chunky-border p-4" style={{ borderColor: siteConfig.colors.mauve, backgroundColor: siteConfig.colors.deepBg }}>
                <p className="text-2xl sm:text-4xl font-black mb-1" style={{ color: siteConfig.colors.white }}>
                  {siteConfig.profile.name.toUpperCase()}
                </p>
                <p className="text-xs sm:text-sm font-bold tracking-widest" style={{ color: siteConfig.colors.sage }}>
                  {siteConfig.profile.bio.toUpperCase()}
                </p>
              </div>
            </motion.div>

            {/* Tiny location text */}
            <p className="text-[9px] sm:text-[11px] uppercase tracking-wider opacity-60 ml-2">
              <span style={{ color: siteConfig.colors.darkGray }}>📍 {siteConfig.profile.location}</span>
            </p>

            {/* Floating contact icons - chunky style */}
            <div className="flex gap-3 mt-6 ml-2">
              <a
                href={`mailto:${siteConfig.profile.email}`}
                className="chunky-border p-3 pulse-glow transition-transform hover:scale-110"
                style={{ borderColor: siteConfig.colors.slate, backgroundColor: siteConfig.colors.midBg }}
                aria-label="Email"
              >
                <Icons.mail />
              </a>
              <a
                href={siteConfig.links[0]?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="chunky-border p-3 pulse-glow transition-transform hover:scale-110"
                style={{ borderColor: siteConfig.colors.rust, backgroundColor: siteConfig.colors.midBg }}
                aria-label="Patreon"
              >
                <Icons.patreon />
              </a>
            </div>
          </div>
        </section>

        {/* Pixelated divider */}
        <div className="pixel-divider my-8" />

        {/* PATREON SECTION - MASSIVE FULL-WIDTH STATEMENT */}
        <motion.section
          className="py-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-30" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {siteConfig.links.map((link, index) => (
              <motion.div
                key={index}
                className="relative"
                style={{ transform: 'skewY(-1deg)' }}
                whileHover={{ scale: 1.01, transform: 'skewY(0deg)' }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block chunky-border p-8 sm:p-12"
                  style={{
                    borderColor: siteConfig.colors.sage,
                    backgroundColor: siteConfig.colors.deepBg
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {link.image && (
                      <div className="chunky-border w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0" style={{ borderColor: siteConfig.colors.rust }}>
                        <Image
                          src={link.image}
                          alt={link.title}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-3xl sm:text-5xl font-black mb-3 glitch-text" style={{ color: siteConfig.colors.white }}>
                        {link.title.toUpperCase()}
                      </h3>
                      {link.description && (
                        <p className="text-sm sm:text-base uppercase tracking-wide" style={{ color: siteConfig.colors.darkGray }}>
                          {link.description}
                        </p>
                      )}
                    </div>
                    <div className="hidden sm:block text-6xl font-black" style={{ color: siteConfig.colors.rust }}>
                      →
                    </div>
                  </div>
                </a>

                {/* Glitch bar decoration */}
                <div className="absolute -bottom-2 left-10 right-10 h-2" style={{ backgroundColor: siteConfig.colors.mauve, opacity: 0.6 }} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Another divider */}
        <div className="my-12 mx-auto w-3/4 h-1" style={{ background: `linear-gradient(90deg, ${siteConfig.colors.sage}, ${siteConfig.colors.rust}, ${siteConfig.colors.sage})` }} />

        {/* FORMER BANDS - TINY COMPRESSED CHAOS */}
        <section className="py-8 pb-16">
          <div className="max-w-6xl mx-auto px-4">

            {/* Rotated heading */}
            <div className="mb-6 inline-block" style={{ transform: 'rotate(1deg)' }}>
              <h2 className="text-xl sm:text-2xl font-black chunky-border inline-block p-3" style={{
                borderColor: siteConfig.colors.mauve,
                backgroundColor: siteConfig.colors.midBg,
                color: siteConfig.colors.white
              }}>
                FORMER BANDS
              </h2>
            </div>

            {/* Chaotic grid - overlapping */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.formerBands.map((band, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
                    marginTop: index === 1 ? '20px' : '0'
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <div className="chunky-border p-4 relative" style={{
                    borderColor: [siteConfig.colors.sage, siteConfig.colors.rust, siteConfig.colors.slate][index % 3],
                    backgroundColor: siteConfig.colors.deepBg
                  }}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 flex-shrink-0 relative">
                        <Image
                          src={band.image}
                          alt={band.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-black uppercase truncate" style={{ color: siteConfig.colors.white }}>
                          {band.name}
                        </h3>
                        <p className="text-[10px] uppercase tracking-wider" style={{ color: siteConfig.colors.darkGray }}>
                          {band.role}
                        </p>
                      </div>
                    </div>

                    {/* Random decoration bar */}
                    <div
                      className="absolute bottom-0 left-0 h-1"
                      style={{
                        width: `${60 + (index * 15)}%`,
                        backgroundColor: [siteConfig.colors.mauve, siteConfig.colors.sage, siteConfig.colors.rust][index % 3]
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
