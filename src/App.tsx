import { useRef, useState } from "react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import ToolSelector from "./components/ToolSelector";
import TextOutput from "./components/TextOutput";
import CopyText from "./components/CopyText";

/**
 * The main application component for transforming text.
 *
 * Handles user input, text transformation actions (escaping/unescaping newlines),
 * and provides a button to copy the result to the clipboard.
 *
 * Includes the following components:
 * - Header: Displays the page title.
 * - TextInput: Text area for user input.
 * - ToolSelector: Buttons to choose a text transformation.
 * - TextOutput: Displays the transformed text.
 * - CopyText: Button to copy the output.
 *
 * @returns The complete interface for the text transformer app.
 */
function App() {
    // Ref for accessing the raw textarea value
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // State for storing the transformed result
    const [result, setResult] = useState("");

    /**
     * Copies the current transformed result to the clipboard.
     *
     * Logs an error if clipboard access fails.
     */
    const handleCopy = async () => {
        if (inputRef.current) {
            try {
                await navigator.clipboard.writeText(result);
                console.log("Text copied to clipboard");
            } catch (err) {
                console.error("Unable to copy text to clipboard", err);
            }
        }
    };

    /**
     * Transforms the input text based on the selected tool.
     *
     * Supports the following tools:
     * - "escape": Replaces newlines with `\n`
     * - "unescape": Converts `\n` back into actual newlines
     *
     * @param tool - The selected tool name ("escape" or "unescape")
     */
    const handleToolSelect = (tool: string) => {
        if (!inputRef.current) return;

        const inputText = inputRef.current.value;
        let transformedText = "";

        switch (tool) {
            case "escape":
                transformedText = inputText.replace(
                    /[\r\n\u0085\u2028\u2029]+/g,
                    "\\n"
                );
                break;
            case "unescape":
                transformedText = inputText.replace(/\\n/g, "\n");
                break;

            default:
                transformedText = inputText;
                break;
        }

        setResult(transformedText);
    };

    return (
        <main className="container mx-auto py-6">
            <div className="mx-auto max-w-3xl px-6 py-8">
                <Header />
                <TextInput ref={inputRef} />
                <ToolSelector onSelect={handleToolSelect} />
                <TextOutput text={result} />
                <CopyText onClick={handleCopy} />
            </div>
        </main>
    );
}

export default App;
