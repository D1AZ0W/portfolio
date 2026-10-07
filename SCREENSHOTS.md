# Project screenshot handoff

## Status

Real screenshots are wired in for all five case studies, so no project renders the conceptual placeholder any more.

| Project | Slug | Screens | Source |
| --- | --- | --- | --- |
| BillDiv | `public/project-screenshots/billdiv/` | 6 | `~/Pictures/BillDiv/` |
| Helmet Detection & Fine Management | `public/project-screenshots/helmet-detection/` | 6 | `~/Pictures/HelmDetect/` |
| Yatra | `public/project-screenshots/yatra/` | 7 | frames from `~/Pictures/yatra.mp4` |
| OnlineCom | `public/project-screenshots/onlinecom/` | 4 | `~/Pictures/OnlineCom/` |
| Pokémon Versus | `public/project-screenshots/pokemon-versus/` | 2 | `~/Pictures/Pokemon-Versus/` |

Files are WebP, stripped of metadata, and named `<order>-<slug>.webp` so display order stays stable. The portrait is `public/portrait/ansh.jpg` (1000×1500, a light 2:3 top-aligned crop of `~/Pictures/Ansh.jpg` — 84% of the original height).

The Yatra frames are phone captures, so they are cropped out of the 1920×1080 screen recording to the device screen only (`crop=487:1080:716:0`) and never re-laid-out. Yatra is marked `frame: 'tall'` in `portfolio.ts`, which renders its reel in a 0.45 device-shaped frame instead of the 1.26 landscape frame used for desktop screenshots.

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

More frames can be pulled from the Yatra recording the same way:

```bash
ffmpeg -ss 44 -i ~/Pictures/yatra.mp4 -frames:v 1 -vf "crop=487:1080:716:0" -y frame.png
magick frame.png -strip -quality 84 public/project-screenshots/yatra/08-name.webp
```

Use genuine product screenshots only. The site does not infer or invent screen content, and a project without a `screenshots` entry renders the labeled conceptual placeholder instead.