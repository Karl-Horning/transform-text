/** @fileoverview Integration tests for the App component. */
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("renders without crashing", () => {
        render(<App />);
        expect(
            screen.getByRole("textbox", { name: /input text/i })
        ).toBeInTheDocument();
    });

    it("transforms input text live as the user types", () => {
        render(<App />);
        fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "uppercase" },
        });
        fireEvent.change(
            screen.getByRole("textbox", { name: /input text/i }),
            { target: { value: "hello" } }
        );
        expect(
            screen.getByRole("textbox", { name: /transformed output/i })
        ).toHaveValue("HELLO");
    });

    it("shows a warning when copy is clicked with no output", () => {
        render(<App />);
        fireEvent.click(
            screen.getByRole("button", { name: /copy output to clipboard/i })
        );
        expect(screen.getByRole("status")).toHaveTextContent("Nothing to copy");
    });
});
