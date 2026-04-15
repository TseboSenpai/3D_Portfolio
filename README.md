
# 3D Portfolio

A personal 3D portfolio built with React, Vite, and Three.js (via `@react-three/fiber`). It showcases interactive 3D scenes, experience and project models, and a contact form.

## Features
- Interactive 3D hero and work scenes using `three`, `@react-three/fiber`, and `@react-three/drei`.
- Post-processing effects via `@react-three/postprocessing`.
- Animations with `gsap` and `framer-motion`.
- Contact form using `@emailjs/browser`.
- Responsive layout and utility styles with `tailwindcss`.

## Tech stack
- React + Vite
- three.js (`three`)
- React Three Fiber (`@react-three/fiber`)
- Drei helpers (`@react-three/drei`)
- Postprocessing (`@react-three/postprocessing`)
- GSAP and Framer Motion for animation
- Tailwind CSS

## Getting started

Prerequisites: Node.js (v16+ recommended) and npm or yarn.

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview production build locally:

```
npm run preview
```

Lint the project:

```
npm run lint
```

## Project structure (key files)
- [src](src) — application source
	- [src/App.jsx](src/App.jsx) — top-level app
	- [src/main.jsx](src/main.jsx) — Vite entry
	- [src/constants/index.js](src/constants/index.js) — shared constants
	- [src/components](src/components) — UI components (e.g., `NavBar.jsx`, `GlowCard.jsx`)
	- [src/HeroModels](src/HeroModels) — 3D hero scene parts
	- [src/WorkModels](src/WorkModels) — project models and scenes
	- [src/sections](src/sections) — page sections (Hero, Projects, Contact, etc.)
- [public](public) — static assets (images, textures, models)

## Notes & tips
- 3D models, textures, and static assets live under the `public` directory; update them there when swapping models or textures.
- The contact form uses EmailJS — update the service/template/keys in the contact components and `src/constants` as needed.
- Keep heavy models and large textures optimized for web (use Draco-compressed glTF where possible).

## Contributing
PRs welcome. For edits to scenes or models, please include small size assets or links to where large assets can be downloaded.

## License
This repository does not include a license file. Add one if you plan to publish or share the source.

---

If you want, I can also add a short demo section, screenshots, or deploy instructions (Netlify/Vercel). Just say which you'd like.
