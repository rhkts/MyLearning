import Button from "@mui/material/Button";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      <Button variant="contained" color="primary" className="mt-4">
        MUI Button
      </Button>
    </div>
  );
}

export default App;
