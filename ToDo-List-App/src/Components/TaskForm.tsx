import { useEffect, useState } from "react";
import { PlusCircleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskFormProps = {
  addtask: (text: string) => void;
  editingTask: Task | null;
};

export default function TaskForm({ addtask, editingTask }: TaskFormProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    } else {
      setText("");
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addtask(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl flex items-center gap-3 px-4 py-3 transition-all"
    >
      <input
        type="text"
        placeholder="✍️ Write your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-transparent px-4 py-2 text-gray-800 dark:text-gray-200 placeholder-gray-400 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-indigo-600 text-white font-medium px-5 py-2 rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition-transform"
      >
        {editingTask ? (
          <>
            <PencilSquareIcon className="h-5 w-5" />
            Update
          </>
        ) : (
          <>
            <PlusCircleIcon className="h-5 w-5" />
            Add
          </>
        )}
      </button>
    </form>
  );
}
