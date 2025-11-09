export const siteConfig = {
  name: "Alison Christoff",
  title: "Alison Christoff",
  description: "intentionality | presence",
  
  // Profile
  profile: {
    image: "/profile.jpg", // Add your profile photo to /public/profile.jpg
    name: "Alison Christoff",
    location: "Indianapolis, IN",
    bio: "intentionality | presence",
    email: "alisonchristoff@gmail.com",
  },

  // Main Links (linktree style)
  links: [
    {
      title: "Alison Christoff | Patreon Podcast",
      description: "A subscription-based community focused on grounding within the digital age",
      url: "https://www.patreon.com/alisonchristoff", // Update with your actual Patreon URL
      icon: "patreon",
      image: "/patreon-thumb.png", // Optional: add thumbnail image
    },
  ],

  // Social Links
  social: [
    {
      title: "Instagram",
      url: "https://instagram.com/alisonkaychristoff", // Update with your actual URL
      icon: "instagram",
    },
    {
      title: "TikTok",
      url: "https://tiktok.com/@alisonchristoff", // Update with your actual URL
      icon: "tiktok",
    },
    {
      title: "YouTube",
      url: "https://youtube.com/@alisonchristoff", // Update with your actual URL
      icon: "youtube",
    },
  ],

  // Former Bands
  formerBands: [
    {
      name: "Callejera",
      role: "Bass",
      image: "/callejera.png", // Optional: add band images to /public/
      url: "https://open.spotify.com/embed/artist/5fZC0N5JLxe5cO9WY3mFwJ", // Add Spotify/Bandcamp link if you want
    },
    {
      name: "Aerial Headwound 273",
      role: "Vocals",
      image: "/aerial.png",
      url: "https://aerialheadwound273.bandcamp.com/album/s-t",
    },
    {
      name: "Pigmale Brains",
      role: "Vocals",
      image: "/pigmale.png",
      url: "https://open.spotify.com/artist/1hhzqRknlZJlItf1EH0oYR",
    },
  ],

  // Navigation items
  nav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    // Add more pages as you build them:
    // { title: "Blog", href: "/blog" },
  ],

  // About page content
  about: {
    title: "About Me",
    content: `
      Write your longer bio here. This is where you can tell your story, 
      share your background, and connect with your audience on a deeper level.
      
      Talk about your journey with music, your podcast community, and what 
      intentionality and presence mean to you.
    `,
  },

  // Brand Colors - Dark Moody Charcoal Theme
  colors: {
    // Dark Neutrals (60% - Foundation)
    text: "#e8e6e3", // Off-white/cream for primary text
    lightBg: "#1a1f26", // Dark charcoal with warm undertones (main background)
    midBg: "#252b33", // Lighter charcoal for cards/elevated surfaces
    darkGray: "#6b7280", // Muted gray for secondary text
    white: "#f5f3f0", // Warm off-white for highlights
    deepBg: "#14181d", // Even darker for depth/contrast

    // Color Pops (40% - Strategic Richness)
    // VIBRANT EARTHY COLORS - Stand out against dark background
    sage: "#6b7f5e", // Brighter sage green - earthy but visible on dark
    slate: "#4a6b7c", // Lighter slate blue - saturated teal-blue
    mauve: "#c97b70", // Bright mauve-terracotta - warm rose-coral
    rust: "#d4573b", // Vibrant burnt rust - bright earth-crust red
  },
}
