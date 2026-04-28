/** @fileoverview Input panel component containing the text area and transformation selector. */
import styles from "./InputPanel.module.css";

/** A single entry from the transformation tool list. */
interface Tool {
    label: string;
    selectOption: string;
    transform: (input: string) => string;
}

interface InputPanelProps {
    /** Current textarea value. */
    value: string;
    /** Called with the updated value on each keystroke. */
    onChange: (value: string) => void;
    /** The identifier of the currently selected transformation. */
    selectedTool: string;
    /** Called with the new tool identifier when the selection changes. */
    onToolChange: (tool: string) => void;
    /** List of available transformation tools. */
    tools: Tool[];
}

/** Input panel with a labelled text area and a transformation selector. */
export function InputPanel({
    value,
    onChange,
    selectedTool,
    onToolChange,
    tools,
}: InputPanelProps) {
    return (
        <section className={styles.panel} aria-labelledby="input-panel-label">
            <div className={styles.bar}>
                <span id="input-panel-label" className={styles.panelLabel}>
                    Input
                </span>
                <select
                    className={styles.select}
                    value={selectedTool}
                    onChange={(e) => onToolChange(e.target.value)}
                    aria-label="Select transformation"
                >
                    {tools.map(({ label, selectOption }) => (
                        <option key={selectOption} value={selectOption}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
            <textarea
                className={styles.textarea}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Paste or type your text here…"
                aria-label="Input text"
                spellCheck={false}
                autoComplete="off"
            />
        </section>
    );
}
