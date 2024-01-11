(() => {
    "use strict";

    const copyOutputBtn = document.getElementById("copyOutput");
    const inputTxtBox = document.getElementById("inputText");
    const outputTxtBox = document.getElementById("outputText");
    const form = document.querySelector('form');

    const preventFormSubmission = (e) => e.preventDefault();

    const replaceNewlineChars = (e) => {
        const regex = /[\r\n\u0085\u2028\u2029]+/g;
        const newText = inputTxtBox.value.replace(regex, "\\n");
        writeNewTxt(newText);
        return newText;
    };

    const writeNewTxt = (newTxt) => (outputTxtBox.value = newTxt);

    const copyOutput = () => navigator.clipboard.writeText(outputTxtBox.value);

    const handleBtnClick = (e) => {
        preventFormSubmission(e);
        const textWithoutNewlines = replaceNewlineChars();
        writeNewTxt(textWithoutNewlines);
        copyOutput();
    };

    form.addEventListener('submit', preventFormSubmission);
    copyOutputBtn.addEventListener("click", handleBtnClick);
    inputTxtBox.addEventListener("keyup", replaceNewlineChars);
})();
