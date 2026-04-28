/**
 * @fileoverview Tests for the InputPanel component.
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import { InputPanel } from "./InputPanel";

const groups = [
    {
        group: "Case",
        options: [
            {
                label: "Uppercase",
                selectOption: "uppercase",
                transform: (s: string) => s.toUpperCase(),
            },
            {
                label: "Lowercase",
                selectOption: "lowercase",
                transform: (s: string) => s.toLowerCase(),
            },
        ],
    },
];

describe("InputPanel", () => {
    it("renders the textarea with the provided value", () => {
        render(
            <InputPanel
                value="hello"
                onChange={vi.fn()}
                selectedTool="uppercase"
                onToolChange={vi.fn()}
                groups={groups}
            />
        );
        expect(
            screen.getByRole("textbox", { name: /input text/i })
        ).toHaveValue("hello");
    });

    it("calls onChange with the new value when the user types", () => {
        const onChange = vi.fn();
        render(
            <InputPanel
                value=""
                onChange={onChange}
                selectedTool="uppercase"
                onToolChange={vi.fn()}
                groups={groups}
            />
        );
        fireEvent.change(
            screen.getByRole("textbox", { name: /input text/i }),
            { target: { value: "hello" } }
        );
        expect(onChange).toHaveBeenCalledWith("hello");
    });

    it("renders all tool options in the select", () => {
        render(
            <InputPanel
                value=""
                onChange={vi.fn()}
                selectedTool="uppercase"
                onToolChange={vi.fn()}
                groups={groups}
            />
        );
        expect(
            screen.getByRole("option", { name: "Uppercase" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("option", { name: "Lowercase" })
        ).toBeInTheDocument();
    });

    it("calls onToolChange with the new identifier when the selection changes", () => {
        const onToolChange = vi.fn();
        render(
            <InputPanel
                value=""
                onChange={vi.fn()}
                selectedTool="uppercase"
                onToolChange={onToolChange}
                groups={groups}
            />
        );
        fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "lowercase" },
        });
        expect(onToolChange).toHaveBeenCalledWith("lowercase");
    });

    it("has no accessibility violations", async () => {
        const { container } = render(
            <InputPanel
                value=""
                onChange={vi.fn()}
                selectedTool="uppercase"
                onToolChange={vi.fn()}
                groups={groups}
            />
        );
        const results = await axe(container);
        expect(results.violations).toHaveLength(0);
    });
});
