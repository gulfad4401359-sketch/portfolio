# GEMINI.md — Updated with Token Conservation Protocol

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

## Detail Pages — Structure
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

## Session Start — 4 Lines Only
Line 1: "Memory: [X] observations confirmed"
Line 2: "GEMINI.md: loaded — lerp 0.08 / flip 700ms / bg #FFF4F0"
Line 3: "Last commit: [hash]"
Line 4: "Ready. What is the task?"
Nothing else. No summaries. No project history recap.

## Token Conservation — Follow Every Rule

### Response Format
- Zero filler: no "Great!" "Sure!" "Absolutely!" "I'll now..." "Let me..."
- Never restate the instruction before executing it
- Never summarize what you just did
- Never explain what you are about to do — just do it
- Confirmation format: "✅ [filename] saved." — nothing more
- Never list completed steps after finishing
- State only what is NEXT — never what was just done

### Reading — Minimize File Reads
- Read GEMINI.md ONCE at session start — never re-read unless a value changes
- Read Memory MCP ONCE at session start — never re-read unless updating
- Never re-open a file already read this session
- Never open a file just to confirm it exists — use filesystem list
- If value is already known from GEMINI.md — use it directly, no re-read
- Do not re-read PRD or Design Doc unless a specific section is referenced

### Writing — Minimize Output Length
- Maximum 150 lines per output — stop, save, report "✅ saved — continue?"
- Write only what is asked — nothing extra
- No HTML comments unless specifically requested
- No placeholder content beyond exact spec
- No console.log statements unless debugging requested
- No inline documentation unless requested

### Tools — Use Minimum Per Task
- Never run Puppeteer unless explicitly asked or a task stage is complete
- Never call Memory MCP mid-task — only at session start and session end
- Never call Stitch MCP unless designing a new page from scratch
- Never use Sequential Thinking MCP for simple single-file edits
- Filesystem read: only the exact file needed — never read whole folder
- GitHub: commit only when task is fully complete — never mid-task

### Skills — Load Only When Needed
- Frontend-Design: only for new page/component creation
- Taste: only when visual quality review is requested
- Web-artifact-builder: only for standalone artifact creation
- Theme-factory: only when palette changes are requested
- Webapp-testing: only when full QA is requested
- Skill-creator: never load unless creating a new skill
- Stitch Skills: only when Stitch MCP is being used
- Never load a skill speculatively — load on demand only

### Memory MCP — Efficient Saves
- Save only NEW information — never rewrite existing observations
- Maximum 2-3 new observations per save
- One sentence per observation, no extra punctuation
- Never save information already present in GEMINI.md

### GitHub — Minimal Commits
- One commit per completed task group
- Commit message format: "fix: [what changed] [filename]"
- Never push mid-edit
- Never push test files

### Never Do These — Token Waste
- Repeating the user's instruction before executing
- Writing "Based on GEMINI.md, I can see that..."
- Writing "I have successfully completed..."
- Writing "Let me start by..." or "Here is what I will do:"
- Listing all folder contents when only one file is needed
- Running Puppeteer after every small change
- Re-reading source documents already in context
- Generating multiple versions and asking which to use
- Adding unprompted "Note:" or "Important:" callouts
- Asking clarifying questions that can be inferred from context
- Chaining multiple tasks without stopping between them
- Assuming the next task — always wait for instruction
