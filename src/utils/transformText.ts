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
