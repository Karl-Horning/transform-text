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
            // Add spaces before capital letters (for camelCase support)
            .replace(/([a-z])([A-Z])/g, "$1 $2")

            // Remove all characters except letters, numbers, underscores, hyphens, and whitespace
            .replace(/[^\w\s-]/g, "")

            // Replace whitespace and hyphens with underscores
            .replace(/[\s-]+/g, "_")

            // Replace multiple underscores with a single one
            .replace(/_+/g, "_")

            // Trim underscores from start and end
            .replace(/^_+|_+$/g, "")

            // Convert to lowercase
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
            // Add spaces before capital letters (for camelCase support)
            .replace(/([a-z])([A-Z])/g, "$1 $2")

            // Remove all characters except letters, numbers, spaces, hyphens, and underscores
            .replace(/[^\w\s-]/g, "")

            // Replace spaces and underscores with hyphens
            .replace(/[\s_]+/g, "-")

            // Replace multiple hyphens with a single hyphen
            .replace(/-+/g, "-")

            // Trim hyphens from start and end
            .replace(/^-+/, "")
            .replace(/-+$/, "")

            // Convert to lowercase
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
            // Remove apostrophes (don’t treat as separators)
            .replace(/'/g, "")

            // Replace all non-alphanumeric separators with space
            .replace(/[\W_]+/g, " ")

            // Trim and split into words
            .trim()
            .split(" ")

            // Capitalise each word, preserving acronyms
            .map((word) => {
                if (word.toUpperCase() === word) return word;
                return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
            })

            // Join to single string
            .join("")
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
