import { CheckCircleIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskPendingProps = {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
};

export default function TaskPending({
  tasks,
  toggleTaskCompletion,
  deleteTask,
  editTask,
}: TaskPendingProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-black-500 italic text-center py-5">
        No pending tasks 🚀
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-white dark:bg-gray-800 px-5 py-4 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
        >
          {/* Task Text */}
          <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
            {task.text}
          </span>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className="flex items-center gap-1 bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 shadow-sm transition"
            >
              <CheckCircleIcon className="h-5 w-5" />
              Done
            </button>

            <button
              onClick={() => editTask(task)}
              className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-600 shadow-sm transition"
            >
              <PencilSquareIcon className="h-5 w-5" />
              Edit
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 shadow-sm transition"
            >
              <TrashIcon className="h-5 w-5" />
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
