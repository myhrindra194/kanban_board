import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { ListTaskContext } from "./TasksContext";

/* eslint-disable react/prop-types */
export default function TaskCard({ task }) {
  const { taskList, setTaskList } = useContext(ListTaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = taskList.map((item) =>
      item.id === task.id ? newTask : item
    );
    setTaskList(newList);
    setNewTask(task);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const newTasks = taskList.filter((item) => item != task);
    setTaskList(newTasks);
  };

  const updateTaskProgress = (newProgress) => {
    const updatedTask = { ...task, progress: newProgress };
    const newList = taskList.map((item) =>
      item.id === task.id ? updatedTask : item
    );
    setTaskList(newList);
  };

  return (
    <>
      {isEditing ? (
        <form
          action=""
          onSubmit={handleSubmit}
          className="dark:text-white bg-blue-100/100 dark:bg-slate-500/100 py-5 px-3 rounded-2xl w-60 text-sm mb-4"
        >
          <input
            name="title"
            id="title"
            type="text"
            className="w-52 p-2 mb-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500 dark:text-white"
            defaultValue={task.title}
            onChange={(e) => setNewTask({ ...task, title: e.target.value })}
          />
          <br />
          <textarea
            name="content"
            id="content"
            type="text"
            className="w-52 h-28 p-2 mb-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500 dark:text-white"
            defaultValue={task.content}
            onChange={(e) => setNewTask({ ...task, content: e.target.value })}
          />
          <div>
            <button
              className="p-2 ms-1 rounded-xl bg-slate-800 text-white disabled:opacity-80 mt-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ms-2 p-2 rounded-xl bg-blue-900 text-white disabled:opacity-80"
            >
              Edit
            </button>
          </div>
        </form>
      ) : (
        <div className="w-60 py-3 px-4 mb-4 dark:bg-slate-900/100 rounded-xl outline-blue-400 hover:ring-2 ring-blue-500 dark:text-white  bg-blue-100/100 group">
          <div className="flex justify-between items-center">
            <p>{task.title}</p>
            <div className="flex gap-1">
              <PencilIcon
                className="size-4 group-hover:block hidden cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
              <TrashIcon
                className="size-4 group-hover:block hidden cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            {task.content}
          </p>

          <div className="flex gap-2 dark:text-black mt-5">
            {task.progress != "todo" && (
              <button
                className="px-2 bg-red-300/100 rounded-2xl hover:bg-red-400"
                onClick={() => updateTaskProgress("todo")}
              >
                <small>Todo</small>
              </button>
            )}
            {task.progress != "doing" && (
              <button
                className="px-2 bg-yellow-200/100 rounded-2xl hover:bg-yellow-400"
                onClick={() => updateTaskProgress("doing")}
              >
                <small>Doing</small>
              </button>
            )}
            {task.progress != "done" && (
              <button
                className="px-2 bg-green-300/100 rounded-2xl hover:bg-green-400"
                onClick={() => updateTaskProgress("done")}
              >
                <small>Done</small>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
