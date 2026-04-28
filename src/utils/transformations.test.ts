/**
 * @fileoverview Unit tests for the text transformation utility functions in
 * `transformations.ts`. Covers each function's happy path, edge cases for
 * empty and whitespace-only input, and strings that contain numbers.
 */
import { describe, it, expect } from "vitest";
import {
    alternatingCase,
    capitalise,
    trimWhitespace,
    escapeNewlines,
    unescapeNewlines,
    uppercase,
    lowercase,
    snakeCase,
    kebabCase,
    pascalCase,
    camelCase,
    sarcasticSpongeBob,
    startCase,
    titleCaseMla,
    titleCaseAP,
    sentenceCase,
} from "./transformations";

describe("capitalise", () => {
    it("uppercases the first character and lowercases the rest", () => {
        expect(capitalise("hello")).toBe("Hello");
        expect(capitalise("HELLO")).toBe("Hello");
        expect(capitalise("hELLO")).toBe("Hello");
    });

    it("handles a single character", () => {
        expect(capitalise("a")).toBe("A");
        expect(capitalise("A")).toBe("A");
    });

    it("returns an empty string for empty input", () => {
        expect(capitalise("")).toBe("");
    });
});

describe("trimWhitespace", () => {
    it("removes leading and trailing whitespace", () => {
        expect(trimWhitespace("  hello  ")).toBe("hello");
    });

    it("collapses internal consecutive spaces to a single space", () => {
        expect(trimWhitespace("hello   world")).toBe("hello world");
        expect(trimWhitespace("  hello   world  ")).toBe("hello world");
    });

    it("returns an empty string for empty input", () => {
        expect(trimWhitespace("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(trimWhitespace("   ")).toBe("");
    });
});

describe("escapeNewlines", () => {
    it("replaces newline characters with the literal string \\n", () => {
        expect(escapeNewlines("Hello\nWorld")).toBe("Hello\\nWorld");
    });

    it("handles Windows-style line endings", () => {
        expect(escapeNewlines("Line 1\r\nLine 2")).toBe("Line 1\\nLine 2");
    });

    it("trims leading and trailing whitespace before escaping", () => {
        expect(escapeNewlines("Hello\nWorld\n")).toBe("Hello\\nWorld");
    });

    it("returns an empty string for empty input", () => {
        expect(escapeNewlines("")).toBe("");
    });
});

describe("unescapeNewlines", () => {
    it("replaces the literal string \\n with actual newline characters", () => {
        expect(unescapeNewlines("Hello\\nWorld")).toBe("Hello\nWorld");
    });

    it("handles multiple sequences", () => {
        expect(unescapeNewlines("a\\nb\\nc")).toBe("a\nb\nc");
    });

    it("returns an empty string for empty input", () => {
        expect(unescapeNewlines("")).toBe("");
    });
});

describe("uppercase", () => {
    it("converts all characters to uppercase", () => {
        expect(uppercase("hello")).toBe("HELLO");
        expect(uppercase("Hello World")).toBe("HELLO WORLD");
    });

    it("trims whitespace before converting", () => {
        expect(uppercase("  hello  ")).toBe("HELLO");
    });

    it("returns an empty string for empty input", () => {
        expect(uppercase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(uppercase("   ")).toBe("");
    });
});

describe("lowercase", () => {
    it("converts all characters to lowercase", () => {
        expect(lowercase("HELLO")).toBe("hello");
        expect(lowercase("Hello World")).toBe("hello world");
    });

    it("trims whitespace before converting", () => {
        expect(lowercase("  HELLO  ")).toBe("hello");
    });

    it("returns an empty string for empty input", () => {
        expect(lowercase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(lowercase("   ")).toBe("");
    });
});

describe("snakeCase", () => {
    it("converts space-separated words to snake_case", () => {
        expect(snakeCase("Hello World")).toBe("hello_world");
    });

    it("converts camelCase input", () => {
        expect(snakeCase("helloWorld")).toBe("hello_world");
    });

    it("converts kebab-case input", () => {
        expect(snakeCase("hello-world")).toBe("hello_world");
    });

    it("preserves numbers", () => {
        expect(snakeCase("hello 123 world")).toBe("hello_123_world");
    });

    it("collapses multiple consecutive separators", () => {
        expect(snakeCase("hello--world")).toBe("hello_world");
        expect(snakeCase("hello  world")).toBe("hello_world");
    });

    it("strips leading and trailing separators", () => {
        expect(snakeCase("_hello_world_")).toBe("hello_world");
    });

    it("returns an empty string for empty input", () => {
        expect(snakeCase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(snakeCase("   ")).toBe("");
    });
});

describe("kebabCase", () => {
    it("converts space-separated words to kebab-case", () => {
        expect(kebabCase("Hello World")).toBe("hello-world");
    });

    it("converts camelCase input", () => {
        expect(kebabCase("helloWorld")).toBe("hello-world");
    });

    it("converts snake_case input", () => {
        expect(kebabCase("hello_world")).toBe("hello-world");
    });

    it("preserves numbers", () => {
        expect(kebabCase("hello 123 world")).toBe("hello-123-world");
    });

    it("collapses multiple consecutive separators", () => {
        expect(kebabCase("hello--world")).toBe("hello-world");
    });

    it("returns an empty string for empty input", () => {
        expect(kebabCase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(kebabCase("   ")).toBe("");
    });
});

describe("pascalCase", () => {
    it("converts space-separated words to PascalCase", () => {
        expect(pascalCase("hello world")).toBe("HelloWorld");
    });

    it("converts kebab-case input", () => {
        expect(pascalCase("hello-world")).toBe("HelloWorld");
    });

    it("converts snake_case input", () => {
        expect(pascalCase("hello_world")).toBe("HelloWorld");
    });

    it("preserves numbers within words", () => {
        expect(pascalCase("hello 123 world")).toBe("Hello123World");
    });

    it("returns an empty string for empty input", () => {
        expect(pascalCase("")).toBe("");
    });
});

describe("camelCase", () => {
    it("converts space-separated words to camelCase", () => {
        expect(camelCase("Hello World")).toBe("helloWorld");
    });

    it("converts PascalCase input", () => {
        expect(camelCase("HelloWorld")).toBe("helloWorld");
    });

    it("preserves numbers within words", () => {
        expect(camelCase("hello 123 world")).toBe("hello123World");
    });

    it("returns an empty string for empty input", () => {
        expect(camelCase("")).toBe("");
    });
});

describe("sarcasticSpongeBob", () => {
    it("preserves all characters regardless of casing", () => {
        const input = "hello world";
        const output = sarcasticSpongeBob(input);
        expect(output.toLowerCase()).toBe(input.toLowerCase());
    });

    it("produces a mix of uppercase and lowercase letters", () => {
        const output = sarcasticSpongeBob("hello world");
        expect(output).toMatch(/[A-Z]/);
        expect(output).toMatch(/[a-z]/);
    });

    it("preserves non-alphabetic characters in their original positions", () => {
        const input = "hello, world!";
        const output = sarcasticSpongeBob(input);
        // Non-alpha chars at the same positions as in the input.
        const nonAlphaPositions = [...input].reduce<number[]>((acc, ch, i) => {
            if (!/[a-zA-Z]/.test(ch)) acc.push(i);
            return acc;
        }, []);
        nonAlphaPositions.forEach((i) => {
            expect(output[i]).toBe(input[i]);
        });
    });

    it("returns an empty string for empty input", () => {
        expect(sarcasticSpongeBob("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(sarcasticSpongeBob("   ")).toBe("");
    });
});

describe("alternatingCase", () => {
    it("alternates case starting with uppercase, skipping non-letters", () => {
        expect(alternatingCase("hello world")).toBe("HeLlO wOrLd");
    });

    it("does not count spaces or numbers in the alternation index", () => {
        expect(alternatingCase("hello 123 world")).toBe("HeLlO 123 wOrLd");
    });

    it("matches the expected output for a multi-word phrase", () => {
        expect(alternatingCase("this is in alternating case")).toBe(
            "ThIs Is In AlTeRnAtInG cAsE"
        );
    });

    it("returns an empty string for empty input", () => {
        expect(alternatingCase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(alternatingCase("   ")).toBe("");
    });
});

describe("startCase", () => {
    it("capitalises the first letter of every word", () => {
        expect(startCase("hello world")).toBe("Hello World");
    });

    it("capitalises short words that MLA and AP would lowercase", () => {
        expect(startCase("the quick brown fox jumps over the lazy dog")).toBe(
            "The Quick Brown Fox Jumps Over The Lazy Dog"
        );
    });

    it("lowercases the remaining letters of each word", () => {
        expect(startCase("HELLO WORLD")).toBe("Hello World");
    });

    it("returns an empty string for empty input", () => {
        expect(startCase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(startCase("   ")).toBe("");
    });
});

describe("titleCaseMla", () => {
    it("capitalises all significant words", () => {
        expect(titleCaseMla("the quick brown fox")).toBe(
            "The Quick Brown Fox"
        );
    });

    it("lowercases articles and short prepositions in the middle of a title", () => {
        expect(
            titleCaseMla("the quick brown fox jumps over the lazy dog")
        ).toBe("The Quick Brown Fox Jumps over the Lazy Dog");
    });

    it("always capitalises the first and last word", () => {
        expect(titleCaseMla("in the end and the")).toBe(
            "In the End and The"
        );
    });

    it("returns an empty string for empty input", () => {
        expect(titleCaseMla("")).toBe("");
    });
});

describe("titleCaseAP", () => {
    it("capitalises principal words and lowercases short conjunctions and prepositions", () => {
        expect(
            titleCaseAP("the quick brown fox jumps over the lazy dog")
        ).toBe("The Quick Brown Fox Jumps Over the Lazy Dog");
    });

    it("always capitalises the first and last word", () => {
        expect(titleCaseAP("in the end and the")).toBe(
            "In the End and The"
        );
    });

    it("returns an empty string for empty input", () => {
        expect(titleCaseAP("")).toBe("");
    });
});

describe("sentenceCase", () => {
    it("capitalises only the first letter and lowercases the rest", () => {
        expect(sentenceCase("HELLO WORLD")).toBe("Hello world");
    });

    it("leaves already sentence-cased input unchanged", () => {
        expect(sentenceCase("Hello world")).toBe("Hello world");
    });

    it("returns an empty string for empty input", () => {
        expect(sentenceCase("")).toBe("");
    });

    it("returns an empty string for whitespace-only input", () => {
        expect(sentenceCase("   ")).toBe("");
    });
});
