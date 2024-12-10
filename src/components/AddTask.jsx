/* eslint-disable react/prop-types */
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { ListTaskContext } from "./TasksContext";

export default function AddTask({ progress }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { taskList, setTaskList, idUnique, setIdUnique } =
    useContext(ListTaskContext);
  const [task, setTask] = useState({
    id: idUnique,
    title: "",
    content: "",
    progress: progress,
  });

  const handleChangeTitle = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleChangeContent = (e) => {
    setTask({ ...task, content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsExpanded(false);
    setTaskList([...taskList, { ...task, id: idUnique }]);
    setTask({ id: idUnique + 1, title: "", content: "", progress: progress });
    setIdUnique(idUnique + 1);
  };

  const handleExpanded = () => setIsExpanded(!isExpanded);

  return isExpanded ? (
    <form
      action=""
      onSubmit={handleSubmit}
      className="dark:text-white bg-blue-100/100 dark:bg-slate-900/100 py-5 px-3 rounded-2xl w-60 text-sm"
    >
      <input
        name="title"
        id="title"
        className="w-52 p-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500"
        placeholder="Title"
        value={task.title}
        onChange={handleChangeTitle}
      />
      <br />
      <textarea
        name="content"
        id="content"
        className="w-52 h-28 p-2 mt-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500"
        placeholder="Content"
        value={task.content}
        onChange={handleChangeContent}
      />
      <br />

      <div>
        <button
          className="p-2 ms-1 rounded-xl bg-slate-800 text-white disabled:opacity-80 mt-2"
          onClick={handleExpanded}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="p-2 ms-1 rounded-xl bg-blue-900 text-white disabled:opacity-80 mt-2"
          disabled={task.title.trim() === ""}
        >
          Add
        </button>
      </div>
    </form>
  ) : (
    <button
      onClick={handleExpanded}
      className=" w-60 bg-blue-400/100 py-2 rounded-xl text-white hover:bg-blue-500 flex justify-center items-center"
    >
      <PlusCircleIcon className="size-6 text-white me-2" /> Add task
    </button>
  );
}
