import React from "react";
import Contactform from "./Contactform";
import { Links } from "./Links";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 ">
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <h2 className="text-2xl font-bold mb-8">Contact.</h2>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 sm:p-3 md:p-4 lg:p-5">
            LET'S WORK
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 sm:p-3 md:p-4 lg:p-5">
            TOGETHER
          </h1>

          <Link to="/contact" title="">
            <button className="relative inline-flex items-center justify-center px-8 py-3 mt-10 text-base font-semibold text-white bg-black rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="z-10">Contact</span>

              {/* Gradient border effect */}
              <span className="absolute inset-0  rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1.5 blur-md"></span>
              <span className="absolute inset-0 rounded  bg-black"></span>
            </button>
          </Link>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Contact;
