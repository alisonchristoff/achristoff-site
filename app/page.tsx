import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { siteConfig } from "@/config/site"

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

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16" style={{ backgroundColor: siteConfig.colors.lightBg }}>
        <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative w-36 h-36 mx-auto mb-6">
              <Image
                src={siteConfig.profile.image}
                alt={siteConfig.profile.name}
                fill
                className="rounded-full object-cover border-4"
                style={{ borderColor: siteConfig.colors.sage }}
              />
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-2"
              style={{
                color: siteConfig.colors.text,
                fontFamily: 'var(--font-bitter), serif'
              }}
            >
              {siteConfig.profile.name}
            </h1>
            <p 
              className="flex items-center justify-center text-base mb-2"
              style={{ color: siteConfig.colors.darkGray }}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {siteConfig.profile.location}
            </p>
            <p 
              className="text-lg mb-4"
              style={{ color: siteConfig.colors.text }}
            >
              {siteConfig.profile.bio}
            </p>
            
            {/* Email and Patreon Icons */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <a
                href={`mailto:${siteConfig.profile.email}`}
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ color: siteConfig.colors.slate }}
                aria-label="Email"
              >
                <Icons.mail />
              </a>
              <a
                href={siteConfig.links[0]?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:scale-110"
                style={{ color: siteConfig.colors.slate }}
                aria-label="Patreon"
              >
                <Icons.patreon />
              </a>
            </div>
          </div>

          {/* Main Featured Link - Patreon Podcast */}
          {siteConfig.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
              style={{ backgroundColor: siteConfig.colors.white }}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {link.image && (
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden" style={{ backgroundColor: siteConfig.colors.midBg }}>
                      <Image 
                        src={link.image} 
                        alt={link.title} 
                        width={64} 
                        height={64} 
                        className="object-cover" 
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg font-semibold mb-1 transition-colors"
                      style={{
                        color: siteConfig.colors.text,
                        fontFamily: 'var(--font-bitter), serif'
                      }}
                    >
                      {link.title}
                    </h3>
                    {link.description && (
                      <p 
                        className="text-sm"
                        style={{ color: siteConfig.colors.darkGray }}
                      >
                        {link.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Socials Section */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold text-center mb-4"
              style={{
                color: siteConfig.colors.text,
                fontFamily: 'var(--font-bitter), serif'
              }}
            >
              Socials
            </h2>
            <div className="space-y-3">
              {siteConfig.social.map((social, index) => {
                const IconComponent = Icons[social.icon as keyof typeof Icons] || Icons.link
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group"
                    style={{ backgroundColor: siteConfig.colors.white }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="transition-colors"
                          style={{ color: siteConfig.colors.slate }}
                        >
                          <IconComponent />
                        </div>
                        <span 
                          className="font-medium text-lg"
                          style={{ color: siteConfig.colors.text }}
                        >
                          {social.title}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        style={{ color: siteConfig.colors.darkGray }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="my-12 flex justify-center">
            <div className="w-64 h-px" style={{ backgroundColor: siteConfig.colors.midBg }}></div>
          </div>

          {/* Former Bands Section */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold text-center mb-4"
              style={{
                color: siteConfig.colors.text,
                fontFamily: 'var(--font-bitter), serif'
              }}
            >
              Former Bands
            </h2>
            <div className="space-y-3">
              {siteConfig.formerBands.map((band, index) => (
                <div
                  key={index}
                  className="block w-full p-4 rounded-2xl shadow-sm"
                  style={{ backgroundColor: siteConfig.colors.white }}
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden"
                      style={{ backgroundColor: siteConfig.colors.midBg }}
                    >
                      <Image 
                        src={band.image} 
                        alt={band.name} 
                        width={56} 
                        height={56} 
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="font-semibold text-lg"
                        style={{ color: siteConfig.colors.text }}
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div 
            className="text-center text-sm pt-8 border-t"
            style={{ 
              color: siteConfig.colors.darkGray,
              borderColor: siteConfig.colors.midBg
            }}
          >
            <p>© 2025 {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  )
}
