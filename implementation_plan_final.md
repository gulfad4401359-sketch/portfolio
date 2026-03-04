# Antigravity Portfolio — Implementation Plan
**Status:** Sessions 1–6 ✅ Complete · Sessions 7–8 🔲 Remaining

---

## SECTION A — Document Comprehension Summary

### Color Palette — 60/30/10 Rule
| Role | Color | Hex | Usage |
|---|---|---|---|
| **60% Background** | Blush White | `#FFF4F0` | Body background on every page — never changes |
| **30% Structure** | Deep Violet | `#4A006A` | Navbar, footer, ALL headings H1–H4, body text, borders |
| **10% Accent** | Rose Gold | `#E8735A` | CTA buttons, active nav link, timeline dots, tag text, title underlines, contact icons, scroll progress bar — nothing else |

### Font Families & Roles
| Font | CSS Variable | Usage |
|---|---|---|
| **Cormorant Garamond** | `--font-display` | All display text, H1–H3, hero text, pull quotes |
| **DM Sans** | `--font-body` | Body copy, UI text, H4, navbar links, button labels |
| **JetBrains Mono** | `--font-mono` | Dates, project numbers, tech tags, code references |
> ❌ Inter, Roboto, Arial, Syne, and all system fonts are FORBIDDEN.

### What Is Copied Verbatim From Source Files

**From `card_flip.html`:**
- `perspective: 2000px` on `.card-container`
- `transform-style: preserve-3d` on `.card`
- `backface-visibility: hidden` on both `.card-face` elements
- `.card-back { transform: rotateY(180deg) }` — pre-rotation on back face
- `.card-container:hover .card { transform: rotateY(180deg) }` — hover trigger
- `transition: transform 0.7s ease` — duration locked
- `@keyframes scale` pulse ring animation (recolored to rose gold `#F5A990`)

**From `move_and_flip.html`:**
- `lerp(start, end, 0.08)` function — factor permanently locked at `0.08`
- `requestAnimationFrame animate()` loop reading `window.scrollY / maxScroll`
- `position: sticky; top: 0; height: 100vh` sticky viewport pattern
- Phase-based `targetX`, `targetY`, `targetRot`, `targetTilt` logic
- Text fade choreography (`text1`, `text2`, `text3` opacity + transform)

### Four Home Page Scroll Phases
| Phase | Scroll % | Card X | Card Rotation | Tilt |
|---|---|---|---|---|
| **0 — Arrival** | 0% → 15% | 50% (centered) | rotateY(0°) | 0° |
| **1 — Skills Reveal** | 15% → 50% | 50% → 68% (right) | 0° → 180° | 0° → 6° |
| **2 — About Reveal** | 50% → 85% | stays 68% | 180° → 360° | holds 6° |
| **3 — Exit & Resume** | 85% → 100% | 68% → 50% (center) | 360° | 6° → 0° |

### Five Most Critical Design Rules
1. **Background is always `#FFF4F0`** — NEVER dark, NEVER white, NEVER any other color on body
2. **Rose gold is 10% only** — appears ONLY on: CTA buttons, active nav, timeline dots, tag text, title bars (48×2px), contact icons, scroll bar. Nowhere else.
3. **All shadows are violet-tinted** — `rgba(74,0,106,x)` for elevation, `rgba(232,115,90,x)` for glow. `rgba(0,0,0,x)` is FORBIDDEN.
4. **Flip card implementation is locked** — copy `card_flip.html` CSS exactly. No alternatives.
5. **Lerp factor 0.08 is locked** — never adjusted. Change scroll range distances instead.

---

## SECTION B — Tool Activation Plan

| Tool | Purpose | First Active | Completes |
|---|---|---|---|
| **Filesystem MCP** | Save every file | Session 1 | Session 8 (permanent) |
| **Memory MCP** | Read/write build state | Session 1 (read) | Session 8 (final write) |
| **Serper Search MCP** | Find Thanh Tran + Jacob Schwartz URLs | Session 1 (planning) | Session 1 |
| **Fetch MCP** | Scrape Portavia + reference portfolios | Session 1 (pre-Home) | Session 3 |
| **Sequential Thinking MCP** | Plan scroll-anim.js + card flip | Session 2 | Session 2 |
| **Stitch MCP** | Visual screen before each page | Session 3 (Home) | Session 6 |
| **Puppeteer MCP** | Screenshot every page after build | Session 1 (navbar) | Session 8 (live URL) |
| **GitHub MCP** | Create repo, commit files, enable Pages | Session 8 | Session 8 |

---

## SECTION C — Complete Build Sequence

