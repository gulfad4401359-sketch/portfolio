# GEMINI.md — Added pre-Session 7

## Continuity Rules
This file was added at 75% completion. Sessions 1–6 are built
and verified clean. All rules below match what is already built.
Before writing any new file, read one existing completed file
of the same type first and match its patterns exactly.

## Verified Built Values — Use These Exactly
- Body background: #FFF4F0
- Heading color: #4A006A
- Accent color: #E8735A
- All elevation shadows: rgba(74,0,106,x) only — never black
- Accent glow on timeline dots: rgba(232,115,90,0.4)
- Flip transition: transform 700ms ease
- Flip perspective: 2000px
- Lerp factor: 0.08 — permanently locked, never change
- CSS variable prefix: --color- / --font- / --space- / --shadow-
- BEM naming: follow existing patterns in navbar.css and card.css

## Rose Gold Allowed On
CTA buttons, active navbar link, timeline dots, tag text,
48px x 2px title underlines, contact icons, scroll progress bar.
Nowhere else. If in doubt — do not use it.

## Font Rules
H1-H3 headings: Cormorant Garamond (var --font-display)
Body / UI / H4 / navbar / buttons: DM Sans (var --font-body)
Dates / numbers / tags / code: JetBrains Mono (var --font-mono)
Never use: Inter, Roboto, Arial, system-ui as primary font

## Dark Surfaces
Only two dark surfaces exist in this project:
1. Navbar and footer: #4A006A
2. Card back face: #4A006A
Page body is always light. Never add a third dark surface.

## Detail Pages — Session 7 Structure
All 10 detail pages at ROOT level only:
project-1.html through project-8.html
experience-1.html and experience-2.html
All paths relative to root: href="styles/global.css" not href="../styles/global.css"
No subfolders. projects/ and experience/ directories deleted.

## Session Rules
- Check Memory MCP key antigravity-portfolio-v1 at session start
- Save to Memory MCP at session end — never skip
- Stitch MCP screen required before coding any new page
- Puppeteer screenshot at 1440px and 375px before advancing
- Maximum 150 lines per output — stop, save, confirm, continue
- One file at a time — complete and save before starting next

## Token Rules
- Do not re-read PRD or Design Doc unless a specific
  section number is referenced in the current task
- Reference documents by section number only
- Do not restate completed tasks
- State only what is next — not what was just done
- Skip confirmations under one sentence
