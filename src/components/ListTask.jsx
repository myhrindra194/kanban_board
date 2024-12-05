import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function ListTask() {
  const [taskList, setTaskList] = useState(
    window.localStorage.getItem("myList")
      ? JSON.parse(window.localStorage.getItem("myList"))
      : []
  );
  const [idUnique, setIdUnique] = useState(
    window.localStorage.getItem("idUnique")
      ? parseInt(localStorage.getItem("idUnique"))
      : 0
  );
  const [task, setTask] = useState({
    id: idUnique,
    content: "",
  });

  useEffect(() => {
    const tasks = JSON.parse(window.localStorage.getItem("myList"));
    if (tasks) setTaskList(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("idUnique", JSON.stringify(idUnique));
  }, [idUnique]);

  const handleChange = (e) => {
    setTask({ ...task, content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask({ id: idUnique + 1, content: "" });
    setIdUnique(idUnique + 1);
  };

  const handleDelete = (id) => {
    const newTasks = taskList.filter((task) => task.id !== id);
    setTaskList(newTasks);
  };

  const handleEdit = (id, newContent) => {
    const newTasks = taskList.map((task, index) => {
      if (index === id) return { ...task, content: newContent };
    });
    setTaskList(newTasks);
  };

  return (
    <div className="w-72 rounded-2xl dark:border-none border dark:bg-slate-800/100 mt-5">
      <section className="w-full sticky py-3 ps-5 border-b dark:border-b-slate-500">
        <h3 className="dark:text-white font-semibold">TODO</h3>
      </section>
      <div className="w-max p-5 max-h-96 overflow-y-scroll">
        {taskList.length > 0 &&
          taskList.map((task) => (
            <TaskCard
              key={task.id}
              task={task.content}
              handleDelete={() => handleDelete(task.id)}
              handleEdit={() => handleEdit(task.id)}
            />
          ))}
        <form action="" onSubmit={handleSubmit}>
          <input
            name="task"
            id="task"
            className="w-60 p-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500 dark:text-white indent-4"
            placeholder="Add task"
            value={task.content}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
