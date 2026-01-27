# Blog Setup Instructions

Your blog is now set up and ready to go! Currently, the `/blog` route shows a "Coming Soon" page. When you're ready to go live with your blog posts, follow these steps:

## Current Status

- **Blog Icon**: Added to homepage with tooltip "Visit Katie's blog" ✅
- **Content Collection**: Set up to read markdown files from `src/content/blog/` ✅
- **Coming Soon Page**: Live at `/blog` ✅
- **Blog List Template**: Ready to activate (`blog-list-template.astro`) ✅
- **Blog Post Template**: Ready for individual posts (`blog/[...slug].astro`) ✅

## How to Add Blog Posts

### Step 1: Create Your Markdown Files

Create your blog post markdown files in `src/content/blog/`. Here's the format:

```markdown
---
title: "UX as a Product"
description: "Stop Designing, Start Shipping, Treating UX as a P&L product"
pubDate: 2026-01-15
category: "UX as a Product"
featured: true
---

Your blog content goes here...

## Subheader

More content with **bold text** and *italic text*.

- Bullet points
- Work great too

### Another subheader

Keep writing your amazing content!
```

### Example File Names:
- `ux-as-a-product.md`
- `architects-delima.md`
- `accessibility-of-logic.md`

### Step 2: Activate the Blog

When you have at least 3 blog posts ready and want to go live:

1. **Rename the current blog page (backup):**
   ```bash
   cd src/pages
   mv blog.astro blog-coming-soon-backup.astro
   ```

2. **Activate the blog list page:**
   ```bash
   mv blog-list-template.astro blog.astro
   ```

3. **Build and test:**
   ```bash
   npm run build
   npm run preview
   ```

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Launch blog with initial posts"
   git push
   ```

## Blog Post Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Post title | "UX as a Product" |
| `description` | Yes | Brief summary (shows on listing page) | "Stop Designing, Start Shipping..." |
| `pubDate` | Yes | Publication date | 2026-01-15 |
| `category` | No | Category label | "UX as a Product" |
| `featured` | No | Highlight post with purple title | true or false |

## Styling Reference

Based on your design mockups:

- **Blog Header Color**: Purple (`#7C3AED`)
- **Featured Post Titles**: Purple (`#7C3AED`)
- **Regular Post Titles**: Black, turns purple on hover
- **Layout**: Left sidebar with name/social icons, right side for content
- **Font**: Inter (bold/black weights for headers)

## File Structure

```
src/
├── content/
│   ├── blog/
│   │   ├── .gitkeep (delete when adding real posts)
│   │   ├── your-first-post.md
│   │   ├── your-second-post.md
│   │   └── your-third-post.md
│   └── config.ts (defines blog schema)
├── pages/
│   ├── blog.astro (currently "Coming Soon" page)
│   ├── blog-list-template.astro (activate this when ready)
│   └── blog/
│       └── [...slug].astro (individual blog post template)
```

## Preview Before Going Live

To test locally:

```bash
# Start dev server
npm run dev

# Visit in browser
http://localhost:4321/blog
```

## Markdown Tips

### Headers
```markdown
## Large Header (H2)
### Medium Header (H3)
```

### Lists
```markdown
- Unordered list
- Another item

1. Ordered list
2. Second item
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/images/your-image.png)
```

Place images in `public/images/` folder.

### Bold & Italic
```markdown
**Bold text**
*Italic text*
```

### Blockquotes
```markdown
> This is a quote
```

## Questions?

The blog system is fully set up and will work automatically once you:
1. Add markdown files to `src/content/blog/`
2. Activate the blog list template (rename `blog-list-template.astro` to `blog.astro`)
3. Build and deploy

The individual post pages are already configured to work dynamically - no extra setup needed!
