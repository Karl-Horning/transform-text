export type CopyStatus =
    | { kind: "success"; text: string }
    | { kind: "warning"; text: string }
    | { kind: "error"; text: string };

type CopyTextProps = {
    onClick: () => void;
    /** Optional short status shown under the button (announced via aria-live). */
    status?: CopyStatus | null;
};

/**
 * Final step: copy the formatted text.
 *
 * Renders a primary action button and, when provided, an optional status pill
 * (with emoji) that reflects the outcome of the copy action. The status is
 * placed in a polite live region so screen readers announce updates without
 * stealing focus.
 *
 * @param props - Props for the CopyText component.
 * @param props.onClick - Callback fired when the "Copy Formatted Text" button is clicked. Implement clipboard logic in the parent.
 * @param props.status - Optional status descriptor controlling the pill's colour and label (`"success"`, `"warning"`, or `"error"`). Omit or pass `null` to hide the status.
 * @returns A section containing the clipboard copy button and, if provided, a live status message.
 * @remarks
 * - Status colours align with the app's pass/warn/fail scheme (emerald/amber/rose).
 * - The parent component clears the status after a short delay.
 */
export default function CopyText({ onClick, status }: CopyTextProps) {
    // Map status kinds to the same colour logic as StatusBadge (emerald/amber/rose)
    const variant =
        status?.kind === "success"
            ? {
                  emoji: "✅",
                  bg: "bg-emerald-100 dark:bg-emerald-900/30",
                  text: "text-emerald-800 dark:text-emerald-300",
                  border: "border-emerald-200 dark:border-emerald-800",
              }
            : status?.kind === "warning"
              ? {
                    emoji: "⚠️",
                    bg: "bg-amber-100 dark:bg-amber-900/30",
                    text: "text-amber-900 dark:text-amber-300",
                    border: "border-amber-200 dark:border-amber-800",
                }
              : status?.kind === "error"
                ? {
                      emoji: "❌",
                      bg: "bg-rose-100 dark:bg-rose-900/30",
                      text: "text-rose-800 dark:text-rose-300",
                      border: "border-rose-200 dark:border-rose-800",
                  }
                : null;

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

            {/* Live status message (styled like a pill) */}
            {variant && status?.text ? (
                <div role="status" aria-live="polite">
                    <span
                        className={[
                            "inline-flex w-full items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm",
                            variant.bg,
                            variant.text,
                            variant.border,
                        ].join(" ")}
                    >
                        <span aria-hidden="true">{variant.emoji}</span>
                        <span className="whitespace-pre-line">
                            {status.text}
                        </span>
                    </span>
                    {/* Screen-reader helper */}
                    <span className="sr-only"> Status: {status.text}</span>
                </div>
            ) : null}
        </section>
    );
}
