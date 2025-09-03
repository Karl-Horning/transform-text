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
 * @param props - Component properties.
 * @param props.onSelect - Callback triggered with the selected tool's identifier.
 * @returns A section containing selectable buttons for text transformation actions.
 */
export default function ToolSelector({ onSelect }: ToolSelectorProps) {
    return (
        <section
            id="buttonSelectors"
            className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur-sm sm:p-5 dark:border-slate-700 dark:bg-slate-800/60"
            aria-labelledby="tool-selector-heading"
            role="region"
        >
            <h3
                id="tool-selector-heading"
                className="text-lg font-semibold text-slate-900 dark:text-slate-100"
            >
                Step 2: Select a formatting style or text action
            </h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3">
                {textTools.map(({ buttonText, selectOption }) => (
                    <button
                        key={selectOption}
                        type="button"
                        onClick={() => onSelect(selectOption)}
                        className="w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md ring-offset-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:bg-indigo-800 motion-safe:duration-150 dark:bg-indigo-500 dark:ring-offset-slate-900 dark:hover:bg-indigo-400 dark:focus-visible:ring-indigo-400"
                    >
                        <span className="block truncate">{buttonText}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
