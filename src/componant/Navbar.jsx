import React from "react";

function Navbar({ scrollToSection, activeSection }) {
  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav
      className="bg-white text-gray-700 font-bold text-xl px-6 py-7 
    shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="flex justify-between items-center">
        {/* Left side — Name */}
        <div
          className="text-2xl ml-6 hover:text-black cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Abhishek Rajput
        </div>

        {/* Right side — Navigation links */}
        <ul className="flex space-x-10 mr-10">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className={`hover:text-black cursor-pointer capitalize ${
                activeSection === item
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
