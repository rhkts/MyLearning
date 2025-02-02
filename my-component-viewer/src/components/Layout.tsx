import { useEffect, useState } from "react";
import * as Mui from "./mui";
import * as TailwindCss from "./TailwindCSS";
import { ComponentType } from "./type";

// 各種コンポーネントのtsxファイルを取得
const codeFiles = import.meta.glob("../components/**/*.{tsx,ts}", {
  query: "?raw",
  import: "default",
});

// コンポーネントリスト
const components: ComponentType[] = [
  {
    id: "MuiButton",
    name: "MuiButton",
    component: <Mui.MuiButton />,
    path: "./mui/MuiButton.tsx",
  },
  {
    id: "MuiDataGridwithUTF8Export",
    name: "MuiDataGridwithUTF8Export",
    component: <Mui.MuiDataGridwithUTF8Export />,
    path: "./mui/MuiDataGridwithUTF8Export.tsx",
  },
  {
    id: "MuiDialog",
    name: "MuiDialog",
    component: <Mui.MuiDialog />,
    path: "./mui/MuiDialog.tsx",
  },
  {
    id: "Tailwindbutton",
    name: "TailwindButton",
    component: <TailwindCss.TailwindButton />,
    path: "./TailwindCSS/TailwindButton.tsx",
  },
  {
    id: "TailwindCard",
    name: "TailwindCard",
    component: <TailwindCss.TailwindCard />,
    path: "./TailwindCSS/TailwindCard.tsx",
  },
];

export default function Layout() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [sourceCode, setSourceCode] = useState<string>("");

  useEffect(() => {
    if (selectedComponent) {
      const component: ComponentType | undefined = components.find(
        (component) => component.id === selectedComponent
      );
      if (component && codeFiles[component.path]) {
        codeFiles[component.path]().then((code) => {
          return setSourceCode(code as string);
        });
      }
    }
  }, [selectedComponent]);

  useEffect(() => {
    console.log(sourceCode);
  }, [sourceCode]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">コンポーネント一覧</h2>
        <ul>
          {components.map((component) => (
            <li
              key={component.id}
              className={`cursor-pointer p-2 rounded ${
                selectedComponent === component.id
                  ? "bg-blue-500"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setSelectedComponent(component.id)}
            >
              {component.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">コンポーネントのデモ</h1>
        <div className="mt-4">
          {selectedComponent ? (
            <div className="p-4 border rounded bg-white shadow">
              <h2 className="text-xl font-semibold mb-2">
                {
                  components.find(
                    (component) => component.id === selectedComponent
                  )?.name
                }
              </h2>

              <div className="flex border-b mb-4">
                <button
                  className={`p-2 w-1/2 ${
                    activeTab === "demo"
                      ? "border-b-2 border-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("demo")}
                >
                  デモ
                </button>
                <button
                  className={`p-2 w-1/2 ${
                    activeTab === "code"
                      ? "border-b-2 border-blue-500 font-bold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("code")}
                >
                  コード
                </button>
              </div>

              {activeTab === "demo"
                ? components.find(
                    (component) => component.id === selectedComponent
                  )?.component
                : sourceCode && <>{sourceCode}</>}
            </div>
          ) : (
            <p className="text-gray-500">
              左のリストからコンポーネントを選択してください。
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
