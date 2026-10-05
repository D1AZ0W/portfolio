# Project screenshot handoff

## Status

Real screenshots are now wired in for four of the five case studies. Yatra still has no screenshots, so it keeps its clearly labeled conceptual placeholder.

| Project | Slug | Screens |
| --- | --- | --- |
| BillDiv | `public/project-screenshots/billdiv/` | 6 |
| Helmet Detection & Fine Management | `public/project-screenshots/helmet-detection/` | 6 |
| OnlineCom | `public/project-screenshots/onlinecom/` | 4 |
| Pokémon Versus | `public/project-screenshots/pokemon-versus/` | 2 |
| Yatra | — | 0 (placeholder) |

Files are WebP, stripped of metadata, capped at 1600px on the long edge, and named `<order>-<slug>.webp`. The portrait is `public/portrait/ansh.jpg` (1000×1250, cropped 4:5 top-aligned from `~/Pictures/Ansh.jpg`).

## Behavior

At two or more screenshots a project visual rotates every 5.2 seconds. Hover, focus, touch, or keyboard interaction pauses the sequence; previous/next and pause/resume controls remain available. Reduced-motion settings disable autoplay and image transitions. Screenshots are letterboxed inside the screen frame (`object-fit: contain`) so nothing is cropped.

## Adding or replacing images

1. Drop the optimized file into the project's folder under `public/project-screenshots/<slug>/`, keeping the numeric prefix so display order stays stable.
2. Add or edit the matching entry in `screenshots` in `src/data/portfolio.ts`:
   ```ts
   screenshots: [
     { src: '/project-screenshots/billdiv/overview.webp', alt: 'BillDiv shared-expense group overview', caption: 'GROUP OVERVIEW' },
     { src: '/project-screenshots/billdiv/settlement.webp', alt: 'BillDiv settlement suggestions for a group', caption: 'SETTLEMENT' },
   ],
   ```
3. `alt` describes what is actually visible on screen; `caption` is the short label shown over the frame and under the figure.

## Converting new captures

```bash
magick 4.png -resize "1600x1600>" -strip -quality 82 public/project-screenshots/<slug>/04-name.webp
```

Use genuine product screenshots only. The site does not infer or invent screen content, and a project without a `screenshots` entry renders the labeled conceptual placeholder instead.