### ✅ Session 1 — Design System Foundation
| File | Content Source | Visual Spec Source |
|---|---|---|
| `styles/global.css` | `final-palette-violet-rosegold.jsx` (CSS vars) | Design Doc §2, §3, §4, §5 |
| `styles/navbar.css` | Design Doc §6.1 | Design Doc §6.1 |
| `js/navbar.js` | PRD §6.1 scroll behavior | — |

### ✅ Session 2 — Animation Engine
| File | Content Source | Visual Spec Source |
|---|---|---|
| `js/scroll-anim.js` | `move_and_flip.html` (direct copy + adapt) | PRD §5.1.3, §10 |
| `styles/card.css` | `card_flip.html` (direct copy + adapt) | Design Doc §6.5 |
| `js/card-flip.js` | `card_flip.html` (hover logic + touch fallback) | Design Doc §6.5 |

### ✅ Session 3 — Home Page
| File | Content Source | Visual Spec Source |
|---|---|---|
| `index.html` | PRD §5.1 (tokens), Portavia hero layout | Design Doc §7.1 |
| `styles/home.css` | PRD §5.1.4 (teaser, footer) | Design Doc §7.1 |
| `styles/hero.css` | PRD §5.1.2–5.1.3 (scroll story) | Design Doc §7.1 |

### ✅ Session 4 — Projects Page
| File | Content Source | Visual Spec Source |
|---|---|---|
| `projects.html` | PRD §5.2 (8 cards, timeline) | Design Doc §7.2 |
| `styles/projects.css` | PRD §5.2.1–5.2.2 | Design Doc §7.2 |
| `styles/timeline.css` | PRD §5.2.2 (shared timeline) | Design Doc §6.6 |

### ✅ Session 5 — Experience Page
| File | Content Source | Visual Spec Source |
|---|---|---|
| `experience.html` | PRD §5.3 (2 cards, timeline) | Design Doc §7.3 |
| `styles/experience.css` | PRD §5.3.1–5.3.2 | Design Doc §7.3 |

### ✅ Session 6 — Contact & Resume
| File | Content Source | Visual Spec Source |
|---|---|---|
| `contact.html` | PRD §5.4 (two-column, form) | Design Doc §7.4 |
| `styles/contact.css` | PRD §5.4.2 | Design Doc §7.4 |
| `js/contact.js` | PRD §5.4 (validation + submit) | — |
| `resume.html` | PRD §5.7 | Design Doc §7.6 |
| `styles/resume.css` | PRD §5.7 | Design Doc §7.6 |

### 🔲 Session 7 — Detail Pages + Polish ← ACTIVE NEXT
| File | Content Source | Visual Spec Source |
|---|---|---|
| `styles/detail.css` | PRD §5.5, §5.6 | Design Doc §7.5 |
| `js/scroll-progress.js` | PRD §7 (animation system) | Design Doc §6.10 |
| `projects/project-1.html` | PRD §5.5 + §14 tokens | Design Doc §7.5 |
| `projects/project-2.html` through `project-8.html` | Same template | Same |
| `experience/experience-1.html` | PRD §5.6 + §14 tokens | Design Doc §7.5 |
| `experience/experience-2.html` | Same template | Same |

### 🔲 Session 8 — Deployment
| Task | Tool |
|---|---|
| Create GitHub repo `portfolio` | GitHub MCP |
| Commit all files to `main` | GitHub MCP |
| Enable GitHub Pages | GitHub MCP |
| Save live URL to Memory | Memory MCP |
| Final Puppeteer check on live URL | Puppeteer MCP |

---

## SECTION D — Stitch Design Screen Plan

| Page | Visual Elements to Request | Design Doc Sections | Approval Criteria |
|---|---|---|---|
| ~~Home Page~~ | ~~Hero bookend layout, scroll phases~~ | ~~§7.1~~ | ✅ Done |
| ~~Projects Page~~ | ~~Timeline, alternating cards~~ | ~~§7.2~~ | ✅ Done |
| ~~Experience Page~~ | ~~Timeline 2 cards~~ | ~~§7.3~~ | ✅ Done |
| ~~Contact Page~~ | ~~Two-column form + info~~ | ~~§7.4~~ | ✅ Done |
| ~~Resume Page~~ | ~~Paper card, CTA~~ | ~~§7.6~~ | ✅ Done |
| **Detail Page** | Hero image, breadcrumb, content body, back CTA | §7.5 | Correct typography hierarchy; violet/blush correctly applied; no dark mode elements |

---

## SECTION E — Puppeteer Screenshot Checkpoints

