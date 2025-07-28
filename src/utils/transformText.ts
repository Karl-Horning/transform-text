/**
 * Replaces all newline characters in the input string with the literal string `\n`.
 *
 * This is useful for escaping newlines in text where newlines need to be represented as `\n`.
 *
 * @param input - The text to escape newlines in.
 * @returns The input string with newlines replaced by `\n`.
 */
export const escapeNewlines = (input: string) =>
    input.replace(/[\r\n\u0085\u2028\u2029]+/g, "\\n");

/**
 * Converts all literal `\n` sequences in the input string back into actual newline characters.
 *
 * This is useful for unescaping previously escaped newline sequences.
 *
 * @param input - The text to unescape newlines in.
 * @returns The input string with `\n` sequences replaced by actual newlines.
 */
export const unescapeNewlines = (input: string) => input.replace(/\\n/g, "\n");

/**
 * Converts all characters in the input string to uppercase.
 *
 * @param input - The text to convert to uppercase.
 * @returns The input string in uppercase.
 */
export const uppercase = (input: string) => input.toUpperCase();

/**
 * Converts all characters in the input string to lowercase.
 *
 * @param input - The text to convert to lowercase.
 * @returns The input string in lowercase.
 */
export const lowercase = (input: string) => input.toLowerCase();

/**
 * Converts the input string to snake_case.
 *
 * Inserts underscores between words, removes special characters,
 * and converts the result to lowercase.
 *
 * @param input - The text to convert to snake_case.
 * @returns The input string in snake_case format.
 */
export const snakeCase = (input: string) => {
    return (
        input
            // Add spaces before capital letters
            .replace(/([A-Z])/g, " $1")

            // Replace multiple hyphens with a single hyphen
            .replace(/-+/g, "-")

            // Replace whitespace characters and hyphens with underscores
            .replace(/[\s-]+/g, "_")

            // Remove all special characters except underscores
            .replace(/[^\w\s]|_/g, "_")

            // Replace multiple underscores with a single underscore
            .replace(/_+/g, "_")

            // Remove special characters from the beginning and end of the string
            .replace(/^[^a-zA-Z0-9]+/, "")
            .replace(/[^a-zA-Z0-9]+$/, "")

            // Convert the string to lowercase
            .toLowerCase()
    );
};

/**
 * Converts the input string to kebab-case.
 *
 * Inserts hyphens between words, removes special characters,
 * and converts the result to lowercase.
 *
 * @param input - The text to convert to kebab-case.
 * @returns The input string in kebab-case format.
 */
export const kebabCase = (input: string) => {
    return (
        input
            // Add spaces before capital letters
            .replace(/([A-Z])/g, " $1")

            // Replace multiple hyphens with a single hyphen
            .replace(/-+/g, "-")

            // Replace whitespace characters and underscores with hyphens
            .replace(/[\s_]+/g, "-")

            // Remove all special characters except hyphens
            .replace(/[^\w\s-]|_/g, "")

            // Replace multiple hyphens with a single hyphen
            .replace(/-+/g, "-")

            // Remove hyphens from the beginning and end of the string
            .replace(/^-+/, "")
            .replace(/-+$/, "")

            // Convert the string to lowercase
            .toLowerCase()
    );
};

/**
 * Converts the input string to PascalCase.
 *
 * Removes special characters and whitespace, and capitalises
 * the first letter of each word with no separators.
 *
 * @param input - The text to convert to PascalCase.
 * @returns The input string in PascalCase format.
 */
export const pascalCase = (input: string) => {
    return (
        input
            // Replace all whitespace, special characters, and underscores with a single space
            .replace(/[^\w\s]|_+/g, " ")
            .replace(/\s+/g, " ")
            // Remove whitespace from beginning and end
            .trim()
            // Capitalise the first letter of each word
            .replace(/(?:^|\W|_)\w/g, (match) => {
                return match.toUpperCase();
            })
            // Replace whitespace characters
            .replace(/[\s]+/g, "")
    );
};

/**
 * Converts the input string to camelCase.
 *
 * Uses PascalCase formatting and lowercases the first letter.
 *
 * @param input - The text to convert to camelCase.
 * @returns The input string in camelCase format.
 */
export const camelCase = (input: string) => {
    // Use the pascalCase function to format the string
    const pascalText = pascalCase(input);
    // Make the first character in a string lower case
    return pascalText.charAt(0).toLowerCase() + pascalText.slice(1);
};
