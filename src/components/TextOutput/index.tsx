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
 * @param props - Component properties
 * @param props.text - The transformed output text to display.
 * @returns A section containing a read-only textarea showing the result.
 */
export default function TextOutput({ text }: TextOutputProps) {
    return (
        <section id="textOutput" className="mb-6">
            <label htmlFor="outputTextArea" className="mb-4 block font-medium">
                Step 3: Preview the formatted text below
            </label>
            <textarea
                id="outputTextArea"
                placeholder="Your transformed text will appear here..."
                value={text}
                readOnly
                className="min-h-[15rem] w-full rounded border border-gray-700 p-2 font-mono"
            ></textarea>
        </section>
    );
}
