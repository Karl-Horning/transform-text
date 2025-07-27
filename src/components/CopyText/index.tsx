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
 * @param props.onClick - Callback fired when the "Copy Output" button is clicked.
 * @returns A section containing the clipboard copy button.
 */
export default function CopyText({
    onClick,
    copyStatusMessage,
}: CopyTextProps) {
    return (
        <section id="copyButton" className="mb-6">
            <p className="mb-4 block font-medium">
                Step 4: Copy output to clipboard
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
                <button
                    id="copyOutput"
                    onClick={onClick}
                    className="flex-1 basis-[200px] cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    Copy Output
                </button>
            </div>

            {copyStatusMessage}
        </section>
    );
}
