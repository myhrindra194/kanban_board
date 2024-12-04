import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function ListTask() {
  const [taskList, setTaskList] = useState(
    window.localStorage.getItem("myList")
      ? JSON.parse(window.localStorage.getItem("myList"))
      : []
  );

  useEffect(() => {
    const tasks = JSON.parse(window.localStorage.getItem("myList"));
    if (tasks) setTaskList(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(taskList));
  }, [taskList]);

  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  return (
    <div className="w-max bg-blue-200 dark:border-none border dark:bg-slate-800/100 p-5 max-h-96 rounded-2xl mt-5">
      <h3 className="dark:text-white mb-3 font-semibold">TODO</h3>
      {taskList.length > 0 &&
        taskList.map((task) => (
          <TaskCard key={taskList.indexOf(task)} task={task} />
        ))}
      <form action="" onSubmit={handleSubmit}>
        <input
          name="task"
          id="task"
          className="w-60 p-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500 dark:text-white indent-4"
          placeholder="Add task"
          value={task}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
