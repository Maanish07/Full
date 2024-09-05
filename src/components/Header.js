import React from "react";
import { Link } from "react-router-dom";
import { SiBuymeacoffee } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <SiBuymeacoffee className="w-8 h-8" />

              <h5
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 900,
                  fontStyle: "normal",
                  color: "black",
                }}
              >
                Manish Kumar.
              </h5>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <ScrollLink
              to="about"
              smooth={true}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="work"
              smooth={true}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Work
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Education
            </ScrollLink>
            <Link
              to="/project"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Project
            </Link>

            <Link
              to="/resume"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Resume
            </Link>

            <Link
              to="/contact"
              className="items-center justify-center hidden px-4 py-3  text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
