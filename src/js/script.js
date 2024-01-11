(() => {
    "use strict";

    /**
     * Gets the button element responsible for copying the output to clipboard.
     * @type {HTMLButtonElement}
     */
    const copyOutputBtn = document.getElementById("copyOutput");

    /**
     * Gets the textarea element for input text.
     * @type {HTMLTextAreaElement}
     */
    const inputTxtBox = document.getElementById("inputText");

    /**
     * Gets the textarea element for output text.
     * @type {HTMLTextAreaElement}
     */
    const outputTxtBox = document.getElementById("outputText");

    /**
     * Gets the form element.
     * @type {HTMLFormElement}
     */
    const form = document.querySelector("form");

    /**
     * Prevents the default form submission.
     * @param {Event} e - The form submission event.
     */
    const preventFormSubmission = (e) => e.preventDefault();

    /**
     * Replaces newline characters in the input textarea with "\\n".
     * Updates the output textarea accordingly.
     * @returns {string} - The modified text without newline characters.
     */
    const replaceNewlineChars = () => {
        const regex = /[\r\n\u0085\u2028\u2029]+/g;
        const newText = inputTxtBox.value.replace(regex, "\\n");
        writeNewTxt(newText);
        return newText;
    };

    /**
     * Writes the provided text to the output textarea.
     * @param {string} newTxt - The text to be written to the output textarea.
     */
    const writeNewTxt = (newTxt) => (outputTxtBox.value = newTxt);

    /**
     * Copies the text from the output textarea to the clipboard.
     * Displays appropriate logs for success or failure.
     */
    const copyOutput = async () => {
        try {
            await navigator.clipboard.writeText(outputTxtBox.value);
            console.log("Text copied to clipboard");
        } catch (err) {
            console.error("Unable to copy text to clipboard", err);
        }
    };

    /**
     * Handles button click event.
     * Prevents form submission, replaces newlines, updates output, and copies to clipboard.
     * @param {Event} e - The button click event.
     */
    const handleBtnClick = (e) => {
        preventFormSubmission(e);
        const textWithoutNewlines = replaceNewlineChars();
        writeNewTxt(textWithoutNewlines);
        copyOutput();
    };

    // Event listeners
    /**
     * Adds event listener to prevent the default form submission.
     */
    form.addEventListener("submit", preventFormSubmission);

    /**
     * Adds event listener to handle button click.
     */
    copyOutputBtn.addEventListener("click", handleBtnClick);

    /**
     * Adds event listener to replace newlines when input changes.
     */
    inputTxtBox.addEventListener("input", replaceNewlineChars);
})();
