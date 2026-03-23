# Transform Text

A lightweight text transformation tool for developers. Escape newlines, switch between case formats, and copy results to your clipboard.

- **Live demo**: [karlhorning.dev/transform-text](https://www.karlhorning.dev/transform-text/)
- **Author**: [Karl Horning](https://github.com/Karl-Horning)
- **Licence**: MIT

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Scripts](#scripts)
- [Transformations](#transformations)
- [Tests](#tests)
- [Contributing](#contributing)

## Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest
- **Tooling**: ESLint, Prettier

[↑ Back to top](#transform-text)

## Installation

```bash
git clone https://github.com/Karl-Horning/transform-text.git
cd transform-text
npm install
npm run dev
```

[↑ Back to top](#transform-text)

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

[↑ Back to top](#transform-text)

## Transformations

- Escape / Unescape Newlines
- Uppercase / Lowercase
- snake_case, kebab-case, PascalCase, camelCase
- Sentence case, MLA Title Case, AP Title Case
- Sarcastic SpongeBob
- Trim Whitespace

[↑ Back to top](#transform-text)

## Tests

Unit tests cover all transformation functions, including edge cases for empty strings, whitespace-only input, and strings containing numbers.

```bash
npm run test
npm run test:watch  # watch mode
```

[↑ Back to top](#transform-text)

## Contributing

Open an issue before submitting a pull request for any significant changes.

[↑ Back to top](#transform-text)
