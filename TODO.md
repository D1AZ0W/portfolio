# Implementation ToDo — Ansh Shrestha Portfolio

## [x] 1. The site presents Ansh through a distinctive dark editorial identity, usable navigation, and a cinematic hero. — Acceptance criteria
- The website is a responsive, minimal, dark portfolio for full-stack developer Ansh Shrestha; its visual palette is black/near-black, neon/acid green, and slate gray.
- The visual experience uses editorial/Swiss-inspired hierarchy, oversized typography, deliberate whitespace and asymmetry, technical metadata, and restrained depth; it does not look like a generic SaaS landing page or standard portfolio template, use an identical-card grid as its main structure, or rely on random gradients, excessive glassmorphism, stock illustrations, generic blobs, excessive purple/blue gradients, or meaningless motion.
- The hero is not centered and generic: it features Ansh Shrestha’s name, the CV title “Junior Full Stack Developer,” a short CV-accurate introduction, specialty stack labels/icons, Kathmandu/Nepal, and a GitHub profile link to `https://github.com/D1AZ0W`.
- The hero intro uses an intentional typography/navigation reveal; the `AS/` monogram and matching favicon are distinctive and consistent with the brand.
- Section navigation remains usable, identifies the current section, becomes compact appropriately, and offers an accessible animated open/close mobile menu.

## [x] 2. The identity-pass scene transforms into the about story without fabricating a portrait. — Acceptance criteria
- A developer identity-pass/ID-card composition shows Ansh’s name, CV title, Kathmandu/Nepal, a concise verified stack detail, and a clearly labeled replaceable portrait-image placeholder.
- The image placeholder is not a generated likeness or stock photograph. Its source is easy to replace when Ansh supplies a portrait.
- As the identity section scrolls, the pass tilts subtly, its metadata responds with restrained parallax, its frame softens/clips away, and its image area expands into a larger portrait-shaped composition that transitions into the next story section.
- The transformation is scoped to the identity section and does not add a generic page-wide scroll-progress meter or percentage indicator. All content remains visible and usable without motion.
- About copy is split into editorial typographic fragments and reflects the CV’s React/TypeScript frontend specialization, Python/Django REST Framework backend specialization, working knowledge of Node.js/JavaScript, feature specification, design-to-test-page workflow, and independent problem ownership without adding unsupported claims.

## [x] 3. The skills matrix presents verified technologies and evidence-based proficiency indicators. — Acceptance criteria
- Skills are organized into the CV-backed categories: languages; frontend; backend/APIs; databases; computer vision/OCR; and practices.
- The displayed technologies come from the CV: JavaScript, TypeScript, Python, SQL; React, HTML/CSS, TanStack Router/Query, Tailwind CSS, shadcn/ui, Vite; Django REST Framework, REST API design, JWT authentication, Node.js, Flask; PostgreSQL, MySQL, SQLite, SQL/NoSQL fundamentals; YOLOv8, PaddleOCR, OpenCV-based image processing; feature specification/documentation, Git/GitHub workflows, independent ownership, and frontend/backend debugging.
- Proficiency indicators do not invent numeric ratings. They reflect the CV’s explicit “specializes in” focus for React/TypeScript and Python/Django REST Framework, its “working knowledge” statement for the Node.js/JavaScript ecosystem, and show other technologies as “used/listed in CV” rather than as unsupported skill scores.
- Skills and indicator text are maintained in an easy-to-edit typed content module and are readable without hover.

