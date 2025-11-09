"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"

// Icon components
const Icons = {
  instagram: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  tiktok: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  ),
  youtube: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  mail: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  patreon: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/>
    </svg>
  ),
  link: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16" style={{ backgroundColor: siteConfig.colors.lightBg }}>

        {/* Hero Section - Asymmetric Layout */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          {/* Decorative Blob Behind Profile */}
          <div
            className="absolute top-12 left-8 sm:left-16 lg:left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-15 blur-3xl -z-10"
            style={{
              backgroundColor: siteConfig.colors.sage,
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Side - Profile Image (Offset) */}
              <motion.div
                className="lg:col-span-5 flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
                    <Image
                      src={siteConfig.profile.image}
                      alt={siteConfig.profile.name}
                      fill
                      className="rounded-full object-cover border-4 shadow-2xl"
                      style={{ borderColor: siteConfig.colors.white }}
                      priority
                    />
                  </div>

                  {/* Email and Patreon Icons - Floating near image */}
                  <div className="absolute -bottom-4 -right-4 flex space-x-3">
                    <motion.a
                      href={`mailto:${siteConfig.profile.email}`}
                      className="p-3 rounded-full shadow-lg transition-all duration-300"
                      style={{ backgroundColor: siteConfig.colors.slate, color: siteConfig.colors.white }}
                      aria-label="Email"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icons.mail />
                    </motion.a>
                    <motion.a
                      href={siteConfig.links[0]?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full shadow-lg transition-all duration-300"
                      style={{ backgroundColor: siteConfig.colors.rust, color: siteConfig.colors.white }}
                      aria-label="Patreon"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icons.patreon />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Hero Text */}
              <motion.div
                className="lg:col-span-7 text-center lg:text-left"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {/* Bold Hero Statement */}
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    color: siteConfig.colors.text,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}
                >
                  let us navigate into the{' '}
                  <span style={{ color: siteConfig.colors.sage }}>unknown</span>
                </h1>

                {/* Name & Tagline */}
                <div className="mb-6">
                  <p
                    className="text-2xl sm:text-3xl font-medium mb-2"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      color: siteConfig.colors.text
                    }}
                  >
                    {siteConfig.profile.name}
                  </p>
                  <p
                    className="text-lg sm:text-xl"
                    style={{
                      color: siteConfig.colors.slate,
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {siteConfig.profile.bio}
                  </p>
                </div>

                {/* Location */}
                <p
                  className="flex items-center justify-center lg:justify-start text-base mb-8"
                  style={{ color: siteConfig.colors.darkGray }}
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {siteConfig.profile.location}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patreon Podcast Section - Offset Card with Color Pop */}
        <motion.section
          className="py-12 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {siteConfig.links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-4xl mx-auto lg:mx-0 lg:ml-auto rounded-3xl shadow-xl overflow-hidden group"
                style={{ backgroundColor: siteConfig.colors.slate }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6">
                    {link.image && (
                      <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={link.image}
                          alt={link.title}
                          width={112}
                          height={112}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3
                        className="text-2xl sm:text-3xl font-bold mb-3"
                        style={{
                          color: siteConfig.colors.white,
                          fontFamily: 'var(--font-space-grotesk), sans-serif'
                        }}
                      >
                        {link.title}
                      </h3>
                      {link.description && (
                        <p
                          className="text-base sm:text-lg leading-relaxed"
                          style={{ color: siteConfig.colors.white, opacity: 0.9 }}
                        >
                          {link.description}
                        </p>
                      )}
                    </div>
                    <div className="hidden sm:block">
                      <svg
                        className="w-8 h-8 transition-transform group-hover:translate-x-2"
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
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Socials Section - Asymmetric Staggered Layout */}
        <motion.section
          className="py-12 sm:py-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-12 text-center"
              style={{
                color: siteConfig.colors.text,
                fontFamily: 'var(--font-space-grotesk), sans-serif'
              }}
              variants={fadeInUp}
            >
              Connect
            </motion.h2>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.social.map((social, index) => {
                const IconComponent = Icons[social.icon as keyof typeof Icons] || Icons.link
                const colors = [siteConfig.colors.sage, siteConfig.colors.mauve, siteConfig.colors.rust]
                const bgColor = colors[index % colors.length]

                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-8 rounded-2xl shadow-lg group overflow-hidden relative"
                    style={{
                      backgroundColor: siteConfig.colors.white,
                      borderLeft: `6px solid ${bgColor}`
                    }}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className="transition-all duration-300 group-hover:scale-110"
                          style={{ color: bgColor }}
                        >
                          <IconComponent />
                        </div>
                        <span
                          className="font-medium text-xl"
                          style={{
                            color: siteConfig.colors.text,
                            fontFamily: 'var(--font-space-grotesk), sans-serif'
                          }}
                        >
                          {social.title}
                        </span>
                      </div>
                      <svg
                        className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: siteConfig.colors.darkGray }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Geometric Divider */}
        <div className="my-16 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-1 rounded-full" style={{
              background: `linear-gradient(90deg, ${siteConfig.colors.sage} 0%, ${siteConfig.colors.slate} 50%, ${siteConfig.colors.mauve} 100%)`,
              opacity: 0.3
            }}></div>
          </div>
        </div>

        {/* Former Bands Section - Minimal Visual Weight */}
        <motion.section
          className="py-12 pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl font-bold text-center mb-8"
              style={{
                color: siteConfig.colors.darkGray,
                fontFamily: 'var(--font-space-grotesk), sans-serif'
              }}
            >
              Former Bands
            </h2>

            {/* Horizontal Scrollable Layout on Mobile, Grid on Desktop */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-6 pb-4 sm:pb-0">
              {siteConfig.formerBands.map((band, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-auto p-6 rounded-xl"
                  style={{ backgroundColor: siteConfig.colors.white }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-lg overflow-hidden mb-4 shadow-md"
                      style={{ backgroundColor: siteConfig.colors.midBg }}
                    >
                      <Image
                        src={band.image}
                        alt={band.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      style={{
                        color: siteConfig.colors.text,
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontWeight: 500
                      }}
                    >
                      {band.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: siteConfig.colors.darkGray }}
                    >
                      {band.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer
          className="py-8 border-t"
          style={{
            borderColor: siteConfig.colors.midBg
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p
              className="text-sm"
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
