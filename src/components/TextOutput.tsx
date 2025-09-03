type TextOutputProps = {
    text: string;
};

/**
 * Displays the transformed output text in a read-only textarea.
 *
 * Used in Step 3 of the text transformation flow. This component
 * receives the processed text from the parent and displays it in
 * a styled, non-editable field for the user to review or copy.
 *
 * @param props - Component properties.
 * @param props.text - The transformed output text to display.
 * @returns A section containing a read-only textarea showing the result.
 */
export default function TextOutput({ text }: TextOutputProps) {
    return (
        <section
            id="textOutput"
            className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur-sm sm:p-5 dark:border-slate-700 dark:bg-slate-800/60"
            aria-labelledby="textOutput-label"
            role="region"
        >
            <label
                id="textOutput-label"
                htmlFor="outputTextArea"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
                Step 3: Preview the formatted text below
            </label>

            <textarea
                id="outputTextArea"
                value={text}
                readOnly
                spellCheck={false}
                placeholder="Your transformed text will appear here..."
                className="min-h-[15rem] w-full resize-y rounded-lg border border-slate-300 bg-white/70 px-3 py-2 font-mono text-sm leading-relaxed shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800/70 dark:focus:ring-slate-500"
            />
        </section>
    );
}
