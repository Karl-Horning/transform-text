import { useState, useEffect } from "react";

function App() {
    const [switchToggled, setSwitchToggled] = useState(false);
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    // Dynamic UI strings
    const cardTitle = switchToggled
        ? "Replace Newline Characters with Newlines"
        : "Replace Newlines with Newline Characters";

    const switchLabel = switchToggled
        ? "Switch to Replace Newlines with Newline Characters"
        : "Switch to Replace Newline Characters with Newlines";

    // Text transformations
    const replaceNewlineWithChars = (text: string) => {
        const regex = /[\r\n\u0085\u2028\u2029]+/g;
        return text.replace(regex, "\\n");
    };

    const replaceCharsWithNewline = (text: string) => {
        return text.replace(/\\n/g, "\n");
    };

    // Automatically update output text when input or switch changes
    useEffect(() => {
        const transformed = switchToggled
            ? replaceCharsWithNewline(inputText)
            : replaceNewlineWithChars(inputText);
        setOutputText(transformed);
    }, [inputText, switchToggled]);

    // Handle clipboard copy on submit
    const handleCopy = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(outputText);
            console.log("Text copied to clipboard");
        } catch (err) {
            console.error("Unable to copy text to clipboard", err);
        }
    };

    return (
        <main className="container mx-auto py-6">
            <div className="mx-auto max-w-xl rounded border border-gray-700 px-6 py-8 shadow shadow-lg shadow-gray-800/50">
                <form onSubmit={handleCopy} className="space-y-6">
                    <section>
                        <h1 id="cardTitle" className="mb-2 text-4xl font-bold">
                            {cardTitle}
                        </h1>
                        <label className="inline-flex items-center">
                            <input
                                id="switchToNewlines"
                                type="checkbox"
                                checked={switchToggled}
                                onChange={() =>
                                    setSwitchToggled(!switchToggled)
                                }
                                className="form-checkbox mr-2"
                                aria-label="Toggle newline mode"
                            />
                            <span id="switchToNewlinesLabel">
                                {switchLabel}
                            </span>
                        </label>
                    </section>

                    <section>
                        <label
                            htmlFor="inputText"
                            className="mb-1 block font-medium"
                        >
                            Input
                        </label>
                        <textarea
                            id="inputText"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="min-h-[15rem] w-full rounded border border-gray-700 p-2"
                        ></textarea>
                    </section>

                    <section>
                        <label
                            htmlFor="outputText"
                            className="mb-1 block font-medium"
                        >
                            Output
                        </label>
                        <textarea
                            id="outputText"
                            value={outputText}
                            readOnly
                            className="min-h-[15rem] w-full rounded border border-gray-700 p-2"
                        ></textarea>
                    </section>

                    <section>
                        <button
                            id="copyOutput"
                            type="submit"
                            className="w-full rounded bg-blue-600 py-3 text-lg text-white hover:bg-blue-700"
                        >
                            Copy Output
                        </button>
                    </section>
                </form>
            </div>
        </main>
    );
}

export default App;
