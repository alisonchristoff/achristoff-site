"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ 
        backgroundColor: `${siteConfig.colors.white}e6`,
        borderColor: siteConfig.colors.midBg
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link
            href="/"
            className="font-bold text-xl transition-colors hover:opacity-80"
            style={{
              color: siteConfig.colors.text,
              fontFamily: 'var(--font-space-grotesk), sans-serif'
            }}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium relative group transition-colors"
                style={{
                  color: siteConfig.colors.slate,
                  fontFamily: 'var(--font-space-grotesk), sans-serif'
                }}
              >
                {item.title}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: siteConfig.colors.sage }}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: siteConfig.colors.text }}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="md:hidden py-4 border-t"
            style={{ borderColor: siteConfig.colors.midBg }}
          >
            <div className="flex flex-col space-y-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium px-2 transition-colors hover:opacity-70"
                  style={{
                    color: siteConfig.colors.slate,
                    fontFamily: 'var(--font-space-grotesk), sans-serif'
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
