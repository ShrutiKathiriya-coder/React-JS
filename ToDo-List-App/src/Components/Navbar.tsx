import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 shadow-lg ${
          darkMode ? "bg-gray-900" : "bg-indigo-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo  */}
            <h1
              className={`text-2xl sm:text-3xl font-bold ${
                darkMode ? "text-yellow-400" : "text-white"
              }`}
            >
              ✨ To-Do List
            </h1>

            
            <div className="flex items-center space-x-4">
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-indigo-500 transition-colors"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-white" />
                )}
              </button>

              {/* Add Task */}
              <button className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                Add Task
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16" />
    </>
  );
}
