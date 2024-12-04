import { useEffect, useState } from "react";
import ListTask from "./components/ListTask";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="lg:container mx-auto w-full">
      <Navbar theme={theme} handleToogleTheme={handleToogleTheme} />
      <ListTask />
    </main>
  );
}

export default App;
