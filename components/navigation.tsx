"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

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
          <div className="hidden md:flex gap-6">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
