# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, hand-coded personal site for Thomas Denny (iamthomasdenny.com). No build system, no framework, no package manager — plain HTML, CSS, and vanilla JS served as files. Deployed from GitHub Pages (`thodenny/personal-website`) to the apex domain via the `CNAME` file and a GoDaddy A-record pointing at GitHub's IPs.

## Running locally

There is no build step. To preview changes before committing:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

For any non-trivial *visual* change, start the server in the background and let Thomas eyeball the page before pushing. Pure data edits (e.g. adding a row to `deepwork-data.js` or `reading-data.js`) don't need the peek step — commit and push.

## Aesthetic — non-negotiable

The MySpace-inspired look is deliberate, not nostalgic-by-accident. When in doubt:

- Palette is locked in `styles.css` header comment: white body, blue gradient nav (`#336699 → #003366`), orange accents (`#FF6600`), `#333` body text, `#99AACC` borders.
- Fonts are Verdana / Georgia. Site title is lowercase ("thomas denny").
- Footer line everywhere: "Built with intention. Not a template."
- Do **not** propose dark mode, hamburger menus, modern minimalist redesigns, SPA conversion, or any framework. Refine within the aesthetic; don't replace it.
- This site is for him, not an audience. Do **not** suggest analytics, SEO tricks, social-proof widgets, conversion optimization, or growth tactics.

## Architecture

**Page model.** Each top-level page is its own self-contained `.html` file at the repo root (no `/pages` directory, no templating). Page-specific CSS lives in a `<style>` block in the `<head>` of that page; only truly shared rules go in `styles.css`. The nav block is duplicated across pages — when you add/rename a nav link, update every page that has the nav (grep for `nav.main-nav`).

**Shared scripts.**
- `script.js` — loaded by every page. Handles footer year auto-fill (`<span class="footer-year">`), active nav highlight, visitor counter animation on the home page, and a few small flourishes. Don't hardcode the year anywhere — use the span.
- `cusdis-loader.js` — third-party comment widget loader, only included on blog post pages (`annual-review-2025.html`, `eight-months-later.html`, `houston-marathon-2026.html`, `logging-off.html`, `unraveling.html`).

**Data files.** Dynamic-ish content lives in plain JS files that declare globals; pages include them with `<script src>` and read the globals in inline scripts. There is no CMS.
- `deepwork-data.js` — `deepWork` (object keyed by `YYYY-MM-DD`, value is a session object or array of them with `{h, cat, note}`) and `dayNotes` (per-day commentary + links). Consumed by `deepwork.html` and the "By the Numbers" YTD hours tile on `index.html`.
- `reading-data.js` — `booksFinished` array (one entry per book, with `slug` pointing at a `book-notes-*.html` page). Consumed by `books.html`.
- `records-data.js` — `recordCollection` array plus a top-level `nowSpinningId` string. Consumed by `records.html` and the "Now Spinning" widget on `index.html`. To change the featured record, edit `nowSpinningId` to match the `id` of a record in the array. Only the featured record needs `track`/`audio` fields (for the inline player on the home page).

**Blog.** Posts are individual `.html` files. The post list is hand-maintained in `blog.html`, and the RSS feed `feed.xml` is also hand-maintained — when adding a post, update both, and use RFC 822 format for `<pubDate>`.

**Routing quirks.** `notes.html` is a meta-refresh redirect to `resources.html` (renamed page, kept the old URL alive). `404.html` is GitHub Pages' custom 404.

## Workflow conventions

- **Bundle commits.** When uncommitted changes touch multiple files but are conceptually one shipment, default to a single commit with a clear multi-line message. Only split if changes are clearly unrelated.
- **Honest, direct reads.** When Thomas asks "what do you think?", lead with the actual recommendation and the main tradeoff, not a list of options. Name what's missing or weak rather than softening.
- **Dates.** Many files use 2026 dates intentionally (the site's "current" year on the displayed timeline). Don't "correct" them to today's date unless asked.
