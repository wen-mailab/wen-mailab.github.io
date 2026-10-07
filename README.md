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
