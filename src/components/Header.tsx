import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    title: string;
}

/**
 * Reusable app header with page title and theme toggle.
 *
 * Renders a slim, translucent bar with a subtle border that stays consistent
 * in light and dark modes. The inner container aligns with the main grid and
 * spaces the page title from the {@link ThemeToggle}.
 *
 * Accessibility:
 * - Uses a semantic `<header>` element.
 * - Exposes the page title as an `<h1>` in the document outline.
 *
 * @param props - Component properties.
 * @param props.title - The text shown as the main heading. Prefer a concise, page-specific title.
 * @returns The global header containing the page title and a theme toggle control.
 * @remarks
 * - Tailwind v4 dark mode: ensure CSS defines `@custom-variant dark (&:where(.dark, .dark *));`
 *   so `dark:` utilities respond to the `.dark` class.
 * - To prevent a light-to-dark flash on load, set the `.dark` class on `<html>` with a tiny
 *   pre-paint script in `<head>`.
 * - Pair with Skip Link pattern by placing `<main id="main-content">…</main>` below.
 * @example
 * // In app shell:
 * // <Header title="Color Contrast Checker" />
 */
export default function Header({ title }: HeaderProps) {
    return (
        <header className="border-b border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-0 lg:px-8">
                <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {title}
                </h1>
                <ThemeToggle />
            </div>
        </header>
    );
}
