/* eslint-disable react/prop-types */
import { useContext } from "react";
import { filterTasksList } from "../utils/function";
import AddTask from "./AddTask";
import Task from "./Task";
import { ListTaskContext } from "./TasksContext";

export default function Column({ title, progress }) {
  const { taskList } = useContext(ListTaskContext);

  const filteredTasks = filterTasksList(taskList, progress);

  return (
    <div className="w-72 mb-4 md:mb-0 rounded-2xl dark:border-none border dark:bg-slate-800/100">
      <section className="w-full sticky py-3 ps-5 border-b dark:border-b-slate-500">
        <h3 className="dark:text-white font-semibold">{title}</h3>
      </section>
      <div className="w-max p-5">
        {taskList.length > 0 &&
          filteredTasks.map((task) => <Task key={task.id} task={task} />)}
        <AddTask progress={progress} />
      </div>
    </div>
  );
}
