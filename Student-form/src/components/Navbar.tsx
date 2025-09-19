type NavbarProps = {
  theme: string;
  toggle: () => void;
};

function Navbar({ theme, toggle }: NavbarProps) {
  return (
    <nav
      className={`border-gray-200 ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Student App
          </span>
        </a>

        {/* Menu Items */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg 
              md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
              ${
                theme === "light"
                  ? "border-gray-100 bg-gray-50 md:bg-white"
                  : "border-gray-700 bg-gray-800 md:bg-gray-900"
              }`}
          >
            {["Home", "About", "Services", "Pricing", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded-sm md:p-0 ${
                      theme === "light"
                        ? index === 0
                          ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                          : "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700"
                        : index === 0
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-500"
                        : "text-white hover:bg-gray-700 md:hover:text-blue-500"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={toggle}
            className={`px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
              theme === "light"
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-gray-600"
            }`}
          >
            {theme === "light" ? "🌙" : "☀"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
