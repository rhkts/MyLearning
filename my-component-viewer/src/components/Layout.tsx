import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeViewer from "./CodeViewer";
import { categoryLogoMap, getComponentById } from "./componentRegistry";

// 表示するコンポーネントの tsx/ts ファイルを取得
const codeFiles = import.meta.glob("./**/*.{tsx,ts}", {
  query: "?raw",
  import: "default",
});

export default function Layout() {
  const { componentId } = useParams();
  const navigate = useNavigate();
  const selectedComponent = componentId ? getComponentById(componentId) : undefined;
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
  const [sourceCode, setSourceCode] = useState<string>("");

  useEffect(() => {
    if (selectedComponent && codeFiles[selectedComponent.path]) {
      codeFiles[selectedComponent.path]().then((code) => {
        setSourceCode(code as string);
      });
    }
  }, [selectedComponent]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-800 px-6 py-5 text-white shadow">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-3 rounded px-2 py-1 hover:bg-gray-700"
        >
          {selectedComponent && (
            <img
              src={categoryLogoMap[selectedComponent.category]}
              alt={`${selectedComponent.category} logo`}
              className="h-8 w-8 object-contain"
            />
          )}
          <span className="text-xl font-bold">
            {selectedComponent ? selectedComponent.name : "my-component-viewer"}
          </span>
        </button>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {selectedComponent ? (
          <div className="rounded-xl border border-gray-300 bg-white p-4 shadow">
            <div className="mb-4 flex border-b">
              <button
                className={`w-1/2 p-2 ${
                  activeTab === "demo"
                    ? "border-b-2 border-blue-500 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("demo")}
                type="button"
              >
                デモ
              </button>
              <button
                className={`w-1/2 p-2 ${
                  activeTab === "code"
                    ? "border-b-2 border-blue-500 font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("code")}
                type="button"
              >
                コード
              </button>
            </div>

            {activeTab === "demo"
              ? selectedComponent.component
              : sourceCode && <CodeViewer code={sourceCode} />}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-300 bg-white p-6 shadow">
            <p className="mb-4 text-gray-600">
              コンポーネントが見つかりませんでした。
            </p>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Homeへ戻る
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
