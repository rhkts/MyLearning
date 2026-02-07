import { JSX } from "react";

export type ComponentCategory = "mui" | "ReactHookForm" | "TailwindCSS" | "Tools";

export type ComponentType = {
  id: string;
  name: string;
  component: JSX.Element;
  path: string;
  category: ComponentCategory;
};

export type CodeViewerPorps = {
  code: string;
};
