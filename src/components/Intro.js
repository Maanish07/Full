import React from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";
import Type from "./Type";
import Window from "./Window";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Intro() {
  const typingStrings = [
    "React js",
    "React Native",
    "Node js",
    "Express js",
    "Mongo DB",
  ];

  return (
    <>
      <div id="intro" className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        {" "}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="i-left">
              <div className="flex flex-col lg:flex-row items-center">
                {" "}
                <div className="i-left-wrapper">
                  <div className="mt-4 sm:mt-6 lg:mt-12n text-center sm:text-left">
                    {" "}
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      Hello{" "}
                      <motion.span
                        className="inline-block"
                        animate={{ rotate: [0, 20, -10, 20, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        👋
                      </motion.span>
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      <span>I'm Manish Kumar - Curious</span>
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.6 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      Designer & Developer
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.8 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4 "
                      style={{
                        color: "#69ccce",
                      }}
                    >
                      <Type strings={typingStrings} />
                    </motion.h1>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  {" "}
                  <Window />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 lg:mt-12 flex justify-center sm:justify-start">
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
