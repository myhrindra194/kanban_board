import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

/* eslint-disable react/prop-types */
export default function TaskCard({ task, handleDelete, handleEdit }) {
  return (
    <div className="w-60 p-2 mb-2 dark:bg-slate-900/100 rounded-xl outline-none hover:ring-2 ring-blue-500 dark:text-white  bg-blue-100/100 flex justify-between items-center group">
      <p className="indent-4">{task}</p>
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
  );
}
