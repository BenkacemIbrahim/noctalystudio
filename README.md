<div align="center">

# NoctalyStudio

**Personal portfolio of Ibrahim Benkacem — Full-Stack Engineer.**

An immersive, animation-driven single-page experience built with Next.js, TypeScript, Tailwind CSS, GSAP and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02)](https://gsap.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

## Overview

NoctalyStudio is the personal portfolio of **Ibrahim Benkacem**, a full-stack
engineer from Morocco. It presents who he is, what he builds, and how he works,
through a scroll-driven narrative with layered motion, custom interactions, and
a hand-built design system.

The site is a Next.js App Router application rendered as a single landing page,
composed of independent, self-contained sections.

## Features

- **Immersive hero** with parallax depth on scroll and a sparkle layer.
- **Logo intro sequence** that plays once before revealing the page.
- **Scroll-driven process section** with an animated orbital diagram.
- **Smooth scrolling** powered by Lenis, wired through a React context provider.
- **Custom cursor** and a top **scroll progress** indicator.
- **Sound toggle** for the ambient experience.
- **Section-aware navbar** that switches between light and dark themes based on
  the section currently in view.
- **Fully responsive** layout across mobile, tablet, and desktop.
- **Reduced-friction extras**: live local clock, gradient text treatments, and
  grain/mesh background textures.

## Tech stack

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org) (App Router) |
| Language   | [TypeScript](https://www.typescriptlang.org)  |
| UI         | [React 18](https://react.dev)                 |
| Styling    | [Tailwind CSS 3](https://tailwindcss.com)     |
| Animation  | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com) (ScrollTrigger) |
| Scrolling  | [Lenis](https://lenis.darkroom.engineering/)  |
| Icons      | Inline SVG                                    |
| Linting    | ESLint (`eslint-config-next`)                 |

## Getting started

### Prerequisites

- **Node.js** 18.18 or newer
- **npm** (or pnpm / yarn / bun)

### Installation

```bash
git clone https://github.com/BenkacemIbrahim/noctalystudio.git
cd noctalystudio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production build

```bash
npm run build
npm run start
```

## Available scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the development server             |
| `npm run build`     | Create an optimized production build     |
| `npm run start`     | Serve the production build               |
| `npm run lint`      | Run ESLint via `next lint`               |
| `npm run lint:fix`  | Run ESLint and apply automatic fixes     |
| `npm run typecheck` | Type-check the project with `tsc`        |

## Project structure

```
.
├── .github/                 # CI workflow, issue/PR templates, Dependabot
├── public/                  # Static assets served from the root
├── src/
│   ├── app/
│   │   ├── fonts/           # Local font files
│   │   ├── globals.css      # Tailwind layers, design tokens, utilities
│   │   ├── layout.tsx       # Root layout, metadata, providers
│   │   └── page.tsx         # Landing page composition
│   ├── components/
│   │   ├── providers/       # SmoothScrollProvider (Lenis context)
│   │   └── *.tsx            # Page sections and interactive UI
│   └── lib/
│       └── utils.ts         # Shared helpers (cn class merger)
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── tailwind.config.ts
└── tsconfig.json
```

## Design system

Colour, typography, and animation tokens live in
[`tailwind.config.ts`](tailwind.config.ts) and
[`src/app/globals.css`](src/app/globals.css). The palette is built around
`midnight`, `ivory`, and the `coral` / `amber` / `teal` / `plum` accents, with
Fraunces, Inter, and JetBrains Mono as the type stack.

## Deployment

The project deploys cleanly to [Vercel](https://vercel.com/new) with zero
configuration. Any static-capable Node host works as well:

```bash
npm run build
npm run start
```

## Contributing

Suggestions and pull requests are welcome. Please read
[CONTRIBUTING.md](./CONTRIBUTING.md) and
[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) first.

## License

Released under the [MIT License](./LICENSE).

## Contact

- **Email:** benkacemibrahim1@gmail.com
- **GitHub:** [@BenkacemIbrahim](https://github.com/BenkacemIbrahim)
- **X / Twitter:** [@Benkacem_](https://twitter.com/Benkacem_)
