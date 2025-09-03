import type React from "react";

type CopyTextProps = {
    onClick: () => void;
    copyStatusMessage: React.ReactNode;
};

/**
 * Renders a button section that allows users to copy the processed output text.
 *
 * This is typically the final step in the UI flow, enabling users to
 * copy the result to their clipboard. The component expects an `onClick`
 * handler to be passed from the parent, which will handle the clipboard logic.
 *
 * @param props - Props for the CopyText component.
 * @param props.onClick - Callback fired when the "Copy Formatted Text" button is clicked.
 * @param props.copyStatusMessage - A short status message rendered under the button (for example, "Copied!").
 * @returns A section containing the clipboard copy button and a live status message.
 */
export default function CopyText({
    onClick,
    copyStatusMessage,
}: CopyTextProps) {
    return (
        <section
            id="copyButton"
            className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur-sm sm:p-5 dark:border-slate-700 dark:bg-slate-800/60"
            aria-labelledby="copy-heading"
            role="region"
        >
            <h3
                id="copy-heading"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
                Step 4: Copy the text to your clipboard
            </h3>

            <div>
                <button
                    id="copyOutput"
                    type="button"
                    onClick={onClick}
                    className="w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md ring-offset-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:bg-indigo-800 dark:bg-indigo-500 dark:ring-offset-slate-900 dark:hover:bg-indigo-400 dark:focus-visible:ring-indigo-400"
                >
                    Copy Formatted Text
                </button>
            </div>

            {/* Live status for screen readers + subtle text for sighted users */}
            <div
                role="status"
                aria-live="polite"
                className="text-sm text-slate-600 dark:text-slate-300"
            >
                {copyStatusMessage}
            </div>
        </section>
    );
}
