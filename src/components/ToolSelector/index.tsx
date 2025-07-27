import { textTools } from "../../data/textTools";

type ToolSelectorProps = {
    onSelect: (tool: string) => void;
};

/**
 * Renders a list of transformation buttons for selecting text tools.
 *
 * Used in Step 2 of the transformation workflow. It maps over a list of
 * text tools and generates a button for each one. When a button is clicked,
 * it calls the `onSelect` callback with the corresponding tool identifier.
 *
 * @param props - Component properties
 * @param props.onSelect - Callback triggered with the selected tool's identifier.
 * @returns A section containing selectable buttons for text transformation actions.
 */
export default function ToolSelector({ onSelect }: ToolSelectorProps) {
    return (
        <section id="buttonSelectors" className="mb-6">
            <p className="mb-4 block font-medium">Step 2: Choose an action</p>

            <div className="mb-4 flex flex-wrap gap-2">
                {textTools.map(({ buttonText, selectOption }) => (
                    <button
                        key={selectOption}
                        onClick={() => onSelect(selectOption)}
                        className="flex-1 basis-[200px] cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        {buttonText}
                    </button>
                ))}
            </div>
        </section>
    );
}
