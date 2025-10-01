import { ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/24/solid";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskCompleteProps = {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
};

export default function TaskComplete({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: TaskCompleteProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 italic text-center py-5">
        No completed tasks yet 🎉
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-5 py-4 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
        >
          {/* Completed Task  */}
          <span className="line-through text-gray-600 dark:text-gray-400 font-medium text-lg">
            {task.text}
          </span>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-lg hover:bg-yellow-600 shadow-sm transition"
            >
              <ArrowUturnLeftIcon className="h-5 w-5" />
              Undo
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