| Trigger File | Viewports | Design Doc Reference | Pass Criteria |
|---|---|---|---|
| ~~`navbar.css`~~ | ~~1440px, 375px~~ | ~~§6.1~~ | ✅ Done |
| ~~`card-test.html`~~ | ~~1440px~~ | ~~§6.5~~ | ✅ Done |
| ~~`index.html`~~ | ~~1440px, 375px~~ | ~~§7.1~~ | ✅ Done |
| ~~`projects.html`~~ | ~~1440px, 375px~~ | ~~§7.2~~ | ✅ Done |
| ~~`experience.html`~~ | ~~1440px, 375px~~ | ~~§7.3~~ | ✅ Done |
| ~~`contact.html`~~ | ~~1440px, 375px~~ | ~~§7.4~~ | ✅ Done |
| ~~`resume.html`~~ | ~~1440px, 375px~~ | ~~§7.6~~ | ✅ Done |
| `projects/project-1.html` | 1440px, 375px | §7.5 | Correct token layout, scroll progress bar visible, violet/blush palette, no black shadows |
| `experience/experience-1.html` | 1440px, 375px | §7.5 | Same as above |
| Live GitHub Pages URL | 1440px | All pages | All styles load, no 404 assets, fonts load from Google Fonts |

---

## SECTION F — Risk Register

| Risk | Challenge | Mitigation |
|---|---|---|
| **Scroll lerp cross-browser** | `requestAnimationFrame` + `scrollY` behaves differently in Safari; lerp may feel laggy on low-end devices | Test in Puppeteer (Chromium). Add `document.documentElement.scrollTop` fallback. Never touch the 0.08 factor — adjust scroll range distances instead. |
| **Card flip on Safari (`backface-visibility`)** | Safari requires `-webkit-backface-visibility: hidden` prefix; without it the back face "ghosts" through the front | Apply BOTH `backface-visibility: hidden` AND `-webkit-backface-visibility: hidden` on all `.card-face` elements. Already in `card.css`. |
| **Touch-device flip fallback** | `hover` pseudo-class doesn't fire on mobile touch devices — cards never flip | `card-flip.js` implements `click`/`focus` toggle as tap fallback. On `touchstart`, toggle `.is-flipped` class instead of relying on CSS hover. |
| **Timeline alternating layout on mobile** | CSS Grid `1fr 2px 1fr` collapses at small widths, breaking the alternating pattern | At `< 768px`, collapse to single-column with the timeline line on the LEFT and all cards right-aligned. Implemented in `timeline.css` responsive breakpoints. |
| **Puppeteer local `file://` vs served URLs** | `file://` protocol blocks Google Fonts (CORS) and some CSS `background-image` paths, giving false visual fails | Run a local HTTP server (`python -m http.server 8080` or equivalent) and point Puppeteer to `http://localhost:8080` — NOT `file://`. |
| **Detail page scroll progress bar** | `scroll-progress.js` must attach to each detail page without conflicting with `scroll-anim.js` on `index.html` | `scroll-progress.js` only activates when `body` does NOT have `.has-scroll-story` class. `index.html` gets that class; all other pages do not. |
| **GitHub Pages path resolution** | Relative CSS/JS paths like `../styles/global.css` break when GitHub Pages serves from a subfolder | Use root-relative paths (`/portfolio/styles/global.css`) OR ensure all links are consistently relative and tested before deploy. |

---

## UNBREAKABLE RULES (Quick Reference)

> [!IMPORTANT]
> These 10 rules apply in every session, every file, no exceptions.

| # | Rule |
|---|---|
| 1 | Lerp factor is **0.08** — never changes |
| 2 | Card flip uses `card_flip.html` CSS exactly — `perspective: 2000px`, `backface-visibility: hidden`, `transition: 0.7s ease` |
| 3 | Body background is **always `#FFF4F0`** |
| 4 | All H1–H4 headings are **always `#4A006A`** |
| 5 | Rose gold `#E8735A` appears ONLY on: CTA buttons, active nav, timeline dots, tag text, 48×2px underlines, contact icons, scroll bar |
| 6 | Fonts: Cormorant Garamond (display), DM Sans (UI), JetBrains Mono (mono). No Inter, no Roboto, no Arial |
| 7 | All shadows: `rgba(74,0,106,x)` for elevation · `rgba(232,115,90,x)` for glow · `rgba(0,0,0,x)` NEVER |
| 8 | All personal content uses `[TOKEN]` placeholders — never hardcoded |
| 9 | Puppeteer screenshot BEFORE moving to next page — mandatory visual gate |
| 10 | Portfolio is strictly light-mode — only dark surfaces: navbar (`#4A006A`) + footer (`#4A006A`) + card back face (`#4A006A`) |
