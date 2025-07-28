import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../src/App";

Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn(),
    },
});

describe("Copy functionality", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("shows warning when trying to copy with no text", async () => {
        render(<App />);

        const copyButton = screen.getByRole("button", {
            name: /Copy Formatted Text/i,
        });
        fireEvent.click(copyButton);

        expect(
            await screen.findByText(/⚠️ Nothing to copy/i)
        ).toBeInTheDocument();
    });

    test("shows success when text is copied", async () => {
        // @ts-expect-error mock clipboard
        navigator.clipboard.writeText.mockResolvedValueOnce();

        render(<App />);

        const input = screen.getByLabelText(/Step 1/i); // or use getByRole('textbox')
        fireEvent.change(input, { target: { value: "Hello world" } });

        // Simulate selecting a tool to generate output
        const button = screen.getByRole("button", { name: /uppercase/i });
        fireEvent.click(button);

        const copyButton = screen.getByRole("button", {
            name: /Copy Formatted Text/i,
        });
        fireEvent.click(copyButton);

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
            "HELLO WORLD"
        );

        await waitFor(() => {
            expect(
                screen.getByText(/✅ Text copied to clipboard/i)
            ).toBeInTheDocument();
        });
    });

    test("shows error message when clipboard write fails", async () => {
        // @ts-expect-error mock clipboard
        navigator.clipboard.writeText.mockRejectedValueOnce(
            new Error("Denied")
        );

        render(<App />);

        const input = screen.getByLabelText(/Step 1/i);
        fireEvent.change(input, { target: { value: "Test" } });

        const toolButton = screen.getByRole("button", { name: /uppercase/i });
        fireEvent.click(toolButton);

        const copyButton = screen.getByRole("button", {
            name: /Copy Formatted Text/i,
        });
        fireEvent.click(copyButton);

        await waitFor(() => {
            expect(
                screen.getByText(/❌ Unable to copy text to clipboard/i)
            ).toBeInTheDocument();
        });
    });
});
