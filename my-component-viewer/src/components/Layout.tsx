// src/components/Layout.tsx
import { useState } from "react";
import TailwindCard from "./TailwindCSS/TailwindCard";
import TailwindButton from "./TailwindCSS/TailwindButton";
import TailwindDialog from "./mui/MuiDialog";
import MuiButton from "./mui/MuiButton";

type ComponentType = {
  id: string;
  name: string;
  component: JSX.Element;
};

// 仮のコンポーネントリスト
const components: ComponentType[] = [
  { id: "MuiButton", name: "MuiButton", component: <MuiButton /> },
  {
    id: "TailwindDialog",
    name: "TailwindDialog",
    component: <TailwindDialog />,
  },
  {
    id: "Tailwindbutton",
    name: "TailwindButton",
    component: <TailwindButton />,
  },
  { id: "TailwindCard", name: "TailwindCard", component: <TailwindCard /> },
];

export default function Layout() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">コンポーネント一覧</h2>
        <ul>
          {components.map((comp) => (
            <li
              key={comp.id}
              className={`cursor-pointer p-2 rounded ${
                selectedComponent === comp.id
                  ? "bg-blue-500"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setSelectedComponent(comp.id)}
            >
              {comp.name}
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
              <p className="text-gray-600">
                {
                  components.find(
                    (component) => component.id === selectedComponent
                  )?.component
                }
              </p>
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
