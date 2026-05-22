@AGENTS.md

# 🧠 Claude Code Instructions — Portfolio Project

## How to Use This File

1. **Read `AGENTS.md` first.** It contains the multi-agent role system and Next.js 16 specific warnings.
2. **Adopt a role before coding.** Start as `System Architect`, then switch to `UI/UX Designer`, then `Frontend Developer`.
3. **Follow the PROMPT.md task list.** It contains the prioritized roadmap for this portfolio revolution.

---

## Critical Rules

### Next.js 16 Breaking Changes
- This is **NOT** standard Next.js. Check `node_modules/next/dist/docs/` if you need to use:
  - Data fetching patterns
  - Image optimization API
  - Font loading
  - Metadata API
  - Route handlers
- Do NOT assume APIs from Next.js 14/15 work the same way.

### Performance Budget
- Lighthouse Performance >= 90
- No layout shift (CLS < 0.1)
- First Contentful Paint < 1.8s
- Time to Interactive < 3.8s

### Code Quality
- **No `any` types.** Ever. Define interfaces.
- **No inline styles** for dynamic values that repeat. Use CSS variables.
- **No `!important`** in CSS.
- **No console.log** in production code. Use `console.error` for errors only.

### File Organization
```
src/
  app/              # Next.js App Router
    api/            # API routes (keep existing)
    globals.css     # Reset, variables, keyframes only
    layout.tsx      # Root layout (keep fonts, metadata)
    page.tsx        # Home page
    loading.tsx     # Loading UI
    error.tsx       # Error boundary
  components/
    ui/             # Reusable UI primitives
    layout/         # Navbar, Footer
    hero/           # Hero section
    sections/       # Page sections
    effects/        # Visual effects (Galaxy, Cursor, etc.)
  hooks/            # Custom React hooks
  lib/
    data.ts         # ALL static data
    utils.ts        # Helper functions
  types/
    index.ts        # TypeScript interfaces
```

---

## Creative Direction

This portfolio should feel like a **premium developer experience** — something between:
- A futuristic sci-fi interface (clean, neon accents, precision)
- A galactic observatory (depth, particles, cosmic scale)
- A bioluminescent forest (organic, subtle green life, warmth)

**Mood keywords:** Precise. Alive. Premium. Technical but human.

**Color philosophy:**
- Base: Deep space dark / clean light
- Accents: Electric purple, cyan, magenta (galactic)
- Organic: Soft green glow (forest fireflies)
- Energy: Warm amber highlights

---

## When You Get Stuck

1. Check existing code patterns — this project has established conventions.
2. Prefer CSS solutions over JS libraries for animations.
3. If a library is needed, prefer lightweight ones:
   - `framer-motion` only for complex orchestrated animations
   - `gsap` only for scroll-triggered timelines
   - Otherwise: CSS animations + Intersection Observer
4. Test on mobile viewport before declaring a feature done.

---

## Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build (must pass!)
npm run lint     # ESLint check
```

**Always run `npm run build` before finishing a task.**
