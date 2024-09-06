import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";
import Type from "./Type";
import Window from "./Window";
import Canvaback from "./Canvaback";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Intro() {
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="i-left">
              <div className="flex items-center">
                <div className="i-left-wrapper">
                  <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
                    >
                      Hello 👋
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
                    >
                      I'm Manish Kumar - Curious
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.6 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
                    >
                      Designer & Developer
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.8 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
                    >
                      based in Uttrakhand, India.
                    </motion.h1>
                  </div>
                </div>

                <Window />
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
