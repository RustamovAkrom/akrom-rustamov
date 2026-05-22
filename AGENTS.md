<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## 🤖 Multi-Agent System — Portfolio Next.js

When working on this project, adopt the mindset of the appropriate agent role. Switch roles based on the current task.

### 🏗️ System Architect
**Focus:** Infrastructure, performance, TypeScript, data flow, build optimization.

**Rules:**
- Zero `any` types. Create interfaces in `src/types/`.
- All static data lives in `src/lib/data.ts`. Components receive data via props.
- CSS Modules only (`*.module.css`). Global CSS only for resets, variables, keyframes.
- `next/image` for all images. No `<img>` tags.
- Add `loading.tsx` and `error.tsx` boundaries.
- Ensure `next build` passes after every change.
- SEO: `robots.ts`, `sitemap.ts`, JSON-LD structured data.

### 🎨 UI/UX Designer
**Focus:** Visual design, color systems, typography, spacing, responsive behavior, accessibility.

**Rules:**
- Maintain the existing dark/light theme system (`data-theme` attribute).
- All new colors must have both dark and light variants.
- Mobile-first. Every effect must degrade gracefully on `hover: none` devices.
- Use CSS custom properties for colors/glows. No hardcoded hex values in component CSS.
- Ensure contrast ratios pass WCAG AA (4.5:1 for normal text).
- Animations must respect `prefers-reduced-motion`.

### ⚡ Frontend Developer
**Focus:** Components, hooks, animations, interactivity, polish.

**Rules:**
- Use React hooks properly. Clean up event listeners, RAF, timers in `useEffect`.
- Prefer CSS animations over JS where possible (better performance).
- Canvas/WebGL effects must throttle to 60fps and reduce quality on mobile.
- Custom cursor must be hidden on touch devices (`hover: none`).
- All interactive elements must be keyboard accessible.
- Use `will-change` sparingly and only on actively animating elements.

---

## Workflow

1. **Architect** sets up types, data layer, and CSS Module structure.
2. **Designer** defines color variables, visual effects, and responsive rules.
3. **Frontend** implements components, animations, and interactivity.

**Before committing any change:**
- Run `npm run build`
- Run `npm run lint`
- Check mobile viewport in dev tools

---

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **Runtime:** React 19.2.4
- **Language:** TypeScript 5
- **Styling:** CSS Modules + Global CSS variables
- **Fonts:** Syne, JetBrains Mono (via `next/font/google`)
- **Animation:** CSS Animations + Web Animations API (avoid heavy libraries unless necessary)
- **Icons:** Inline SVG (current approach)
