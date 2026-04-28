# Transform Text

A personal developer tool for coding and writing. Paste text, pick a transformation, and copy the result.

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

**Live transformation** — Output updates on every keystroke via `useMemo`.

**Transformation selector** — A single `<select>` exposes all thirteen transformations, scales to mobile without layout changes, and makes adding new ones a one-line config entry.

**`prefers-color-scheme`** — Light and dark mode follow the OS preference automatically.

**Config as the single source of truth** — All site metadata (title, description, URL, theme colour) is defined once in `src/config.ts`. Components, the PWA manifest, and the extension all reference the same constants.

**Pure transformation functions** — All thirteen transformations live in a single utility file with no side effects, making them easy to port to the VS Code extension.

**WCAG AA contrast** — Colour combinations are verified programmatically against the panel background in both light and dark mode.

**Testing strategy** — 85+ tests cover all transformation functions and their edge cases. Every component has a jest-axe accessibility check.

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
| MLA Title Case | `The Quick Brown Fox` |
| AP Title Case | `The Quick Brown Fox` |
| Sarcastic SpongeBob | `hElLo WoRlD` |
| Trim Whitespace | `hello world` |

## Feedback

Bug reports and suggestions are welcome via [GitHub Issues](https://github.com/Karl-Horning/transform-text/issues).

## Licence

Released under the [MIT Licence](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
