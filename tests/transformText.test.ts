import {
    escapeNewlines,
    unescapeNewlines,
    uppercase,
    lowercase,
    snakeCase,
    kebabCase,
    pascalCase,
    camelCase,
    sarcasticSpongeBob,
    TitleCaseMla,
    titleCaseAP,
    sentenceCase,
} from "../src/utils/transformText";

describe("Text Transformation Utilities", () => {
    test("escapeNewlines replaces newlines with \\n", () => {
        expect(escapeNewlines("Hello\nWorld\n")).toBe("Hello\\nWorld");
        expect(escapeNewlines("Line 1\r\nLine 2")).toBe("Line 1\\nLine 2");
    });

    test("unescapeNewlines replaces \n with actual newlines", () => {
        expect(unescapeNewlines("Hello\nWorld")).toBe(
            "Hello\nWorld".replace(/\\n/g, "\n")
        );
    });

    test("uppercase converts to uppercase", () => {
        expect(uppercase("hello")).toBe("HELLO");
    });

    test("lowercase converts to lowercase", () => {
        expect(lowercase("HELLO")).toBe("hello");
    });

    test("snakeCase converts to snake_case", () => {
        expect(snakeCase("Hello World")).toBe("hello_world");
    });

    test("kebabCase converts to kebab-case", () => {
        expect(kebabCase("Hello World")).toBe("hello-world");
    });

    test("pascalCase converts to PascalCase", () => {
        expect(pascalCase("hello world")).toBe("HelloWorld");
    });

    test("camelCase converts to camelCase", () => {
        expect(camelCase("Hello World")).toBe("helloWorld");
    });

    test("sarcasticSpongeBob returns same chars with mixed case", () => {
        const input = "hello world";
        const output = sarcasticSpongeBob(input);
        expect(output.toLowerCase()).toBe(input.toLowerCase());
        expect(output).not.toBe(input); // Should be altered, but output is random
    });

    test("TitleCaseMla formats MLA style titles", () => {
        expect(
            TitleCaseMla("the quick brown fox jumps over the lazy dog")
        ).toBe("The Quick Brown Fox Jumps over the Lazy Dog");
    });

    test("titleCaseAP formats AP style titles", () => {
        expect(titleCaseAP("the quick brown fox jumps over the lazy dog")).toBe(
            "The Quick Brown Fox Jumps Over the Lazy Dog"
        );
    });

    test("sentenceCase formats correctly", () => {
        expect(sentenceCase("HELLO WORLD")).toBe("Hello world");
    });
});
