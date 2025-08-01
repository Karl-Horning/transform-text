/**
 * Renders the global site footer.
 *
 * Includes author attribution with a link to my GitHub profile,
 * and a dynamic copyright notice.
 * Uses semantic HTML and accessible link styling.
 *
 * @returns A styled `<footer>` element with personal attribution and copyright.
 */
export default function Footer() {
    return (
        <footer className="mt-12 border-t-2 border-gray-700" role="contentinfo">
            <p className="mt-6 text-center">
                Made with ❤️ by{" "}
                <a
                    href="https://github.com/Karl-Horning"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-700 underline hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-blue-400"
                >
                    Karl Horning
                </a>
            </p>
            <p className="night:text-night-300 mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Karl Horning. All rights reserved.
            </p>
        </footer>
    );
}
