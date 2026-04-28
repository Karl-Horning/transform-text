# Transform Text

A developer tool for coding and writing. Paste text, pick a transformation, and copy the result.

**Live site:** [karlhorning.dev/transform-text](https://www.karlhorning.dev/transform-text/)

## VS Code extension

The [Transform Text Extension](https://github.com/Karl-Horning/transform-text-extension) is the counterpart to this repo. Changes and new transformations are made here first before being ported to the extension.

## Stack

- **React 19**
- **TypeScript 5.8**
- **Vite 7**
- **CSS Modules**
- **Vitest** + **React Testing Library** + **jest-axe**
- **PWA** — service worker and web app manifest
- Deployed to **GitHub Pages** via GitHub Actions

## Notable decisions

**Live transformation** — Output updates on every keystroke.

**Transformation selector** — A single `<select>` exposes all sixteen transformations, scales to mobile without layout changes, and makes adding new ones a one-line config entry.

**`prefers-color-scheme`** — Light and dark mode follow the OS preference.

**Config as the single source of truth** — All site metadata (title, description, URL, theme colour) is defined once in `src/config.ts`. Components, the PWA manifest, and the extension all reference the same constants.

**Pure transformation functions** — All sixteen transformations live in a single utility file with no side effects, making them easy to port to the VS Code extension.

**WCAG AA contrast** — Colour combinations are verified programmatically against the panel background in both light and dark mode.

**Testing strategy** — 85+ tests cover all transformation functions and their edge cases. Every component has a jest-axe accessibility check. Accessibility was also verified manually with the macOS screen reader and by navigating the app using only a keyboard.

**Design assets** — Favicons and the Open Graph preview image were created in Affinity and are included under `design/`.

**Lighthouse** — The app scores 100 across Performance, Accessibility, Best Practices, and SEO on all device profiles.

**Mobile font size** — Interactive elements (text areas and the transformation select) use `font-size: 1rem` on mobile to prevent iOS Safari from auto-zooming on focus. The original sizes are restored at the 640 px breakpoint.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the Vite development server |
| `build` | Type-check and build for production |
| `lint` | Run ESLint |
| `preview` | Preview the production build locally |
| `test` | Run tests once and exit |
| `test:watch` | Run tests in watch mode |
| `test:verbose` | Run tests once with verbose output |

## Transformations

| Name | Example output |
| --- | --- |
| Escape Newlines | `line one\nline two` |
| Unescape Newlines | `line one` + newline + `line two` |
| Uppercase | `HELLO WORLD` |
| Lowercase | `hello world` |
| snake_case | `hello_world` |
| kebab-case | `hello-world` |
| PascalCase | `HelloWorld` |
| camelCase | `helloWorld` |
| Sentence case | `Hello world` |
| Start Case | `Tools Of The Trade` |
| MLA Title Case | `Tools of the Trade` |
| AP Title Case | `Tools Of the Trade` |
| Sarcastic SpongeBob | `hElLo WoRlD` |
| Alternating Case | `HeLlO wOrLd` |
| Trim Whitespace | `hello world` |
| Remove Special Characters | `this is kebab case` |

## Feedback

Bug reports and suggestions are welcome via [GitHub Issues](https://github.com/Karl-Horning/transform-text/issues).

## Licence

Released under the [MIT Licence](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
