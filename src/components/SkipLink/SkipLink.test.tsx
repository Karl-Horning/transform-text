/**
 * @fileoverview Tests for the SkipLink component.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SkipLink } from "./SkipLink";

describe("SkipLink", () => {
    it("renders a link pointing to the main content region", () => {
        render(<SkipLink />);
        const link = screen.getByRole("link", { name: /skip to main content/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "#main-content");
    });

    it("has no accessibility violations", async () => {
        const { container } = render(<SkipLink />);
        const results = await axe(container);
        expect(results.violations).toHaveLength(0);
    });
});
