# Alison Christoff - Personal Brand Website

A modern, customizable personal brand website built with Next.js, featuring linktree-style functionality with your custom brand colors and typography.

## 🎨 Brand Identity

**Colors:**
- Neutrals (60%): Soft creams and grays for foundation
- Color Pops (40%): Deep sage green, slate blue, mauve, and rust for strategic emphasis

**Typography:**
- Headlines: Georgia (serif)
- Body Text: Arial (sans-serif)

**Design Philosophy:** 60% calm neutrals, 40% rich earthy color pops. Always use full saturation. White text on color backgrounds.

## 🚀 Features

- **Linktree Replacement**: Mobile-optimized link hub matching your Beacons page
- **Your Content**: Pre-configured with your Instagram, TikTok, YouTube, Patreon
- **Former Bands Section**: Showcasing Callejera, Aerial Headwound 273, Pigmale Brains
- **Responsive Design**: Hamburger menu on mobile, menu bar on desktop
- **Brand Colors**: Deep sage green, slate blue, mauve, and rust accents
- **Modern Stack**: Next.js 16 + TypeScript + Tailwind CSS

## 📝 Customizing Your Site

### 1. Update Content & URLs

Edit `config/site.ts`:

```typescript
// Update with your actual URLs
links: [
  {
    title: "Alison Christoff | Patreon Podcast",
    url: "https://www.patreon.com/YOUR-ACTUAL-PATREON", // Replace!
  },
],

social: [
  { url: "https://instagram.com/YOUR-USERNAME" }, // Update all!
  { url: "https://tiktok.com/@YOUR-USERNAME" },
  { url: "https://youtube.com/@YOUR-USERNAME" },
]
```

### 2. Add Your Photos

**Profile Photo:**
1. Add `profile.jpg` to `/public` folder
2. In `app/page.tsx`, uncomment the Image component (line 126-133)

**Band Images:**
1. Add `callejera.jpg`, `aerial.jpg`, `pigmale.jpg` to `/public`
2. In `app/page.tsx`, uncomment band image code (line 227-229)

**Patreon Thumbnail:**
1. Add `patreon-thumb.jpg` to `/public`
2. In `app/page.tsx`, uncomment the Patreon image (line 173-175)

### 3. Update Your Bio

Edit the About page content in `config/site.ts`:

```typescript
about: {
  title: "About Me",
  content: `
    Write your story here...
    
    Talk about your journey with music, your podcast community,
    and what intentionality and presence mean to you.
  `,
}
```

## 🎨 Your Brand Colors

All colors are defined in `config/site.ts`:

```typescript
colors: {
  // Neutrals (60%)
  text: "#2D3748",       // Primary text
  lightBg: "#F9F8F6",    // Light backgrounds
  midBg: "#E8EAED",      // Borders, dividers
  darkGray: "#9CA3AF",   // Secondary text
  white: "#FFFEFB",      // Card backgrounds
  
  // Color Pops (40%)
  sage: "#4B5441",       // Primary brand color
  slate: "#2D4F5F",      // Buttons, CTAs, links
  mauve: "#998087",      // Soft accents
  rust: "#5C2418",       // Urgent accents
}
```

### Changing Colors

To use the rust color for a specific element, edit the component:

```typescript
style={{ color: siteConfig.colors.rust }}
```

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## 📤 Deploying Updates

```bash
git add .
git commit -m "Update content and photos"
git push
```

Vercel automatically deploys!

## 🎨 Adding New Sections

### Example: Add a "Press" Section

1. Add to `config/site.ts`:
```typescript
press: [
  { title: "Interview with XYZ", url: "https://...", date: "2024" },
]
```

2. Add section to `app/page.tsx` (copy the Former Bands structure)

3. Add nav item if you want a dedicated page

## 📱 What's Included

- ✅ Profile section with location
- ✅ Email & Patreon icon links
- ✅ Featured Patreon podcast link with description
- ✅ Social links (Instagram, TikTok, YouTube)
- ✅ Former Bands section
- ✅ About page
- ✅ Responsive navigation
- ✅ Your brand colors & typography

## 🔧 Common Tasks

### Add a New Social Link

In `config/site.ts`:
```typescript
social: [
  // ... existing links
  { title: "Spotify", url: "https://...", icon: "link" },
]
```

### Change Section Order

In `app/page.tsx`, rearrange the section blocks (they're clearly commented)

### Add a Blog

See the original README for step-by-step blog setup instructions

## 💡 AI-Assisted Development

**Good prompts for continuing development:**
- "Add a newsletter signup form using the slate color for the button"
- "Create a 'Press' section in the same style as Former Bands"
- "Add hover effects to the social links using the sage green"
- "Make the Patreon link more prominent with the rust accent color"

## 🐛 Troubleshooting

**Colors not showing?**
- Check that you're using `style={{ color: siteConfig.colors.sage }}` format
- Make sure you saved `config/site.ts`

**Images not loading?**
- Verify images are in `/public` folder
- Check file names match exactly (case-sensitive)
- Uncomment the Image components in the code

**Fonts not right?**
- Headlines should have `fontFamily: 'Georgia, serif'`
- Body uses Arial by default (set in layout.tsx)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel](https://vercel.com/docs)

## 🎉 Your Site Structure

```
achristoff-site/
├── app/
│   ├── page.tsx          # Homepage (your linktree)
│   ├── about/
│   │   └── page.tsx      # About page
│   └── layout.tsx        # Fonts & metadata
├── components/
│   └── navigation.tsx    # Nav bar with brand colors
├── config/
│   └── site.ts          # ⭐ ALL CONTENT & COLORS HERE ⭐
└── public/              # Add your images here!
    ├── profile.jpg       ← Your photo
    ├── patreon-thumb.jpg ← Patreon thumbnail
    ├── callejera.jpg     ← Band images
    ├── aerial.jpg
    └── pigmale.jpg
```

---

**Built with intentionality using Next.js** ✨
