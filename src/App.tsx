/**
 * @fileoverview Root application component.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "./components/Header/Header";
import { InputPanel } from "./components/InputPanel/InputPanel";
import { OutputPanel } from "./components/OutputPanel/OutputPanel";
import type { CopyStatus } from "./components/OutputPanel/OutputPanel";
import { SkipLink } from "./components/SkipLink/SkipLink";
import { textTools } from "./data/transformationConfig";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

/** Root component that wires together input, transformation, and output. */
function App() {
    const [input, setInput] = useState("");
    const [selectedTool, setSelectedTool] = useState(textTools[0].selectOption);
    const [copyStatus, setCopyStatus] = useState<CopyStatus | null>(null);
    const clearTimerRef = useRef<number | null>(null);

    const output = useMemo(() => {
        const tool = textTools.find((t) => t.selectOption === selectedTool);
        return tool ? tool.transform(input) : input;
    }, [input, selectedTool]);

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

    const handleCopy = async () => {
        if (!output) {
            setCopyStatus({ kind: "warning", text: "Nothing to copy" });
            clearStatusSoon();
            return;
        }

        try {
            await navigator.clipboard.writeText(output);
            setCopyStatus({ kind: "success", text: "Copied" });
        } catch {
            setCopyStatus({ kind: "error", text: "Copy failed" });
        }

        clearStatusSoon();
    };

    return (
        <div className={styles.app}>
            <SkipLink />
            <Header />

            <main id="main-content" className={styles.main}>
                <InputPanel
                    value={input}
                    onChange={setInput}
                    selectedTool={selectedTool}
                    onToolChange={setSelectedTool}
                    tools={textTools}
                />
                <OutputPanel
                    output={output}
                    onCopy={handleCopy}
                    copyStatus={copyStatus}
                />
            </main>

            <Footer />
        </div>
    );
}

export default App;
