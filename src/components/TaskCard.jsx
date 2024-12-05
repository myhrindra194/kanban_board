import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { ListTaskContext } from "./TasksContext";

/* eslint-disable react/prop-types */
export default function TaskCard({ task }) {
  const { taskList, setTaskList } = useContext(ListTaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => setIsEditing(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({ ...task, content: e.target.value });
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

  return (
    <>
      {isEditing ? (
        <form action="" onSubmit={handleSubmit}>
          <input
            name="taskEdit"
            id="taskEdit"
            type="text"
            className="w-48 p-2 mb-2 dark:bg-slate-900/100 border border-slate-500/100 rounded-xl outline-none focus:ring-2 ring-blue-500 dark:text-white indent-4"
            defaultValue={task.content}
            onChange={(e) => setNewTask({ ...task, content: e.target.value })}
          />
          <button
            type="submit"
            className="ms-2 p-2 rounded-xl bg-blue-900 text-white disabled:opacity-80"
            disabled={newTask.content.trim() === ""}
          >
            Edit
          </button>
        </form>
      ) : (
        <div className="w-60 p-2 mb-2 dark:bg-slate-900/100 rounded-xl outline-blue-400 hover:ring-2 ring-blue-500 dark:text-white  bg-blue-100/100 flex justify-between items-center group">
          <p className="indent-4">{task.content}</p>
          <div className="flex gap-1">
            <PencilIcon
              className="size-4 group-hover:block hidden cursor-pointer"
              onClick={handleEdit}
            />
            <TrashIcon
              className="size-4 group-hover:block hidden cursor-pointer"
              onClick={handleDelete}
            />
          </div>
        </div>
      )}
    </>
  );
}
