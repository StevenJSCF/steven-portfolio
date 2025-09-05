"use client";
import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Hamburger for mobile */}
          <div className="flex flex-1 justify-between items-center md:justify-center">
            <button
              className="md:hidden text-cyan-400 focus:outline-none"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Desktop Nav */}
            <div
              className={`hidden md:flex space-x-8${open ? " md:hidden" : ""}`}
            >
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
        {/* Mobile Nav Dropdown */}
        {open && (
          <div className="md:hidden bg-gray-900/95 border-t border-gray-800 px-6 pb-4 pt-2 flex flex-col space-y-4 animate-fade-in-down">
            <a
              href="#home"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors font-bold"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white transition-colors font-bold"
              onClick={() => setOpen(false)}
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors font-bold"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors font-bold"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
