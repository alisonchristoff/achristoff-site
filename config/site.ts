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
    {
      name: "Callejera",
      role: "Bass",
      image: "/callejera.png", // Optional: add band images to /public/
      url: "https://open.spotify.com/artist/5fZC0N5JLxe5cO9WY3mFwJ", // Add Spotify/Bandcamp link if you want
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

  // Brand Colors - ILLUMINATED MANUSCRIPT MODE
  // Almost-black canvas + FULL SATURATION earth tones (medieval stained glass)
  colors: {
    // Deep Dark Canvas (Foundation)
    text: "#e8e6e3", // Warm off-white (parchment)
    lightBg: "#0f1419", // Almost black with warm undertones (main background)
    midBg: "#1a1f26", // Elevated surfaces (cards)
    darkGray: "#9ca3af", // Secondary text
    white: "#f5f3f0", // Pure highlights
    deepBg: "#0a0d11", // Deepest shadows

    // FULL SATURATION Color Pops (Stained Glass Earth Tones)
    sage: "#4B5441", // Deep Sage Green - FULL SATURATION
    slate: "#2D4F5F", // Deep Slate Blue - FULL SATURATION
    mauve: "#A45D54", // Warm Mauve-Terracotta - FULL SATURATION
    rust: "#8B3826", // Deep Burnt Rust - FULL SATURATION
  },
} 
