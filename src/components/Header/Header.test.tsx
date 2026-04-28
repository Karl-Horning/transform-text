/**
 * @fileoverview Tests for the Header component.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Header } from "./Header";
import { SITE_TITLE } from "../../config";

describe("Header", () => {
    it("renders the site title as a level-1 heading", () => {
        render(<Header />);
        expect(
            screen.getByRole("heading", { level: 1 })
        ).toHaveTextContent(SITE_TITLE);
    });

    it("has no accessibility violations", async () => {
        const { container } = render(<Header />);
        const results = await axe(container);
        expect(results.violations).toHaveLength(0);
    });
});
