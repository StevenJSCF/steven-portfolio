import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex flex-1 justify-center">
            <div className="flex space-x-8">
              <a
                href="#home"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors font-bold"
              >
                About
              </a>
              <a
                href="#education"
                className="text-gray-300 hover:text-white transition-colors font-bold"
              >
                Education
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors font-bold"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors font-bold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
