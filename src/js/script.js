const handleBtnClick = () => {
    replaceNewlineChars();
};

const replaceNewlineChars = () => {
    // const regex = /[\r\n\x0B\x0C\u0085\u2028\u2029]+/g;
    const regex = /[\r\n\u0085\u2028\u2029]+/g;
    const inputTxt = document.getElementById("inputText").value;
    const outputTxt = inputTxt.replace(regex, "\\n");

    document.getElementById("outputText").value = outputTxt;
};

const copyOutput = () => {
    const outputTxt = document.getElementById("outputText").value;
    navigator.clipboard.writeText(outputTxt);
};

window.addEventListener("load", () => {
    const copyOutputBtn = document.getElementById("copyOutput");
    const inputTxt = document.getElementById("inputText");
    copyOutputBtn.addEventListener("click", copyOutput);
    inputTxt.addEventListener("keyup", replaceNewlineChars);
});
