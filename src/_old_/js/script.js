(() => {
    "use strict";

    // Get the different elements on the page
    const copyOutputBtn = document.getElementById("copyOutput");
    const inputTxtBox = document.getElementById("inputText");
    const outputTxtBox = document.getElementById("outputText");
    const form = document.querySelector("form");
    const switchToNewlines = document.getElementById("switchToNewlines");
    const switchToNewlinesLabel = document.getElementById(
        "switchToNewlinesLabel"
    );
    const cardTitle = document.getElementById("cardTitle");

    let switchToggled = false;

    /**
     * Prevents the default form submission.
     * @param {Event} e - The form submission event.
     */
    const preventFormSubmission = (e) => {
        e.preventDefault();
    };

    /**
     * Replaces newline characters in the input textarea with "\\n".
     * Updates the output textarea accordingly.
     * @returns {string} - The modified text without newline characters.
     */
    const replaceNewlineWithChars = () => {
        const regex = /[\r\n\u0085\u2028\u2029]+/g;
        const newText = inputTxtBox.value.replace(regex, "\\n");
        writeNewTxt(newText);
        return newText;
    };

    /**
     * Replaces occurrences of the literal string "\n" with newline characters.
     * @returns {string} The modified text with newline characters.
     */
    const replaceCharsWithNewline = () => {
        // Match occurrences of the literal string "\n"
        const regex = /\\n/g;
        // Replace "\n" occurrences with actual newline characters
        const newText = inputTxtBox.value.replace(regex, "\n");
        writeNewTxt(newText);
        return newText;
    };

    /**
     * Writes the provided text to the output textarea.
     * @param {string} newTxt - The text to be written to the output textarea.
     */
    const writeNewTxt = (newTxt) => {
        outputTxtBox.value = newTxt;
    };

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
     * Creates the output text based on the current state of the switch toggle.
     * Calls the appropriate function to handle the text transformation.
     */
    const createOutputText = () => {
        if (switchToggled) {
            // If switch is toggled, replace "\n" with newline characters
            const textWithNewlines = replaceCharsWithNewline();
            writeNewTxt(textWithNewlines);
        } else {
            // If switch is not toggled, replace newline characters with "\\n"
            const textWithoutNewlines = replaceNewlineWithChars();
            writeNewTxt(textWithoutNewlines);
        }
    };

    /**
     * Handles button click event.
     * Prevents form submission, replaces newlines, updates output, and copies to clipboard.
     * @param {Event} e - The button click event.
     */
    const handleBtnClick = (e) => {
        preventFormSubmission(e);
        createOutputText();
        copyOutput();
    };

    /**
     * Updates the text of UI elements based on the state of the switch toggle.
     * If the switch is checked, it updates the text to replace newline characters with newlines.
     * If the switch is unchecked, it updates the text to replace newlines with newline characters.
     */
    const updateCardText = () => {
        // Check if the switch toggle is checked
        if (switchToNewlines.checked) {
            // Update card title and switch label accordingly
            cardTitle.innerText = "Replace Newline Characters with Newlines";
            switchToNewlinesLabel.innerText =
                "Switch to Replace Newlines with Newline Characters";
            switchToggled = true; // Update the switch state
        } else {
            // Update card title and switch label accordingly
            cardTitle.innerText = "Replace Newlines with Newline Characters";
            switchToNewlinesLabel.innerText =
                "Switch to Replace Newline Characters with Newlines";
            switchToggled = false; // Update the switch state
        }
    };

    /**
     * Handles the switch toggle event by updating the card text and creating output text.
     */
    const handleSwitchToggle = () => {
        updateCardText();
        createOutputText(); // Update the output text based on the switch state
    };

    // Event listeners
    form.addEventListener("submit", preventFormSubmission);
    copyOutputBtn.addEventListener("click", handleBtnClick);
    inputTxtBox.addEventListener("input", createOutputText);
    switchToNewlines.addEventListener("change", handleSwitchToggle);
})();
