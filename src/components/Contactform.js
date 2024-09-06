import React, { useState } from "react";
import { useRef } from "react";
import form from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Layout from "./Layout";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Contactform() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gxbty9e",
        "template_1fv9wod",
        ref.current,
        "r1bE8LrOH414FbjZ6"
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <Layout>
        <div className="mt-10 text-center">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
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
        </div>

        <div className="flex justify-center mt-10">
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-8 border border-gray-200 rounded-lg shadow-lg bg-white"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                placeholder="Your message here"
                name="message"
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="items-center justify-center hidden px-4 py-3 mt-10 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded"
            >
              Submit
            </button>
            {success && (
              <p className="mt-4 text-green-600 font-semibold">
                Thank you for your submission!
              </p>
            )}
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Contactform;
