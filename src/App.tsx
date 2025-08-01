import { useRef, useState } from "react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import ToolSelector from "./components/ToolSelector";
import TextOutput from "./components/TextOutput";
import CopyText from "./components/CopyText";
import { textTools } from "./data/textTools";
import Footer from "./components/Footer";

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

    // State for storing the status of copying the result to the clipboard
    const [copyStatusMessage, setCopyStatusMessage] =
        useState<React.ReactNode>(null);

    // Clear message after 3 seconds
    const clearCopiedMessage = () => {
        setTimeout(() => setCopyStatusMessage(""), 3000);
    };

    /**
     * Handles copying the transformed text to the clipboard.
     *
     * Displays a styled status message based on the outcome:
     * - Shows a warning if there is no text to copy.
     * - Shows a success message if the text is successfully copied.
     * - Shows an error message if the clipboard operation fails.
     *
     * All messages are styled to resemble Bootstrap alerts using Tailwind CSS,
     * and are cleared after a short timeout using `clearCopiedMessage`.
     */
    const handleCopy = async () => {
        if (!result) {
            setCopyStatusMessage(
                <p className="rounded-md border border-yellow-300 bg-yellow-100 px-4 py-2 text-yellow-800 shadow-sm">
                    ⚠️ Nothing to copy
                </p>
            );
            clearCopiedMessage();
            return;
        }

        try {
            await navigator.clipboard.writeText(result);
            setCopyStatusMessage(
                <p className="rounded-md border border-green-300 bg-green-100 px-4 py-2 text-green-800 shadow-sm">
                    ✅ Text copied to clipboard
                </p>
            );
        } catch (err) {
            setCopyStatusMessage(
                <p className="rounded-md border border-red-300 bg-red-100 px-4 py-2 text-red-800 shadow-sm">
                    ❌ Unable to copy text to clipboard: {String(err)}
                </p>
            );
        }

        clearCopiedMessage();
    };

    /**
     * Finds and applies the selected transformation tool to the input text.
     *
     * @param tool - The selected tool's identifier (for example, "escape", "uppercase").
     */
    const handleToolSelect = (tool: string) => {
        if (!inputRef.current) return;

        const inputText = inputRef.current.value;
        const selectedTool = textTools.find((t) => t.selectOption === tool);

        if (selectedTool?.transform) {
            const transformed = selectedTool.transform(inputText);
            setResult(transformed);
        } else {
            console.warn(`Unknown tool: ${tool}`);
        }
    };

    return (
        <main className="container mx-auto">
            <div className="mx-auto max-w-3xl px-6 py-8">
                <Header />
                <TextInput ref={inputRef} />
                <ToolSelector onSelect={handleToolSelect} />
                <TextOutput text={result} />
                <CopyText
                    onClick={handleCopy}
                    copyStatusMessage={copyStatusMessage}
                />
                <Footer />
            </div>
        </main>
    );
}

export default App;
