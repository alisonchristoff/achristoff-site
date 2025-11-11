"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import { siteConfig } from "@/config/site"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

// Icon components
const Icons = {
  mail: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  patreon: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/>
    </svg>
  ),
}

// Particle constellation component
function ParticleField() {
  const [particles, setParticles] = useState<{x: number, y: number, delay: number}[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate 35 particles with random positions
    const newParticles = Array.from({ length: 35 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8
    }))
    setParticles(newParticles)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="particle-field">
      {particles.map((particle, i) => {
        const distance = Math.sqrt(
          Math.pow((particle.x / 100 * window.innerWidth) - mousePos.x, 2) +
          Math.pow((particle.y / 100 * window.innerHeight) - mousePos.y, 2)
        )
        const influence = Math.max(0, 1 - distance / 300)

        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              transform: `translate(${influence * 20}px, ${influence * -20}px)`,
              transition: 'transform 0.8s ease-out'
            }}
          />
        )
      })}
    </div>
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 300], [0, -50])
  const blobY = useTransform(scrollY, [0, 300], [0, 100])

  return (
    <>
      <Navigation />
      <ParticleField />

      <main className="min-h-screen pt-16 relative z-10" style={{ backgroundColor: siteConfig.colors.lightBg }}>

        {/* Hero Section - Experimental Kinetic Layout */}
        <motion.section
          className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
          style={{ y: heroY }}
        >
          {/* Morphing Organic Blob - "Ink in Water" */}
          <motion.div
            className="morph-blob absolute top-8 left-4 sm:left-12 lg:left-20 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] opacity-25 blur-3xl -z-10"
            style={{
              backgroundColor: siteConfig.colors.sage,
              y: blobY
            }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Profile Image - Intentional Friction (2-sec slow reveal on desktop) */}
              <motion.div
                className="lg:col-span-4 flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 slow-reveal-hover">
                    <Image
                      src={siteConfig.profile.image}
                      alt={siteConfig.profile.name}
                      fill
                      className="rounded-full object-cover border-2 shadow-2xl"
                      style={{ borderColor: siteConfig.colors.sage }}
                      priority
                    />
                  </div>

                  {/* Floating Icons - Stained Glass Glow */}
                  <div className="absolute -bottom-2 -right-2 flex space-x-2">
                    <motion.a
                      href={`mailto:${siteConfig.profile.email}`}
                      className="p-2 rounded-md shadow-xl transition-all duration-300 glow-effect"
                      style={{ backgroundColor: siteConfig.colors.slate, color: siteConfig.colors.white }}
                      aria-label="Email"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icons.mail />
                    </motion.a>
                    <motion.a
                      href={siteConfig.links[0]?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md shadow-xl transition-all duration-300 glow-effect"
                      style={{ backgroundColor: siteConfig.colors.rust, color: siteConfig.colors.white }}
                      aria-label="Patreon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icons.patreon />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Hero Text - Kinetic Typography */}
              <motion.div
                className="lg:col-span-8 text-center lg:text-left"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                {/* Kinetic Statement - "unknown" breathes */}
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    color: siteConfig.colors.text,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}
                >
                  let us navigate into the{' '}
                  <span
                    className="breathe-slow inline-block"
                    style={{ color: siteConfig.colors.sage }}
                  >
                    unknown
                  </span>
                </h1>

                {/* Name & Tagline */}
                <div className="mb-4 space-y-1">
                  <p
                    className="text-lg sm:text-xl font-bold"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      color: siteConfig.colors.text
                    }}
                  >
                    {siteConfig.profile.name}
                  </p>
                  <p
                    className="text-base sm:text-lg font-medium"
                    style={{
                      color: siteConfig.colors.mauve,
                      fontFamily: 'var(--font-space-grotesk), sans-serif'
                    }}
                  >
                    {siteConfig.profile.bio}
                  </p>
                </div>

                {/* Location */}
                <p
                  className="flex items-center justify-center lg:justify-start text-sm"
                  style={{ color: siteConfig.colors.darkGray }}
                >
                  <svg className="w-3 h-3 mr-1 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {siteConfig.profile.location}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Patreon Section - Intentional Friction Slow Reveal */}
        <motion.section
          className="py-10 sm:py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {siteConfig.links.map((link, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-3xl mx-auto lg:mx-0 lg:ml-auto rounded-lg shadow-2xl overflow-hidden slow-reveal-hover"
                  style={{ backgroundColor: siteConfig.colors.slate }}
                >
                  <div className="p-6 sm:p-8 relative">
                    {/* Stained glass glow overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at center, ${siteConfig.colors.rust}, transparent 70%)`
                      }}
                    />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 relative z-10">
                      {link.image && (
                        <div className="flex-shrink-0 w-18 h-18 sm:w-20 sm:h-20 rounded-md overflow-hidden shadow-lg">
                          <Image
                            src={link.image}
                            alt={link.title}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3
                          className="text-xl sm:text-2xl font-bold mb-2"
                          style={{
                            color: siteConfig.colors.white,
                            fontFamily: 'var(--font-space-grotesk), sans-serif'
                          }}
                        >
                          {link.title}
                        </h3>
                        {link.description && (
                          <p
                            className="text-sm sm:text-base leading-relaxed"
                            style={{ color: siteConfig.colors.white, opacity: 0.9 }}
                          >
                            {link.description}
                          </p>
                        )}
                      </div>
                      <div className="hidden sm:block opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                        <svg
                          className="w-6 h-6"
                          style={{ color: siteConfig.colors.white }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stained Glass Divider */}
        <div className="my-12 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className="h-px"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${siteConfig.colors.sage} 30%, ${siteConfig.colors.rust} 70%, transparent 100%)`,
                opacity: 0.4
              }}
            />
          </div>
        </div>

        {/* Former Bands - Staggered Parallax with Tilt */}
        <motion.section
          className="py-10 pb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-xl sm:text-2xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                color: siteConfig.colors.mauve,
                fontFamily: 'var(--font-space-grotesk), sans-serif'
              }}
            >
              Former Bands
            </motion.h2>

            {/* Cards with alternating slide-in + tilt effect */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-5 pb-4 sm:pb-0">
              {siteConfig.formerBands.map((band, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-52 sm:w-auto group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    rotateY: -5,
                    rotateX: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div
                    className="p-5 rounded-lg shadow-xl transition-shadow duration-300 group-hover:shadow-2xl"
                    style={{
                      backgroundColor: siteConfig.colors.midBg,
                      borderLeft: `3px solid ${siteConfig.colors.sage}`
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="w-16 h-16 rounded-md overflow-hidden mb-3 shadow-md"
                        style={{ backgroundColor: siteConfig.colors.deepBg }}
                      >
                        <Image
                          src={band.image}
                          alt={band.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{
                          color: siteConfig.colors.text,
                          fontFamily: 'var(--font-space-grotesk), sans-serif'
                        }}
                      >
                        {band.name}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: siteConfig.colors.darkGray }}
                      >
                        {band.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer - Subtle Presence */}
        <footer
          className="py-8 border-t"
          style={{
            borderColor: siteConfig.colors.midBg,
            opacity: 0.5
          }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p
              className="text-xs"
              style={{ color: siteConfig.colors.darkGray }}
            >
              © 2025 {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
