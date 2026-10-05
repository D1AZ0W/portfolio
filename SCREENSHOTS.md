# Project screenshot handoff

The site is ready for real screenshots; all current project visuals are explicitly labeled conceptual placeholders, not application screenshots.

When Ansh supplies images:

1. Put optimized screenshots under `public/project-screenshots/<project-slug>/` using descriptive names, for example `public/project-screenshots/billdiv/overview.webp` and `settlement.webp`.
2. In `src/data/portfolio.ts`, replace that project's empty `screenshots: []` with entries in display order:
   ```ts
   screenshots: [
     { src: '/project-screenshots/billdiv/overview.webp', alt: 'BillDiv shared-expense group overview', caption: 'GROUP OVERVIEW' },
     { src: '/project-screenshots/billdiv/settlement.webp', alt: 'BillDiv settlement suggestions for a group', caption: 'SETTLEMENT' },
   ],
   ```
3. At two or more screenshots, the project visual automatically rotates every 5.2 seconds. Hover, focus, touch, or keyboard interaction pauses the sequence; previous/next and pause/resume controls remain available. Reduced-motion settings disable autoplay and image transitions.

Use genuine product screenshots only. The site does not infer or invent screen content.