## [x] 4. Five case-study project presentations include replaceable screenshot carousels and only verified claims. — Acceptance criteria
- Projects are presented as non-uniform editorial case studies rather than a standard three-column card grid. BillDiv and Helmet Detection receive the largest presentations; Yatra, OnlineCom, and Pokémon Versus have varied layouts.
- Every project includes a CV-derived title, summary, available technology stack, contribution, and verified live-demo/repository links where supplied. No invented clients, results, usage numbers, metrics, or project functionality is presented.
- BillDiv links to `https://billdiv.netlify.app` and `https://github.com/D1AZ0W/Fellowship/tree/main/capstone`; its CV-described group/shared-expense settlement workflow and Min Heap settlement simplification may be described without invented metrics.
- Helmet Detection & Fine Management System links to `https://github.com/D1AZ0W/FinalYearProject`; its CV-described YOLOv8, PaddleOCR, Flask, image/video traffic pipeline, and fine-management purpose are represented accurately.
- Yatra describes the Passenger/Driver/Admin bus-transit app, simulated live tracking, QR check-in, and digital wallet as stated in the CV; use the GitHub profile if no specific repository destination is available.
- OnlineCom links to `https://github.com/D1AZ0W/Fellowship/tree/main/task9` and reflects the CV’s Fake Store API, debounced search, filtering, cart state, and optimistic updates.
- Pokémon Versus links to `https://pokemon-versus.netlify.app/` and `https://github.com/D1AZ0W/pokemon-versus`; its CV-described React/PokéAPI stats-comparison behavior is accurate.
- Each project has its own screenshot-sequence data slot. Until Ansh provides authentic screenshots, project visuals are clearly labeled placeholders and do not masquerade as screenshots.
- When more than one authentic screenshot is available for a project, its screenshots auto-slide with an intentional image transition, project-specific alt text/caption, and visible previous/next and pause/resume controls. Autoplay pauses on hover/focus and after touch/keyboard interaction; reduced-motion preferences disable autoplay/transition motion, while manual selection remains available.
- React Bits TiltedCard provides only restrained visual depth; Motion coordinates image changes and accessible controls. No functionality or content depends exclusively on hover or autoplay.

## [x] 5. Experience, education, certifications, GitHub/open-source, and writing are distinct and CV-grounded. — Acceptance criteria
- Experience is a distinct, progressively revealed vertical timeline, not a generic list. It shows Software Developer Intern at Cloco Nepal Inc. (Jun–Aug 2026, Lalitpur; Software Development Fellowship; React, TypeScript, Django REST Framework, PostgreSQL) and Frontend Developer Intern at Chanakya Software (Mar–Jun 2026; React UI features, modern tooling, Git, TanStack Router/Query; Pokémon Versus/PokéAPI) using the dates and facts in the CV.
- Education shows BSc. CSIT, Tribhuvan University (TU), Nepal, final semester, expected graduation 2026. Certifications show Software Development Fellowship — Cloco Nepal Inc. — Certificate of Completion and Hackathon Participation Certificate — Yatra Bus Transit App (2026).
- GitHub/open-source links to `https://github.com/D1AZ0W`, highlights confirmed repository work, and does not claim contribution counts or live activity metrics unless verified.
- A technical-writing section exists. Because no articles appear in the CV, it is honestly labeled as “Writing”/“Notes in progress” with replaceable/unpublished article slots; no fictitious published articles are shown.
- Motion for experience milestones and projects is purposeful, restrained, keyboard-safe, and distinct from a generic global scroll indicator.

## [x] 6. Contact, form behavior, and resume download use the supplied CV. — Acceptance criteria
- Contact options use the CV’s email `anshshrestha15@gmail.com`, phone `+977-9841996266`, LinkedIn `https://linkedin.com/in/ansh-shrestha-4385ba195`, GitHub `https://github.com/D1AZ0W`, and Kathmandu/Nepal location.
- An accessible contact form accepts name, email, and message; validates the required fields; and composes a prefilled `mailto:anshshrestha15@gmail.com` message. The site does not claim server-side email submission or store form content.
- The supplied CV PDF is made available as a working resume download.
- The final contact section has a clear, dramatic typographic conclusion and the footer remains navigable and usable on touch and keyboard.

## [x] 7. The experience remains responsive, accessible, reduced-motion-safe, and technically lean. — Acceptance criteria
- The layout is intentionally responsive across desktop, laptop, tablet, and mobile; mobile keeps the story but simplifies complex motion and controls, and text remains legible.
- Semantic HTML, keyboard navigation, visible focus states, sufficient contrast, accessible controls/navigation, and meaningful alt text are present.
- No feature requires hover; pointer/cursor effects are disabled on touch devices or when reduced motion is requested.
- `prefers-reduced-motion` disables unnecessary reveals, tilt, identity transformation, and autoplay while all text, sections, controls, and links remain available.
- Motion uses transform/opacity where practical, React lifecycle-safe cleanup, responsive/lazy image behavior when real screenshots are added, and minimal purposeful dependencies. There is no animation on every element, excessive bounce, or animation that slows navigation.
- Project type checking and production build succeed; `/manus-routes.json` is served as valid JSON declaring the `/` route.
