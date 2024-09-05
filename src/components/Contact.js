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

          <Link
            to="/contact"
            title=""
            className="items-center justify-center px-4 py-3 mt-10 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105"
            role="button"
          >
            Contact
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
