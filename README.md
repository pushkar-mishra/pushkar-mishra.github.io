# Pushkar Mishra Profile Site

Source for [pushkar-mishra.github.io](https://pushkar-mishra.github.io/), a static GitHub Pages site designed as a personal product profile for a senior engineering leader.

## Overview

The site has two primary entry pages:

- `index.html`: main profile page
- `blog.html`: insights and article index

The experience is intentionally lightweight, fast, and static-hosting friendly. There is no build step and no framework dependency.

## Current Design Direction

The site is designed to feel more like a product profile than a traditional portfolio or résumé:

- clear positioning in the hero
- high-level project storytelling
- grouped expertise and operating principles
- editorial-style blog navigation
- responsive layout with subtle motion

`profile.png` is a required asset and is used in the homepage hero.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- GitHub Pages static hosting

## Key Files

```text
.
├── index.html
├── blog.html
├── css/
│   ├── profile-site.css
│   └── ...
├── js/
│   ├── profile-site.js
│   └── ...
├── profile.png
├── images/
└── README.md
```

## Editing Rules

The current homepage and blog redesign follows these constraints:

- only `index.html` and `blog.html` should be modified for page markup changes
- CSS and JS files may be added or updated as needed
- other existing HTML files should remain unchanged
- existing blog/article links must be preserved
- `profile.png` must not be removed or renamed

## Local Preview

Open the files directly in a browser, or serve the directory locally with any static file server.

Example:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Contact

- [LinkedIn](https://www.linkedin.com/in/pushkar-mishra-engineering-leader/)
- [GitHub](https://github.com/pushkar-mishra)

---

©2026 Pushkar Mishra. All Rights Reserved.
