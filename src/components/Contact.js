import React from "react";
import Contactform from "./Contactform";
import { Links } from "./Links";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div id="about" className="max-w-7xl mx-auto ">
        <div className="mt-15 mb-15 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl font-bold">Contact.</h1>
          <div className="mt-5">
            <h1 className="text-8xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5 mob:w-full">
              LET'S WORK
            </h1>
            <h1 className="text-8xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-1 tablet:p-2 w-full laptop:w-4/5 mob:w-full">
              TOGETHER
            </h1>

            <Link
              to="/contact"
              title=""
              class="items-center justify-center hidden px-4 py-3  mt-10 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded"
              role="button"
            >
              {" "}
              Contact{" "}
            </Link>
          </div>
          <Links />
        </div>
      </div>
    </>
  );
}

export default Contact;
