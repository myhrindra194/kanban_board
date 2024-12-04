/* eslint-disable react/prop-types */
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export default function Navbar({ theme, handleToogleTheme }) {
  return (
    <div className="w-full flex justify-between items-center py-2">
      <p className="text-blue-950 dark:text-white max-lg:ms-2 text-2xl max-lg:text-lg font-semibold">
        Todolist
      </p>
      <button
        onClick={handleToogleTheme}
        className="max-lg:me-2 text-blue-500 dark:hover:bg-slate-600/50 hover:bg-slate-200/40 p-2 rounded-full"
      >
        {theme === "dark" ? (
          <SunIcon className="size-6" />
        ) : (
          <MoonIcon className="size-6" />
        )}
      </button>
    </div>
  );
}
