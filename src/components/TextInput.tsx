import { forwardRef } from "react";

/**
 * A textarea input section for entering original text.
 *
 * This component is used as the first step in the text transformation process.
 * It accepts a forwarded ref so the parent component can access or manipulate
 * the value programmatically (for example, to read the text on button click).
 *
 * @param _ - No props are used directly in this component.
 * @param ref - A forwarded ref pointing to the underlying `<textarea>`.
 * @returns A section containing a labelled textarea for user input.
 */
const TextInput = forwardRef<HTMLTextAreaElement>((_, ref) => {
    return (
        <section
            id="textInput"
            className="space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur-sm sm:p-5 dark:border-slate-700 dark:bg-slate-800/60"
            aria-labelledby="textInput-label"
            role="region"
        >
            <label
                id="textInput-label"
                htmlFor="inputTextArea"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
                Step 1: Enter or paste your text below
            </label>
            <textarea
                id="inputTextArea"
                ref={ref}
                placeholder="Enter your original text here..."
                className="min-h-[15rem] w-full resize-y rounded-lg border border-slate-300 bg-white/70 px-3 py-2 font-mono text-sm leading-relaxed shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800/70 dark:focus:ring-slate-500"
            />
        </section>
    );
});

export default TextInput;
