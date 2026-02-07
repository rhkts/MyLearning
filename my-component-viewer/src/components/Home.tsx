import { useNavigate } from "react-router-dom";
import { categoryLogoMap, components } from "./componentRegistry";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-800 px-6 py-5 text-white shadow">
        <h1 className="text-2xl font-bold">my-component-viewer</h1>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {components.map((component) => (
            <button
              key={component.id}
              type="button"
              onClick={() => navigate(`/component/${component.id}`)}
              className="rounded-xl border border-gray-300 bg-white p-4 text-left shadow-sm transition hover:border-blue-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-gray-50">
                <img
                  src={categoryLogoMap[component.category]}
                  alt={`${component.category} logo`}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <p className="text-center text-base font-semibold text-gray-800">
                {component.name}
              </p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
