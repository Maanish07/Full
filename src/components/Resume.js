import React from "react";
import Layout from "./Layout";
import { Links } from "./Links";

const Resume = () => {
  return (
    <>
    <Layout>
    <div className="min-h-screen flex justify-center  p-4">
      <div className="w-full max-w-4xl bg-[#E9EFEC] shadow-md rounded-lg p-8">
        {/* Header Section */}
        <header className="border-b pb-6 mb-6">
          <h1 className="text-4xl font-bold">Manish Kumar</h1>
          <p className="text-gray-600 mt-2">
            React Native || React || NodeJs || NextJs
          </p>
          <p className="text-gray-600 mt-4">
            Highly motivated and skilled Mern Developer with hands-on
            experience in designing and building robust mobile applications and Website.
            Proficient in JavaScript, React and React Native, with a strong
            understanding of modern development frameworks and UI/UX design
            principles...
          </p>
          {/* Social Links */}
          <Links/>
        </header>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="font-bold text-lg">
              React Native & Mern Developer at Pearl Organisation
            </h3>
            <p className="text-gray-600">Oct. 2023 - Present | Full Time</p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>
                Developed Mobile applications using React Native.
              </li>
              <li>Integrated third-party APIs to enhance app features.</li>
            </ul>
          </div>
          
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="font-bold text-lg">
            BTech - Graphic Era Hill University, Dehradun
          </p>
          <p className="text-gray-600">2023 - 2025</p>
          <p className="text-gray-600">
            Focusing on advanced
            mobile development and software engineering.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex justify-around">
            {/* Languages */}
            <div>
              <h3 className="font-bold text-lg">Languages</h3>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Java</li>
                <li>Kotlin</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="font-bold text-lg">Frameworks</h3>
              <ul className="list-disc ml-5 text-gray-600">
                <li>React Native</li>
                <li>Typescript</li>
                <li>Node.js</li>
                <li>Jetpack Compose</li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="font-bold text-lg">Others</h3>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Figma</li>
                <li>Firebase</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default Resume;
