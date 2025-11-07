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

  // Brand Colors
  colors: {
    // Neutrals (60%)
    text: "#2D3748",
    lightBg: "#F9F8F6",
    midBg: "#E8EAED",
    darkGray: "#9CA3AF",
    white: "#FFFEFB",
    
    // Color Pops (40%)
    sage: "#4B5441", // Primary brand color
    slate: "#2D4F5F", // Buttons, CTAs
    mauve: "#998087", // Soft accents
    rust: "#5C2418", // Urgent accents, contrast
  },
}
