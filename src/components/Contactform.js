import React, { useState } from "react";
import { useRef } from "react";
import form from "react";
import emailjs from "@emailjs/browser";

import Layout from "./Layout";

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
  <h1 className="text-5xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl p-4 tablet:p-6 w-full laptop:w-4/5 mob:w-full">
    Hello 👋
  </h1>
</div>

<div className="flex justify-center mt-10">
  <form ref={ref} onSubmit={handleSubmit} className="w-full max-w-lg p-8 border border-gray-200 rounded-lg shadow-lg bg-white">
    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
    <div className="mb-4">
      <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        id="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
      <input
        type="email"
        placeholder="abc@gmail.com"
        name="email"
        id="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
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
    {success && <p className="mt-4 text-green-600 font-semibold">Thank you for your submission!</p>}
  </form>
</div>

      </Layout>
    </>
  );
}

export default Contactform;
