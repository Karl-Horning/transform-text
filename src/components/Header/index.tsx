/**
 * Displays the main heading for the text transformation tool.
 *
 * This component renders a section with a prominent page title.
 * It is intended to sit at the top of the interface and provide context
 * for the tool's purpose.
 *
 * @returns A header section containing the main title.
 */
export default function Header() {
    return (
        <section id="header" className="mb-6">
            <h1 id="pageTitle" className="mb-2 text-2xl font-bold">
                Transform Text
            </h1>
        </section>
    );
}
