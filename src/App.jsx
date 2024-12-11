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
    <main className="container mx-auto w-full">
      <Navbar theme={theme} handleToogleTheme={handleToogleTheme} />
      <ListTaskProvider>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl: gap-4 place-content-center  items-start mt-5 w-full">
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
