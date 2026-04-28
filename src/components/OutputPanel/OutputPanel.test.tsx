/**
 * @fileoverview Tests for the OutputPanel component.
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import { OutputPanel } from "./OutputPanel";
import type { CopyStatus } from "./OutputPanel";

describe("OutputPanel", () => {
    it("renders the output text in a read-only textarea", () => {
        render(
            <OutputPanel output="hello world" onCopy={vi.fn()} copyStatus={null} />
        );
        expect(
            screen.getByRole("textbox", { name: /transformed output/i })
        ).toHaveValue("hello world");
    });

    it("renders a copy button", () => {
        render(
            <OutputPanel output="test" onCopy={vi.fn()} copyStatus={null} />
        );
        expect(
            screen.getByRole("button", { name: /copy output to clipboard/i })
        ).toBeInTheDocument();
    });

    it("calls onCopy when the copy button is clicked", () => {
        const onCopy = vi.fn();
        render(
            <OutputPanel output="test" onCopy={onCopy} copyStatus={null} />
        );
        fireEvent.click(
            screen.getByRole("button", { name: /copy output to clipboard/i })
        );
        expect(onCopy).toHaveBeenCalledTimes(1);
    });

    it.each<[CopyStatus["kind"], string]>([
        ["success", "Copied"],
        ["warning", "Nothing to copy"],
        ["error", "Copy failed"],
    ])("shows a %s status message when provided", (kind, text) => {
        render(
            <OutputPanel
                output="test"
                onCopy={vi.fn()}
                copyStatus={{ kind, text }}
            />
        );
        expect(screen.getByRole("status")).toHaveTextContent(text);
    });

    it("shows the character count when output is non-empty", () => {
        render(
            <OutputPanel output="hello" onCopy={vi.fn()} copyStatus={null} />
        );
        expect(screen.getByText(/5 chars/i)).toBeInTheDocument();
    });

    it("does not show a character count when output is empty", () => {
        render(
            <OutputPanel output="" onCopy={vi.fn()} copyStatus={null} />
        );
        expect(screen.queryByText(/char/i)).not.toBeInTheDocument();
    });

    it("has no accessibility violations", async () => {
        const { container } = render(
            <OutputPanel output="test" onCopy={vi.fn()} copyStatus={null} />
        );
        const results = await axe(container);
        expect(results.violations).toHaveLength(0);
    });
});
