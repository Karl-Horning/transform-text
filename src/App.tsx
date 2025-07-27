import { useRef, useState } from "react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import ToolSelector from "./components/ToolSelector";
import TextOutput from "./components/TextOutput";
import CopyText from "./components/CopyText";
import { textTools } from "./data/textTools";

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
