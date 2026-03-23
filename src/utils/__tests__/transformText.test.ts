import {
    capitalise,
    escapeNewlines,
    unescapeNewlines,
    uppercase,
    lowercase,
    snakeCase,
    kebabCase,
    pascalCase,
    camelCase,
    sarcasticSpongeBob,
    titleCaseMla,
    titleCaseAP,
    sentenceCase,
    trimWhitespace,
} from "../transformText";

describe("Text Transformation Utilities", () => {
    test("trimWhitespace removes leading, trailing, and excess internal spaces", () => {
        expect(trimWhitespace("  hello  ")).toBe("hello");
        expect(trimWhitespace("hello   world")).toBe("hello world");
        expect(trimWhitespace("  hello   world  ")).toBe("hello world");
        expect(trimWhitespace("")).toBe("");
    });

    test("capitalise uppercases first letter and lowercases the rest", () => {
        expect(capitalise("hello")).toBe("Hello");
        expect(capitalise("HELLO")).toBe("Hello");
        expect(capitalise("hELLO")).toBe("Hello");
    });

    test("escapeNewlines replaces newlines with \\n", () => {
        expect(escapeNewlines("Hello\nWorld\n")).toBe("Hello\\nWorld");
        expect(escapeNewlines("Line 1\r\nLine 2")).toBe("Line 1\\nLine 2");
    });

    test("unescapeNewlines replaces \\n with actual newlines", () => {
        expect(unescapeNewlines("Hello\\nWorld")).toBe("Hello\nWorld");
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
        expect(output.length).toBe(input.length);
        expect(output.toLowerCase()).toBe(input.toLowerCase());
        expect(output).toMatch(/[A-Z]/);
        expect(output).toMatch(/[a-z]/);
    });

    test("titleCaseMla formats MLA style titles", () => {
        expect(
            titleCaseMla("the quick brown fox jumps over the lazy dog")
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

describe("Edge cases", () => {
    test("all functions handle empty strings", () => {
        expect(escapeNewlines("")).toBe("");
        expect(unescapeNewlines("")).toBe("");
        expect(uppercase("")).toBe("");
        expect(lowercase("")).toBe("");
        expect(snakeCase("")).toBe("");
        expect(kebabCase("")).toBe("");
        expect(pascalCase("")).toBe("");
        expect(camelCase("")).toBe("");
        expect(titleCaseMla("")).toBe("");
        expect(titleCaseAP("")).toBe("");
        expect(sentenceCase("")).toBe("");
    });

    test("all functions handle whitespace-only strings", () => {
        expect(uppercase("   ")).toBe("");
        expect(lowercase("   ")).toBe("");
        expect(snakeCase("   ")).toBe("");
        expect(kebabCase("   ")).toBe("");
        expect(sentenceCase("   ")).toBe("");
    });

    test("all functions handle strings with numbers", () => {
        expect(snakeCase("hello 123 world")).toBe("hello_123_world");
        expect(kebabCase("hello 123 world")).toBe("hello-123-world");
        expect(pascalCase("hello 123 world")).toBe("Hello123World");
        expect(camelCase("hello 123 world")).toBe("hello123World");
    });
});
