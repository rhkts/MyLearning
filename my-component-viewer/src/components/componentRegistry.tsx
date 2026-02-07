import * as Mui from "./mui";
import * as ReactHookForm from "./ReactHookForm";
import * as TailwindCss from "./TailwindCSS";
import * as Tools from "./Tools";
import sharpIcon from "../../レイアウト案/シャープアイコン1.svg";
import { ComponentCategory, ComponentType } from "./type";

const componentEntries: Omit<ComponentType, "name">[] = [
  {
    id: "MuiButton",
    component: <Mui.MuiButton />,
    path: "./mui/MuiButton.tsx",
    category: "mui",
  },
  {
    id: "MuiDataGridwithUTF8Export",
    component: <Mui.MuiDataGridwithUTF8Export />,
    path: "./mui/MuiDataGridwithUTF8Export.tsx",
    category: "mui",
  },
  {
    id: "MuiDialog",
    component: <Mui.MuiDialog />,
    path: "./mui/MuiDialog.tsx",
    category: "mui",
  },
  {
    id: "Tailwindbutton",
    component: <TailwindCss.TailwindButton />,
    path: "./TailwindCSS/TailwindButton.tsx",
    category: "TailwindCSS",
  },
  {
    id: "TailwindCard",
    component: <TailwindCss.TailwindCard />,
    path: "./TailwindCSS/TailwindCard.tsx",
    category: "TailwindCSS",
  },
  {
    id: "ApiWrapper",
    component: <Tools.ApiWrapper />,
    path: "./Tools/ApiWrapper.tsx",
    category: "Tools",
  },
  {
    id: "ReactHookHormSampleInputs",
    component: <ReactHookForm.ReactHookHormSampleInputs />,
    path: "./ReactHookForm/ReactHookHormSampleInputs.tsx",
    category: "ReactHookForm",
  },
  {
    id: "SummerTime",
    component: <Tools.SummerTime />,
    path: "./Tools/SummerTime.tsx",
    category: "Tools",
  },
];

const toComponentName = (path: string): string => {
  const fileName = path.split("/").pop() ?? "";
  return fileName.replace(/\.(tsx|ts)$/, "");
};

export const components: ComponentType[] = componentEntries.map((entry) => ({
  ...entry,
  name: toComponentName(entry.path),
}));

export const getComponentById = (id: string): ComponentType | undefined =>
  components.find((component) => component.id === id);

export const categoryLogoMap: Record<ComponentCategory, string> = {
  mui: sharpIcon,
  ReactHookForm: sharpIcon,
  TailwindCSS: sharpIcon,
  Tools: sharpIcon,
};
