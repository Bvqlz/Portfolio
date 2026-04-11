[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/Bvqlz/Portfolio/badge)](https://scorecard.dev/viewer/?uri=github.com/Bvqlz/Portfolio)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/12396/badge)](https://www.bestpractices.dev/projects/12396)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Hello, this the repo for my profolio website. Please take a look at the link below. 

**Website:** https://bvlqz.dev/

## About

This site is a single-page application built with React and TypeScript, styled with Tailwind CSS v4, and animated with custom CSS keyframes and GSAP. It's organized into three main sections:

- **Home**: an animated hero with aurora-blob effects and links to my LinkedIn, GitHub, and resume
- **About**: a short bio, my tech stack (languages, frameworks, tools), and a timeline of my journey so far
- **Projects**: an interactive gallery of things I've built, with image carousels and a fullscreen modal viewer

## Tech Stack

**Frontend**
- React 19
- TypeScript
- Vite 7
- Tailwind CSS v4
- React Router v7
- GSAP
- FontAwesome

**Tooling**
- ESLint (with typescript-eslint and react-hooks plugins)
- Vercel (hosting & deployment)

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Bvqlz/Portfolio.git
cd Portfolio/profolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Type-check with `tsc` and build the production bundle |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
Portfolio/
├── profolio/            # Vite + React application
│   ├── public/          # Static assets (images, resume, project screenshots)
│   ├── src/
│   │   ├── components/  # React components (Hero, About, Projects, Navbar)
│   │   ├── styles/      # Custom CSS (aurora animations)
│   │   ├── App.tsx      # Root component with routing
│   │   ├── main.tsx     # App entry point
│   │   └── index.css    # Tailwind imports & theme tokens
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── LICENSE
├── README.md
└── SECURITY.md
```

## Deployment

This site is automatically deployed to Vercel on every push to `main`. The `vercel.json` config rewrites all routes to `index.html` so client-side routing works correctly on direct URL navigation.

## Security

If you find a security issue, please see [SECURITY.md](./SECURITY.md) for how to report it responsibly.

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

## Contact

- **LinkedIn:** [bvlqz28](https://www.linkedin.com/in/bvlqz28)
- **GitHub:** [@Bvqlz](https://github.com/Bvqlz)
