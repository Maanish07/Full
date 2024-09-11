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
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        {" "}
        {/* Added px-4 for mobile padding */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="i-left">
              <div className="flex flex-col lg:flex-row items-center">
                {" "}
                {/* Adjust to column on mobile */}
                <div className="i-left-wrapper">
                  <div className="mt-4 sm:mt-6 lg:mt-12">
                    {" "}
                    {/* Adjusted top margin for mobile */}
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 md:p-3 lg:p-4" // Reduced text sizes and padding
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
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      I'm Manish Kumar - Curious
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.6 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      Designer & Developer
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.8 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-1 sm:p-2 md:p-3 lg:p-4"
                      style={{
                        color: "#3c81f7",
                      }}
                    >
                      <Type strings={typingStrings} />
                    </motion.h1>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  {" "}
                  {/* Add margin-top on mobile */}
                  <Window />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 lg:mt-12">
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
