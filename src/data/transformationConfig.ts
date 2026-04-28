/**
 * @fileoverview Configuration for the available text transformation tools, organised by group.
 */
import {
    alternatingCase,
    camelCase,
    escapeNewlines,
    kebabCase,
    lowercase,
    pascalCase,
    removeSpecialCharacters,
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

/** A single transformation tool entry. */
export interface TransformationTool {
    label: string;
    selectOption: string;
    transform: (input: string) => string;
}

/** A named group of related transformation tools. */
export interface TransformationGroup {
    group: string;
    options: TransformationTool[];
}

/** Transformation tools organised into labelled groups for the select menu. */
export const transformationGroups: TransformationGroup[] = [
    {
        group: "Escaping",
        options: [
            { label: "Escape Newlines", selectOption: "escape", transform: escapeNewlines },
            { label: "Unescape Newlines", selectOption: "unescape", transform: unescapeNewlines },
        ],
    },
    {
        group: "Case",
        options: [
            { label: "Uppercase", selectOption: "uppercase", transform: uppercase },
            { label: "Lowercase", selectOption: "lowercase", transform: lowercase },
            { label: "Sentence Case", selectOption: "sentenceCase", transform: sentenceCase },
            { label: "Start Case", selectOption: "startCase", transform: startCase },
            { label: "MLA Title Case", selectOption: "titleCaseMla", transform: titleCaseMla },
            { label: "AP Title Case", selectOption: "titleCaseAP", transform: titleCaseAP },
        ],
    },
    {
        group: "Code Format",
        options: [
            { label: "snake_case", selectOption: "snakeCase", transform: snakeCase },
            { label: "kebab-case", selectOption: "kebabCase", transform: kebabCase },
            { label: "PascalCase", selectOption: "pascalCase", transform: pascalCase },
            { label: "camelCase", selectOption: "camelCase", transform: camelCase },
        ],
    },
    {
        group: "Fun",
        options: [
            { label: "Sarcastic SpongeBob", selectOption: "sarcasticSpongeBob", transform: sarcasticSpongeBob },
            { label: "Alternating Case", selectOption: "alternatingCase", transform: alternatingCase },
        ],
    },
    {
        group: "Cleanup",
        options: [
            { label: "Trim Whitespace", selectOption: "trim", transform: trimWhitespace },
            { label: "Remove Special Characters", selectOption: "removeSpecialCharacters", transform: removeSpecialCharacters },
        ],
    },
];

/** Flat list of all tools, derived from transformationGroups. Used for transform lookups. */
export const textTools = transformationGroups.flatMap((g) => g.options);
