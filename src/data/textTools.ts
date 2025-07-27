import {
    escapeNewlines,
    lowercase,
    unescapeNewlines,
    uppercase,
} from "../utils/transformText";

/**
 * A list of available text transformation tools.
 *
 * Each tool includes the display text for the UI and a handler
 * function to perform the corresponding text transformation.
 */
export const textTools = [
    {
        buttonText: "Escape Newlines",
        selectOption: "escape",
        transform: escapeNewlines,
    },
    {
        buttonText: "Unescape Newlines",
        selectOption: "unescape",
        transform: unescapeNewlines,
    },
    {
        buttonText: "Uppercase",
        selectOption: "uppercase",
        transform: uppercase,
    },
    {
        buttonText: "Lowercase",
        selectOption: "lowercase",
        transform: lowercase,
    },
];
