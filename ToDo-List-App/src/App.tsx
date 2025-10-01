import { useState } from "react";
import Navbar from "./Components/Navbar";
import TaskForm from "./Components/TaskForm";
import TaskPending from "./Components/TaskPending";
import TaskComplete from "./Components/TaskComplete";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = (text: string) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id ? { ...t, text } : t
        )
      );
      setEditingTask(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (task: Task) => setEditingTask(task);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-28 px-4 transition-colors duration-500">
        {/* Form Card */}
        <div className="w-full max-w-xl bg-white/90 dark:bg-gray-800/80 backdrop-blur-md shadow-2xl rounded-3xl p-6">
          <TaskForm addtask={addTask} editingTask={editingTask} />
        </div>

        {/* Pending Tasks */}
        <div className="w-full max-w-xl mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-black-100 mb-4">
            ⏳ Pending Tasks
          </h2>
          <TaskPending
            tasks={tasks.filter((t) => !t.completed)}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>

        {/* Completed Tasks */}
        <div className="w-full max-w-xl mt-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-black-100 mb-4">
            ✅ Completed Tasks
          </h2>
          <TaskComplete
            tasks={tasks.filter((t) => t.completed)}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}
