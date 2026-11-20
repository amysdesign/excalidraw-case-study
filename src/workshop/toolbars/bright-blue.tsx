import "./bright-blue.css";

import type { ToolbarMeta, ToolbarProps } from "../types";

export const meta: ToolbarMeta = {
  name: "Bright Blue",
  idea: "Separate selection and shapes from a cobalt Draw button, and underline the active tool.",
};

export default function BrightBlueToolbar({ renderDefault }: ToolbarProps) {
  return <div className="toolbar-bright-blue">{renderDefault()}</div>;
}
