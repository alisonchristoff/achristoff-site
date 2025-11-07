# 🚀 Quick Start - Your Branded Site

## What's Already Set Up

✅ Your brand colors (sage green, slate blue, mauve, rust)  
✅ Your typography (Georgia for headlines, Arial for body)  
✅ Your content structure (Patreon, socials, former bands)  
✅ Mobile-responsive layout matching your Beacons page  

## Step 1: Download and Copy Files

Extract the zip and copy these folders to your project:
`/Users/alisonpartee/Dropbox/Mac/Documents/alisonchristoff_github/achristoff-site/`

**Copy these (overwrite existing):**
- `app/` folder → Replace everything
- `components/` folder → Replace everything
- `config/` folder → Add this new folder
- `README.md` → Replace

## Step 2: Update Your URLs

Open `config/site.ts` and update with your actual URLs:

```typescript
links: [
  {
    url: "https://www.patreon.com/YOUR-ACTUAL-URL", // ← Update!
  },
],

social: [
  { url: "https://instagram.com/YOUR-USERNAME" }, // ← Update!
  { url: "https://tiktok.com/@YOUR-USERNAME" },   // ← Update!
  { url: "https://youtube.com/@YOUR-USERNAME" },  // ← Update!
]
```

## Step 3: Add Your Photos

### Profile Photo
1. Save your photo as `profile.jpg` in the `/public` folder
2. Open `app/page.tsx`
3. Around line 126, find the commented Image component
4. Uncomment it (remove the `/*` and `*/`)
5. Comment out or delete the placeholder div above it

### Band Photos (Optional)
1. Save band images as `callejera.jpg`, `aerial.jpg`, `pigmale.jpg` in `/public`
2. In `app/page.tsx` around line 227, uncomment the Image component
3. Comment out the placeholder div

### Patreon Thumbnail (Optional)
1. Save thumbnail as `patreon-thumb.jpg` in `/public`
2. In `app/page.tsx` around line 173, uncomment the Image component

## Step 4: Test Locally

```bash
# If npm run dev is running, stop it (Ctrl+C) then:
npm run dev
```

Visit http://localhost:3000 - you should see your branded site!

## Step 5: Customize Your About Page

Edit `config/site.ts`:

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

## Step 6: Deploy

```bash
git add .
git commit -m "Add branded MVP with custom colors and content"
git push
```

Check your Vercel dashboard - your site will deploy automatically!

---

## 🎨 Your Brand Colors in Action

- **Sage Green** (#4B5441): Profile initial, primary accents
- **Slate Blue** (#2D4F5F): Links, buttons, CTAs
- **Mauve** (#998087): Band placeholders, soft accents
- **Rust** (#5C2418): Available for urgent calls-to-action

All defined in `config/site.ts` - easy to use anywhere!

---

## ✨ What You Have Now

✅ Exact replica of your Beacons functionality  
✅ Your brand colors throughout  
✅ Georgia headlines, Arial body text  
✅ Room to grow (blog, shop, etc.)  
✅ Professional, modern design  
✅ Easy to maintain and update  

## 💬 Next Steps

- Update URLs in config
- Add your photos
- Customize your About page
- Push to GitHub
- Share your new site!

**Need help?** Check README.md or ask Claude for assistance.

---

**Your site, your brand, your way** 🌿
