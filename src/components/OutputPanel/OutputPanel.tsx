/**
 * @fileoverview Output panel component displaying transformed text with a
 * clipboard copy action.
 */
import styles from "./OutputPanel.module.css";

/** Describes the outcome of a clipboard copy attempt. */
export type CopyStatus =
    | { kind: "success"; text: string }
    | { kind: "warning"; text: string }
    | { kind: "error"; text: string };

interface OutputPanelProps {
    /** The transformed text to display. */
    output: string;
    /** Called when the user clicks the copy button. */
    onCopy: () => void;
    /** Current copy status, or `null` when no status is shown. */
    copyStatus: CopyStatus | null;
}

/** Output panel with a read-only text area, a copy button, and inline status feedback. */
export function OutputPanel({ output, onCopy, copyStatus }: OutputPanelProps) {
    const charCount = output.length;

    const statusClass =
        copyStatus?.kind === "success"
            ? styles.statusOk
            : copyStatus?.kind === "error"
              ? styles.statusErr
              : copyStatus?.kind === "warning"
                ? styles.statusWarn
                : "";

    return (
        <section className={styles.panel} aria-labelledby="output-panel-label">
            <div className={styles.bar}>
                <span id="output-panel-label" className={styles.panelLabel}>
                    Output
                </span>
            </div>
            <textarea
                className={styles.textarea}
                value={output}
                readOnly
                placeholder="Transformed text will appear here…"
                aria-label="Transformed output"
                spellCheck={false}
            />
            <div className={styles.footer}>
                <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={onCopy}
                    aria-label="Copy output to clipboard"
                >
                    copy
                </button>
                <span
                    role="status"
                    aria-atomic="true"
                    className={[
                        styles.status,
                        copyStatus ? styles.statusVisible : "",
                        statusClass,
                    ]
                        .join(" ")
                        .trim()}
                >
                    {copyStatus?.text ?? ""}
                </span>
                {charCount > 0 && (
                    <span
                        className={styles.charCount}
                        aria-label={`${charCount} character${charCount === 1 ? "" : "s"}`}
                    >
                        {charCount.toLocaleString()} char
                        {charCount === 1 ? "" : "s"}
                    </span>
                )}
            </div>
        </section>
    );
}
