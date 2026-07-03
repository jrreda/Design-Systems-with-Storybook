# Design Systems with Storybook

A React design system workshop project built with Storybook, TypeScript, Tailwind CSS, and Vite. Components live alongside their stories so you can develop, document, and test UI in isolation.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — app bundler and dev server
- **Storybook 10** — component development and documentation
- **Tailwind CSS v4** — utility-first styling
- **class-variance-authority** — typed component variants
- **Vitest** + **Playwright** — story-based testing via `@storybook/addon-vitest`

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Opens the Vite app at [http://localhost:5173](http://localhost:5173).

### Run Storybook

```bash
npm run storybook
```

Opens Storybook at [http://localhost:6006](http://localhost:6006).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build a static Storybook site |
| `npm run lint` | Run ESLint |

## Components

Stories are colocated with components under `src/stories/`:

| Component | Description |
| --- | --- |
| **Button** | Primary, secondary, and destructive variants with size options |
| **Callout** | Alert-style callouts for primary, information, success, danger, and warning states |
| **Input** | Labeled text input with validation and disabled states |
| **TextArea** | Multi-line input with character length feedback |
| **TaskList** | Interactive task list with context, checkboxes, and remote data loading |

Variants are defined with [CVA](https://cva.style/docs) in `*-variants.ts` files and styled with Tailwind utility classes.

## Theming

Light and dark themes are configured in `.storybook/preview.tsx` using `@storybook/addon-themes`. The theme toggle appears in the Storybook toolbar and sets `data-mode` on the `<html>` element.

Tailwind's `dark:` variant is wired to that attribute in `src/index.css`:

```css
@custom-variant dark (&:where([data-mode=dark], [data-mode=dark] *));
```

Global styles are imported in Storybook preview so components render with the same tokens as the app.

## Storybook addons

- **@storybook/addon-docs** — MDX documentation pages
- **@storybook/addon-a11y** — accessibility checks
- **@storybook/addon-themes** — light/dark theme switching
- **@storybook/addon-vitest** — run stories as browser tests
- **@chromatic-com/storybook** — visual testing integration

## Project structure

```
src/
├── App.tsx              # Vite app entry component
├── index.css            # Tailwind + global styles
├── main.tsx             # Vite app bootstrap
└── stories/
    ├── button/          # Button component, variants, stories, and MDX docs
    ├── callout/
    ├── input/
    ├── text-area/
    └── task-list/       # Includes context provider and remote data loader
.storybook/
├── main.ts              # Storybook config and addons
└── preview.tsx          # Global decorators, theming, and CSS imports
```

## Learn more

- [Storybook documentation](https://storybook.js.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [class-variance-authority](https://cva.style/docs)
