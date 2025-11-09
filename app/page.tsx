"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"

// Icon components
const Icons = {
  instagram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  tiktok: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  ),
  youtube: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
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
  link: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16" style={{ backgroundColor: siteConfig.colors.lightBg }}>

        {/* Hero Section - Asymmetric Layout with Diagonal Elements */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
          {/* Decorative Blob Behind Profile - with clip-path for angular edge */}
          <div
            className="absolute top-8 left-4 sm:left-12 lg:left-24 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] opacity-20 blur-3xl -z-10"
            style={{
              backgroundColor: siteConfig.colors.sage,
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

              {/* Left Side - Profile Image (Offset) with Angular Border */}
              <motion.div
                className="lg:col-span-5 flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
                    <Image
                      src={siteConfig.profile.image}
                      alt={siteConfig.profile.name}
                      fill
                      className="rounded-full object-cover border-3 shadow-2xl"
                      style={{ borderColor: siteConfig.colors.midBg }}
                      priority
                    />
                  </div>

                  {/* Email and Patreon Icons - Floating near image with sharper edges */}
                  <div className="absolute -bottom-3 -right-3 flex space-x-2">
                    <motion.a
                      href={`mailto:${siteConfig.profile.email}`}
                      className="p-2.5 rounded-md shadow-xl transition-all duration-300"
                      style={{ backgroundColor: siteConfig.colors.slate, color: siteConfig.colors.white }}
                      aria-label="Email"
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icons.mail />
                    </motion.a>
                    <motion.a
                      href={siteConfig.links[0]?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-md shadow-xl transition-all duration-300"
                      style={{ backgroundColor: siteConfig.colors.rust, color: siteConfig.colors.white }}
                      aria-label="Patreon"
                      whileHover={{ scale: 1.08, rotate: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icons.patreon />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Hero Text with Editorial Sizing */}
              <motion.div
                className="lg:col-span-7 text-center lg:text-left"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                {/* Bold Hero Statement - Editorial Magazine Size */}
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    color: siteConfig.colors.text,
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1'
                  }}
                >
                  let us navigate into the{' '}
                  <span style={{ color: siteConfig.colors.sage }}>unknown</span>
                </h1>

                {/* Name & Tagline - Refined Sizes */}
                <div className="mb-5">
                  <p
                    className="text-xl sm:text-2xl font-medium mb-1.5"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      color: siteConfig.colors.text
                    }}
                  >
                    {siteConfig.profile.name}
                  </p>
                  <p
                    className="text-base sm:text-lg"
                    style={{
                      color: siteConfig.colors.slate,
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {siteConfig.profile.bio}
                  </p>
                </div>

                {/* Location - Smaller Editorial Size */}
                <p
                  className="flex items-center justify-center lg:justify-start text-sm mb-6"
                  style={{ color: siteConfig.colors.darkGray }}
                >
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {siteConfig.profile.location}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patreon Podcast Section - Offset Card with Diagonal Clip */}
        <motion.section
          className="py-10 sm:py-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {siteConfig.links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-4xl mx-auto lg:mx-0 lg:ml-auto rounded-lg shadow-2xl overflow-hidden group relative"
                style={{
                  backgroundColor: siteConfig.colors.slate,
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
                }}
                whileHover={{ scale: 1.015, y: -3 }}
                transition={{ duration: 0.25 }}
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
                    {link.image && (
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden shadow-lg">
                        <Image
                          src={link.image}
                          alt={link.title}
                          width={96}
                          height={96}
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
                    <div className="hidden sm:block">
                      <svg
                        className="w-6 h-6 transition-transform group-hover:translate-x-1"
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

        {/* Socials Section - Asymmetric with Sharper Edges */}
        <motion.section
          className="py-10 sm:py-14"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-10 text-center"
              style={{
                color: siteConfig.colors.text,
                fontFamily: 'var(--font-space-grotesk), sans-serif'
              }}
              variants={fadeInUp}
            >
              Connect
            </motion.h2>

            {/* Asymmetric Grid with Sharp Edges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    className="block p-6 rounded-md shadow-lg group overflow-hidden relative"
                    style={{
                      backgroundColor: siteConfig.colors.midBg,
                      borderLeft: `5px solid ${bgColor}`
                    }}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.025,
                      boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className="transition-all duration-300 group-hover:scale-105"
                          style={{ color: bgColor }}
                        >
                          <IconComponent />
                        </div>
                        <span
                          className="font-medium text-base"
                          style={{
                            color: siteConfig.colors.text,
                            fontFamily: 'var(--font-space-grotesk), sans-serif'
                          }}
                        >
                          {social.title}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

        {/* Diagonal Divider - Edgier Angular Cut */}
        <div className="my-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="h-1"
              style={{
                background: `linear-gradient(90deg, ${siteConfig.colors.sage} 0%, ${siteConfig.colors.slate} 50%, ${siteConfig.colors.mauve} 100%)`,
                opacity: 0.4,
                transform: 'skewY(-1deg)'
              }}
            ></div>
          </div>
        </div>

        {/* Former Bands Section - Minimal, Sharp Edges */}
        <motion.section
          className="py-10 pb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl sm:text-2xl font-bold text-center mb-7"
              style={{
                color: siteConfig.colors.darkGray,
                fontFamily: 'var(--font-space-grotesk), sans-serif'
              }}
            >
              Former Bands
            </h2>

            {/* Horizontal Scrollable Layout on Mobile, Grid on Desktop */}
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-5 pb-3 sm:pb-0">
              {siteConfig.formerBands.map((band, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-56 sm:w-auto p-5 rounded-md"
                  style={{ backgroundColor: siteConfig.colors.midBg }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
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
                      className="font-semibold text-base mb-0.5"
                      style={{
                        color: siteConfig.colors.text,
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontWeight: 500
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer
          className="py-6 border-t"
          style={{
            borderColor: siteConfig.colors.midBg
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
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
