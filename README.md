# Katie Williamson Sebkhi Portfolio

Portfolio website built with Astro showcasing UX Content Strategy, AI/ML projects, and team leadership experience.

## 🚀 Quick Start

```sh
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

## 📝 How to Update Content

### **All content is managed in ONE file: `src/data/portfolio.ts`**

This file contains:
- Work history (timeline on About page)
- Portfolio projects (homepage cards + project pages)
- Project descriptions, metrics, and case study content

### Quick Updates

#### 1. **Update Work History**
Edit the `workHistory` array in `src/data/portfolio.ts`:

```typescript
{
  title: "Your Job Title",
  company: "Company Name",
  period: "Month Year - Present",
  description: "What you did...",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

#### 2. **Update Project Content**
Edit entries in the `portfolioPieces` array in `src/data/portfolio.ts`:

```typescript
{
  slug: "project-url",              // Creates /project-url
  title: "Project Title",           // Homepage card title
  subtitle: "Brief description",    // Homepage card subtitle
  color: "#FF1493",                 // Hover color (hex code)
  sections: [...]                   // Project page sections
}
```

#### 3. **Update Contact Info**
- Email: Edit in `src/pages/about.astro` (search for "thekatiewilliamson@gmail.com")
- LinkedIn: Edit in `src/pages/about.astro` and `src/pages/index.astro`
- Social icons: Update href attributes in both files

#### 4. **Update Taglines**
- Homepage: Edit taglines in `src/pages/index.astro` (lines ~24-27)
- About page: Edit taglines in `src/pages/about.astro` (lines ~25-28)

## 📁 Project Structure

```
portfolio-2026/
├── src/
│   ├── data/
│   │   └── portfolio.ts              ← MAIN CONTENT FILE
│   ├── pages/
│   │   ├── index.astro               ← Homepage
│   │   ├── about.astro               ← About page
│   │   ├── cloudspeaker.astro        ← Project page example
│   │   ├── conversation-architecture.astro
│   │   ├── team-leadership.astro
│   │   └── content-roi.astro
│   └── layouts/
│       └── Layout.astro
├── public/                           ← Static assets (images, favicon, etc.)
└── package.json
```

## 🎨 Adding a New Project

### Step 1: Add project data to `src/data/portfolio.ts`

```typescript
{
  slug: "my-new-project",
  title: "My New Project",
  subtitle: "Brief description for homepage",
  color: "#00FF00",  // Any hex color
  sections: [
    {
      heading: "The Challenge",
      content: "Problem description...\n\nUse \\n\\n for paragraph breaks.",
      examples: [
        { type: "image", caption: "Image description" }
      ]
    },
    {
      heading: "The Solution",
      content: "How you solved it...",
      examples: []
    },
    {
      heading: "The Impact",
      content: "Results and metrics...",
      examples: []
    }
  ]
}
```

### Step 2: Create project page file

Copy an existing project file (e.g., `src/pages/cloudspeaker.astro`) and rename it to match your slug:

```sh
cp src/pages/cloudspeaker.astro src/pages/my-new-project.astro
```

The page will automatically pull content from `portfolio.ts` based on the slug!

### Step 3: Done!

Your project will automatically appear:
- On the homepage as a navigation card
- At `/my-new-project` URL
- With content from `portfolio.ts`

## 🎨 Changing Colors

Each project has a hover color set in `portfolio.ts`:

```typescript
color: "#FF1493"  // Deep pink
color: "#00FF00"  // Bright green
color: "#00FFFF"  // Cyan
color: "#9D00FF"  // Purple
```

Pick any hex color for the homepage hover effect!

## 📸 Adding Images

1. Add images to `public/images/` folder
2. Reference in project sections:

```typescript
examples: [
  { type: "image", caption: "My screenshot description" }
]
```

3. Update the project page template to display your images

## 🚢 Deployment

### Deploy to Cloudflare Pages (Recommended)

1. Push to GitHub (this repo)
2. Connect to Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
   - Framework preset: Astro

### Deploy to Netlify/Vercel

Same build settings work for all platforms!

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

## 🎯 Key Files Reference

| File | Purpose |
|------|---------|
| `src/data/portfolio.ts` | **MAIN CONTENT** - Work history & projects |
| `src/pages/index.astro` | Homepage layout |
| `src/pages/about.astro` | About page with timeline |
| `src/pages/[project].astro` | Individual project pages |
| `public/` | Static assets (images, favicon) |

---

**Questions?** All content updates happen in `src/data/portfolio.ts` - look there first!
