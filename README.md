# Transform Text

A lightweight text transformation tool for developers, writers, and curious minds. Escape newlines, change case formats, and quickly copy results to your clipboard.

---

## Table of Contents

- [Transform Text](#transform-text)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Demo](#demo)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Project Structure](#project-structure)
  - [Code Style](#code-style)
  - [Tests](#tests)
  - [To Do](#to-do)
  - [Known Issues](#known-issues)
  - [Contributing](#contributing)
  - [Licence](#licence)
  - [FAQ](#faq)
  - [Author](#author)

---

## Overview

**Transform Text** is a small web app built with React and Tailwind CSS. It lets users apply various string manipulations like escaping newlines, switching between case styles (for example, camelCase, snake_case), and copying the output. Ideal for developers working with data, APIs, or code formatting.

---

## Demo

Try it live: [karlhorning.dev/transform-text/](https://www.karlhorning.dev/transform-text/)

---

## Tech Stack

- **Framework**: React (with Vite)
- **Language**: JavaScript (ES Modules)
- **Styling**: Tailwind CSS
- **Tooling**: ESLint, Prettier

---

## Installation

```bash
git clone https://github.com/Karl-Horning/transform-text.git
cd transform-text
npm install
npm run dev
```

---

## Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start local dev server        |
| `npm run build`        | Create production build       |
| `npm run preview`      | Preview production build      |
| `npm run lint`         | Run ESLint checks             |
| `npm run test`         | Run all tests once            |
| `npm run test:watch`   | Run tests in watch mode       |
| `npm run test:verbose` | Run tests with verbose output |

---

## Project Structure

```bash
src/
├── components/         # UI components (TextInput, ToolSelector, etc.)
├── data/               # Tool definitions
├── utils/              # Pure transformation logic
├── App.jsx             # Main app component
├── main.jsx            # Entry point
```

---

## Code Style

This project follows:

- ESLint (`eslint:recommended`)
- Prettier with Tailwind plugin
- [Conventional Commits](https://www.conventionalcommits.org/) for Git messages:

  - `feat`: New feature
  - `fix`: Bug fix
  - `refactor`: Code cleanup
  - `a11y`: Accessibility improvements
  - `ux`: UX/UI tweaks

---

## Tests

Tests are written using **Jest** alongside **React Testing Library** to ensure both the core transformation logic and user interface components behave as expected.

You'll find tests covering:

- Pure utility functions for text transformations
- React component rendering and interaction
- UI behaviours such as the copy-to-clipboard button, including success and error states

Run all tests with:

```bash
npm run test
```

For continuous development, use watch mode:

```bash
npm run test:watch
```

---

## To Do

- [x] Escape/unescape newlines
- [x] Uppercase/lowercase tools
- [x] Copy output to clipboard
- [x] Add support for:

  - [x] `camelCase`
  - [x] `PascalCase`
  - [x] `snake_case`
  - [x] `kebab-case`
- [x] Add tests
- [x] Deploy live demo

---

## Known Issues

- No input validation yet (for example, empty input fields are allowed)
- The `Copy Output` button is always active
- `Sentence Case` converts proper nouns to lower case
- `MLA Title Case` and `AP Title Case` convert PascalCase words like "JavaScript" to "Javascript"

---

## Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to add or improve.

---

## Licence

MIT © 2025 Karl Horning

---

## FAQ

**Q: Can I use this as a base for my own string utility tool?**
A: Absolutely — just include credit if you fork the structure or UI.

**Q: Why are there multiple case tools?**
A: Different APIs, languages, and platforms prefer different naming conventions. This tool helps you switch between them quickly.

---

## Author

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)
