import Navigation from "@/components/navigation"
import { siteConfig } from "@/config/site"

export default function About() {
  return (
    <>
      <Navigation />
      <main 
        className="min-h-screen pt-16"
        style={{ backgroundColor: siteConfig.colors.lightBg }}
      >
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div 
            className="rounded-3xl shadow-lg p-8 sm:p-12"
            style={{ backgroundColor: siteConfig.colors.white }}
          >
            <h1
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{
                color: siteConfig.colors.deepBg,
                fontFamily: 'var(--font-bitter), serif'
              }}
            >
              {siteConfig.about.title}
            </h1>

            <div
              className="text-base leading-relaxed whitespace-pre-line"
              style={{ color: siteConfig.colors.deepBg }}
            >
              {siteConfig.about.content}
            </div>

            {siteConfig.profile.email && (
              <div 
                className="mt-8 pt-8 border-t"
                style={{ borderColor: siteConfig.colors.midBg }}
              >
                <h2
                  className="text-xl font-semibold mb-3"
                  style={{
                    color: siteConfig.colors.deepBg,
                    fontFamily: 'var(--font-bitter), serif'
                  }}
                >
                  Get in Touch
                </h2>
                <a
                  href={`mailto:${siteConfig.profile.email}`}
                  className="inline-flex items-center font-medium hover:opacity-70 transition-opacity"
                  style={{ color: siteConfig.colors.slate }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.profile.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
