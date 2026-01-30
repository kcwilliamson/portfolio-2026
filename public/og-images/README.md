# Blog OG Images

This directory contains Open Graph images for blog posts that appear when shared on social media.

## How It Works

Each blog post will look for a post-specific OG image named `blog-[slug].png`:
- `blog-dont-yoko-your-ux.png` ✅ (exists - will show Yoko image)
- `blog-other-post.png` (if this doesn't exist, no custom image will show)

## Quick Setup - Creating OG Images for New Posts

**Design Requirements:**
- Size: 1200px x 630px
- Background: #0033ff (your brand blue)
- Include: Your name, "BLOG", and tagline
- Font: Inter (Bold/Black)
- Colors: White text on blue background

**Tools to create it:**
- Canva (use "Facebook Post" template, resize to 1200x630)
- Figma
- Photoshop
- Any image editor

### Option 2: Use the HTML Template

1. Open `blog-og-template.html` in a browser at 1200x630 resolution
2. Take a screenshot
3. Save as `blog-og.png` in this directory

### Option 3: Per-Post OG Images (Advanced)

Create individual OG images for each blog post named:
- `blog-dont-yoko-your-ux.png`
- `blog-[slug].png`

These will override the generic image for that specific post.

## Current Setup

The blog template automatically:
- Uses `blog-og.png` as the default OG image
- Falls back gracefully if image doesn't exist
- Includes proper meta tags for title, description, and colors
- Adds theme color (#0033ff) for browser UI

## Testing Your OG Images

Use these tools to preview how your posts will look:
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Template Content

The HTML template includes:
- Your name (KATIE WILLIAMSON SEBKHI)
- Blog post title
- Blog post description
- Tagline (UX Intelligence Pioneer • Digital Storyteller)
- Brand blue background (#0033ff)
