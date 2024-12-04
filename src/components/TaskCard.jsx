/* eslint-disable react/prop-types */
export default function TaskCard({ task }) {
  return (
    <div className="w-60 p-2 mb-2 dark:bg-slate-900/100 border border-slate-400/100 rounded-xl outline-none hover:ring-2 ring-blue-500 dark:text-white indent-4 dark:border-none shadow-sm">
      {task}
    </div>
  );
}
