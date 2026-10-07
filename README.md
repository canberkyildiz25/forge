# FORGE Athletic

*Not a gym. A proving ground.*

The site of a performance-training facility in London: a film of the floor on the front page, six programmes, the coaching team, and membership tiers with a form to join.

**Live:** https://forge-athletic.netlify.app

![The front page](public/screenshots/01-hero.png)

FORGE Athletic is not a real business. I made the brand up so that I could build one dark, motion-heavy marketing site properly from end to end: content in typed data, pages rendered on the server, and the motion kept in a few client components that clean up after themselves.

| | |
| --- | --- |
| ![Inside the forge](public/screenshots/04-film.png) | ![The trainers](public/screenshots/11-trainers.png) |
| ![Membership tiers](public/screenshots/09-tiers.png) | ![The programmes](public/screenshots/03-programs.png) |

## What it does

- **A film as the opening.** It fills the first screen, and the headline comes up line by line from behind a mask.
- **Titles that arrive a word at a time.** Headings are split into words when the page runs, and brought in with GSAP ScrollTrigger as they come into view.
- **Photographs that unclip.** An image is revealed from the bottom up as it enters the window, then drifts a little as the page scrolls.
- **A progress bar and counters** driven by Framer Motion: the bar follows the scroll on a spring, and the figures count up when they are first seen.
- **A custom cursor, magnetic buttons and spotlight cards.** They only exist where there is a pointer that can hover, so a phone never pays for them.
- **Film grain** over the page and a marquee of outlined type.
- **Four pages**: the front page with eleven sections, programmes, trainers, and membership with a comparison table and the join form.
- **Less motion when asked.** With `prefers-reduced-motion` the reveals and the parallax are off. Focus styles and landmarks are in place for keyboards and screen readers.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16, App Router | All four routes are prerendered; components are server components unless they have to run in the browser |
| Language | TypeScript 5 | One typed content model in `lib/data.ts` drives every page |
| Styling | Tailwind CSS 4 and my own design tokens | Utilities where they help, written CSS where the design needs it |
| Motion | GSAP 3 with ScrollTrigger, and Framer Motion 12 | GSAP for what is tied to the scroll, Framer Motion for springs inside React |
| Type | Big Shoulders, Hanken Grotesk and Fraunces through `next/font` | Served from the site itself, with no layout shift and no request to anybody else |
| Hosting | Netlify | |

## Run it

Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # the production build
npm start        # serve that build
npm run lint
```

There are no environment variables.

## Layout of the code

```
app/
  layout.tsx          fonts, metadata and what is on every page
  page.tsx            the front page, eleven sections
  programs/           the six training programmes
  trainers/           the coaching team
  membership/         tiers, the comparison table, the join form
  globals.css         the tokens and the written CSS
components/
  Nav, Footer
  GsapFx              everything tied to the scroll; it knows which route it is on and cleans up on leaving
  RevealInit          reveals, the pause that stops a film playing off screen, magnetic buttons, spotlight cards
  ScrollProgress      the progress bar
  Counter             a figure that counts up when first seen
  Cursor, HeroLoader, JoinForm
lib/
  data.ts             programmes, trainers, tiers and the gallery, typed
public/screenshots/   the images in this file
```

## Design notes

Three typefaces do three different jobs. Big Shoulders, a compressed industrial face, does the shouting. Hanken Grotesk carries the body copy. Fraunces supplies the counterpoint: lower-case serif moments inside upper-case headlines. One ember orange on a warm near-black is the whole palette.

## Credits

The photographs and the footage are royalty-free, from Unsplash and Mixkit.

## Author

[Canberk Yıldız](https://canberkyildiz.netlify.app)
