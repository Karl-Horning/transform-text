/**
 * @fileoverview Configuration for the available text transformation tools.
 */
import {
    alternatingCase,
    camelCase,
    escapeNewlines,
    kebabCase,
    lowercase,
    pascalCase,
    sarcasticSpongeBob,
    sentenceCase,
    snakeCase,
    startCase,
    titleCaseAP,
    titleCaseMla,
    trimWhitespace,
    unescapeNewlines,
    uppercase,
} from "../utils/transformations";

/** Available text transformation tools, each with a label, identifier, and transform function. */
export const textTools = [
    {
        label: "Escape Newlines",
        selectOption: "escape",
        transform: escapeNewlines,
    },
    {
        label: "Unescape Newlines",
        selectOption: "unescape",
        transform: unescapeNewlines,
    },
    {
        label: "Uppercase",
        selectOption: "uppercase",
        transform: uppercase,
    },
    {
        label: "Lowercase",
        selectOption: "lowercase",
        transform: lowercase,
    },
    {
        label: "snake_case",
        selectOption: "snakeCase",
        transform: snakeCase,
    },
    {
        label: "kebab-case",
        selectOption: "kebabCase",
        transform: kebabCase,
    },
    {
        label: "PascalCase",
        selectOption: "pascalCase",
        transform: pascalCase,
    },
    {
        label: "camelCase",
        selectOption: "camelCase",
        transform: camelCase,
    },
    {
        label: "Sarcastic SpongeBob",
        selectOption: "sarcasticSpongeBob",
        transform: sarcasticSpongeBob,
    },
    {
        label: "Alternating Case",
        selectOption: "alternatingCase",
        transform: alternatingCase,
    },
    {
        label: "Start Case",
        selectOption: "startCase",
        transform: startCase,
    },
    {
        label: "MLA Title Case",
        selectOption: "titleCaseMla",
        transform: titleCaseMla,
    },
    {
        label: "AP Title Case",
        selectOption: "titleCaseAP",
        transform: titleCaseAP,
    },
    {
        label: "Sentence Case",
        selectOption: "sentenceCase",
        transform: sentenceCase,
    },
    {
        label: "Trim Whitespace",
        selectOption: "trim",
        transform: trimWhitespace,
    },
];
