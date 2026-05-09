# JOSCM Website

Marketing website for the JOSCM church tithes management app. Goal is to sell the app to other churches.

## Stack

- Vite + React 19
- React Router 7
- Tailwind CSS 4
- react-icons

## Folder structure

```
src/
├── pages/        ← one file per route
├── components/   ← reusable UI pieces (NavBar, Footer, Buttons)
├── layout/       ← MainLayout.jsx (NavBar + Outlet + Footer)
├── assets/img/   ← local images
└── App.jsx       ← route definitions
```

## Routing

All pages are children of `MainLayout` (which renders NavBar + Footer via `<Outlet />`).

```jsx
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Route>
```

## Conventions

- Semantic HTML: `<header>` inside NavBar, `<main>` in MainLayout wrapping `<Outlet />`
- `NavLink` (not `Link`) for nav items — gives automatic active class
- Dynamic/imported images use inline `style={{ backgroundImage: \`url(\${img})\` }}` — NOT Tailwind arbitrary `bg-[url(...)]` with template literals (Tailwind can't detect dynamic classes at build time)
- Overlays: `absolute inset-0 bg-black/{opacity}` on parent with `relative`. Content above overlay uses `relative z-10`
- Font: Inter via Google Fonts (loaded in index.html, applied globally in index.css)
- Icon components passed as props: `<Component icon={IconComponent} />` — render as `<Icon />` not `{Icon}`

## Colors

- Primary green: `#779551`
- Dark: `#353333`

## Pages planned

| Route | Page | Status |
|---|---|---|
| `/` | Home | In progress |
| `/about` | About | Empty |
| `/features` | Features | Not started |
| `/pricing` | Pricing | Not started |
| `/contact` | Contact | Not started |
| `/faq` | FAQ | Not started |
| `/privacy` | Privacy Policy | Not started |
| `/terms` | Terms of Service | Not started |

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview build
```
