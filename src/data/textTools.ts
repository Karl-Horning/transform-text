import {
    camelCase,
    escapeNewlines,
    kebabCase,
    lowercase,
    pascalCase,
    sarcasticSpongeBob,
    snakeCase,
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
    {
        buttonText: "snake_case",
        selectOption: "snakeCase",
        transform: snakeCase,
    },
    {
        buttonText: "kebab-case",
        selectOption: "kebabCase",
        transform: kebabCase,
    },
    {
        buttonText: "PascalCase",
        selectOption: "pascalCase",
        transform: pascalCase,
    },
    {
        buttonText: "camelCase",
        selectOption: "camelCase",
        transform: camelCase,
    },
    {
        buttonText: "Sarcastic SpongeBob",
        selectOption: "sarcasticSpongeBob",
        transform: sarcasticSpongeBob,
    },
];
