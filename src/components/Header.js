// import React from "react";
// import { Link } from "react-router-dom";
// import { SiBuymeacoffee } from "react-icons/si";
// import { Link as ScrollLink } from "react-scroll";

// function Header() {
//   return (
//     <header className="pb-6 bg-white lg:pb-0">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <nav className="flex items-center justify-between h-16 lg:h-20">
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex ">
//               <SiBuymeacoffee className="w-8 h-8" />

//               <h5
//                 className="text-xl font-bold"
//                 style={{
//                   fontFamily: "'Caveat', cursive",
//                   fontWeight: 900,
//                   fontStyle: "normal",
//                   color: "black",
//                   fontSize: "36px",
//                 }}
//               >
//                 Manish Kumar.
//               </h5>
//             </Link>
//           </div>

//           <button
//             type="button"
//             className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
//           >
//             <svg
//               className="block w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 8h16M4 16h16"
//               />
//             </svg>
//           </button>

//           <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
//             <ScrollLink
//               to="about"
//               smooth={true}
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//             >
//               About
//             </ScrollLink>
//             <ScrollLink
//               to="work"
//               smooth={true}
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//             >
//               Work
//             </ScrollLink>
//             <ScrollLink
//               to="education"
//               smooth={true}
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//             >
//               Education
//             </ScrollLink>
//             <Link
//               to="/project"
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//             >
//               Project
//             </Link>

//             <Link
//               to="/resume"
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
//             >
//               Resume
//             </Link>

//             <Link
//               to="/contact"
//               className="items-center justify-center hidden px-4 py-3  text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded"
//             >
//               Contact
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiBuymeacoffee } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

export default function NavbarBasic() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link to="/" className="flex ">
              <SiBuymeacoffee className="w-8 h-8" />

              <h5
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 900,
                  fontStyle: "normal",
                  color: "black",
                  fontSize: "36px",
                }}
              >
                Manish Kumar.
              </h5>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <ScrollLink
                  to="about"
                  smooth={true}
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  About
                </ScrollLink>
              </li>
              <li role="none" className="flex items-stretch">
                <ScrollLink
                  to="work"
                  smooth={true}
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  Work
                </ScrollLink>
              </li>
              <li role="none" className="flex items-stretch">
                <ScrollLink
                  to="education"
                  smooth={true}
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  Education
                </ScrollLink>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  to="/project"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  Project
                </Link>
              </li>

              <li role="none" className="flex items-stretch">
                <Link
                  to="/resume"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  Resume
                </Link>
              </li>

              <li role="none" className="flex items-stretch">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  );
}
