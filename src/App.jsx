import { useEffect, useState } from "react";
import Column from "./components/Column";
import Navbar from "./components/Navbar";
import { ListTaskProvider } from "./components/TasksContext";

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
      <ListTaskProvider>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 justify-evenly items-start mt-5">
          <Column title="BACKLOG" progress="backlog" />
          <Column title="TODO" progress="todo" />
          <Column title="DOING" progress="doing" />
          <Column title="DONE" progress="done" />
        </div>
      </ListTaskProvider>
    </main>
  );
}

export default App;
