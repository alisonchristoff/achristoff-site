"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b-4"
      style={{
        backgroundColor: siteConfig.colors.deepBg,
        borderColor: siteConfig.colors.sage
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">

          {/* Logo - Y2K CHUNKY */}
          <Link
            href="/"
            className="font-black text-base uppercase tracking-tight transition-all hover:tracking-widest"
            style={{
              color: siteConfig.colors.white,
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              textShadow: `2px 2px 0 ${siteConfig.colors.sage}`
            }}
          >
            {siteConfig.name.toUpperCase()}
          </Link>

          {/* Desktop Nav - CHUNKY UPPERCASE */}
          <div className="hidden md:flex gap-6 items-center">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-black uppercase relative group transition-all hover:tracking-wider"
                style={{
                  color: siteConfig.colors.darkGray,
                  fontFamily: 'var(--font-space-grotesk), sans-serif'
                }}
              >
                {item.title}
                {/* Chunky underline */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-1 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: siteConfig.colors.rust }}
                />
              </Link>
            ))}

            {/* Divider */}
            <div className="h-4 w-px"
                 style={{ backgroundColor: siteConfig.colors.darkGray, opacity: 0.4 }} />

            {/* Social icons */}
            <a href="https://www.instagram.com/alisonkaychristoff/"
               target="_blank"
               rel="noopener noreferrer"
               className="transition-all hover:scale-110"
               style={{ color: siteConfig.colors.darkGray }}
               aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a href="https://www.youtube.com/@alisonchristoff"
               target="_blank"
               rel="noopener noreferrer"
               className="transition-all hover:scale-110"
               style={{ color: siteConfig.colors.darkGray }}
               aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl font-black"
            style={{ color: siteConfig.colors.white }}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '≡'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2" style={{ borderColor: siteConfig.colors.mauve }}>
            <div className="flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black uppercase px-2"
                  style={{
                    color: siteConfig.colors.white,
                    fontFamily: 'var(--font-space-grotesk), sans-serif'
                  }}
                >
                  → {item.title}
                </Link>
              ))}

              {/* Social links */}
              <div className="flex gap-4 px-2 mt-2 pt-3 border-t"
                   style={{ borderColor: siteConfig.colors.sage, opacity: 0.3 }}>
                <a href="https://www.instagram.com/alisonkaychristoff/"
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={() => setIsOpen(false)}
                   className="flex items-center gap-2 text-xs font-black uppercase"
                   style={{ color: siteConfig.colors.white }}>
                  <InstagramIcon /> INSTAGRAM
                </a>
                <a href="https://www.youtube.com/@alisonchristoff"
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={() => setIsOpen(false)}
                   className="flex items-center gap-2 text-xs font-black uppercase"
                   style={{ color: siteConfig.colors.white }}>
                  <YouTubeIcon /> YOUTUBE
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
