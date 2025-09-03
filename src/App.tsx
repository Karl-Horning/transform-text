import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import ToolSelector from "./components/ToolSelector";
import TextOutput from "./components/TextOutput";
import CopyText from "./components/CopyText";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import { textTools } from "./data/textTools";
import type { CopyStatus } from "./components/CopyText";

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
    const [copyStatus, setCopyStatus] = useState<CopyStatus | null>(null);

    // Clear message after 3 seconds
    const clearTimerRef = useRef<number | null>(null);

    const clearStatusSoon = () => {
        if (clearTimerRef.current) window.clearTimeout(clearTimerRef.current);
        clearTimerRef.current = window.setTimeout(
            () => setCopyStatus(null),
            3000
        );
    };

    useEffect(() => {
        return () => {
            if (clearTimerRef.current)
                window.clearTimeout(clearTimerRef.current);
        };
    }, []);

    /**
     * Handles copying the transformed text to the clipboard.
     *
     * Displays a styled status message based on the outcome:
     * - Shows a warning if there is no text to copy.
     * - Shows a success message if the text is successfully copied.
     * - Shows an error message if the clipboard operation fails.
     *
     * All messages are cleared after a short timeout using `clearStatusSoon`.
     */
    const handleCopy = async () => {
        if (!result) {
            setCopyStatus({ kind: "warning", text: "Nothing to copy" });
            clearStatusSoon();
            return;
        }

        try {
            await navigator.clipboard.writeText(result);
            setCopyStatus({
                kind: "success",
                text: "Text copied to clipboard",
            });
        } catch (err) {
            setCopyStatus({
                kind: "error",
                text: `Unable to copy text: ${String(err)}`,
            });
        }

        clearStatusSoon();
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
            // Unknown tool identifier – safe no-op
            console.warn(`Unknown tool: ${tool}`);
        }
    };

    return (
        <>
            <SkipLink />
            <Header title="Transform Text" />

            <main id="main-content" className="mx-auto max-w-6xl p-6 md:p-8">
                <div className="mx-auto max-w-3xl space-y-6">
                    <TextInput ref={inputRef} />
                    <ToolSelector onSelect={handleToolSelect} />
                    <TextOutput text={result} />
                    <CopyText onClick={handleCopy} status={copyStatus} />
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
