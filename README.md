# Meteorology and AI Lab Website

To build the website,

```
git clone https://github.com/wen-mailab/wen-mailab.github.io.git
```

Then, in the root directory,
```
npm install
```

```
npm run dev
```

To make edits, go to `src/data`
- Add any new photos to `src/assets`
- Publications and conference presentations can be added under a team member's profile using paperIds and conferenceIds

## Official publishing

The official source repository is `wen-mailab/wen-mailab.github.io` on `main`.
GitHub Pages serves the built files from the root of its `gh-pages` branch at
https://wen-mailab.github.io/. Vite uses `/` as its asset base for that address.
After reviewing changes, commit and push the source to `main`, then run
`npm run deploy` to build `dist` and publish it to `gh-pages`. This requires
write access to the official repository. Source pushes alone do not deploy.

For local review, run `npm run dev`. For a manual Netlify preview, build and
upload the contents of `dist`; that preview is independent of GitHub Pages.

## Page navigation

Home contains the lab introduction. The sidebar opens dedicated Research, Team,
Prospective Students, News, Awards & Grants, Publications, Conferences, and Teaching pages. On phones, open the navigation
using the menu button. Section code loads when its page is opened.

Links use hash routes (for example, `/#/publications`) so direct links and browser
refreshes work on GitHub Pages without server rewrite rules.

## Content snapshot

The team, research, news, awards, publication, and presentation datasets were
restored from the public `https://wen-mailab.github.io/` snapshot on 2026-10-02.
Berry's Team email was updated to `yixin.wen@stonybrook.edu` on 2026-10-06.
The snapshot contains 11 members, 3 research areas, 2 news items, 6 awards/grants,
56 publication records, and 35 presentation records. The live snapshot does not
include individual member publication/presentation associations. The three
existing local Teaching courses are retained as placeholders for UF teaching
history, not confirmed current SBU offerings. They are labeled "Past Courses Taught"
with "University of Florida" on the Teaching page; course details remain placeholders.

Team photos are stored in `src/assets/headshots/live` and imported by
`src/data/team.ts`, so Vite packages them for production as well as local previews.

## Rendering

The Prospective Students page uses professor-provided recruitment wording received
2026-10-06. It covers Ph.D. email materials, current SBU students, Master's RA support,
and preferred Ph.D./intern qualifications. The contact email was verified against
https://www.stonybrook.edu/somas/people/faculty/berry-wen.html on that date.

Home uses a static SVG star background with no animation loop or mouse tracking.
The Home page also restores the original Earth horizon using transparent WebP
display copies (about 21 KB on phones and 45 KB on desktop). The original
8.4 MB `public/earth.svg` is preserved but is not loaded by the page. Stars and
their SVG halos remain static; the Earth graphic is decorative and stays below
the introduction. Other pages keep their clear reading background.
All pages and the sidebar use a light palette, with dark text and blue links.
Home and Research content display immediately. Other content cards use white
surfaces and light borders without background blur, scaling, or sliding.
Publications and Conferences show continuous text lists, newest first, with each
entry's year in its citation and no separate year sections or reveal controls.
Reduced-motion preferences disable remaining transitions.
