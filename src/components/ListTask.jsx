import { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { ListTaskContext } from "./TasksContext";

export default function ListTask() {
  const { taskList, setTaskList, idUnique, setIdUnique } =
    useContext(ListTaskContext);
  const [task, setTask] = useState({ id: idUnique, content: "" });

  const handleChange = (e) => {
    setTask({ ...task, content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask({ id: idUnique + 1, content: "" });
    setIdUnique(idUnique + 1);
  };

  return (
    <div className="w-72 rounded-2xl dark:border-none border dark:bg-slate-800/100 mt-5">
      <section className="w-full sticky py-3 ps-5 border-b dark:border-b-slate-500">
        <h3 className="dark:text-white font-semibold">TODO</h3>
      </section>
      <div className="w-max p-5 max-h-96 overflow-y-scroll">
        {taskList.length > 0 &&
          taskList.map((task) => <TaskCard key={task.id} task={task} />)}
        <form action="" onSubmit={handleSubmit} className="dark:text-white">
          <input
            name="task"
            id="task"
            className="w-48 p-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500 indent-4"
            placeholder="Add task"
            value={task.content}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="p-2 ms-1 rounded-xl bg-blue-900 text-white disabled:opacity-80"
            disabled={task.content.trim() === ""}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
