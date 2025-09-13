import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-green-600">
          Welcome to Quran Says 🌿
        </h1>
      </div>
    </>
  );
}
