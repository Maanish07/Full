import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaCircleArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between text-black">
        <div className="">
          <p className="px-4 py-6 sm:px-10 sm:py-8 md:px-20 md:py-10">
            Made With ❤ by Manish Kumar
          </p>
        </div>
        <div className="fixed bottom-0 right-0 z-10">
          <ScrollLink
            to="header"
            smooth={true}
            aria-haspopup="false"
            className="flex items-center text-black gap-2 py-4 transition-colors duration-300 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          >
            <FaCircleArrowUp className="w-10 h-10" />
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
