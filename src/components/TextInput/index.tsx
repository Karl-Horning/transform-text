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
        <section id="textInput" className="mb-6">
            <label htmlFor="inputTextArea" className="mb-4 block font-medium">
                Step 1: Paste your text below
            </label>
            <textarea
                id="inputTextArea"
                ref={ref}
                placeholder="Enter your original text here..."
                className="min-h-[15rem] w-full rounded border border-gray-700 p-2 font-mono"
            ></textarea>
        </section>
    );
});

export default TextInput;
