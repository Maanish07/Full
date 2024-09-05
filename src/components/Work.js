import React from "react";

const Work = () => {
  return (
    <div id="work" className="mt-10 max-w-7xl mx-auto  px-1">
      <h2 className="text-2xl font-bold mb-8">Work.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-2xl font-semibold mb-4">Mern Development</h3>
          <p className="text-gray-600">
            End-to-end Android app development using Java, Kotlin, and modern
            frameworks.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
          <p className="text-gray-600">
            Crafting intuitive and appealing user interfaces with Figma.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-600">
            Creating responsive and dynamic websites using modern web
            technologies, ensuring a seamless user experience across devices.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">
            React Native Development
          </h3>
          <p className="text-gray-600">
            Cross-platform mobile app development with React Native, delivering
            high-performance apps for both Android and iOS.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">Firebase Solutions</h3>
          <p className="text-gray-600">
            Expertise in Firebase for real-time database management and cloud
            storage.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">API Integration</h3>
          <p className="text-gray-600">
            Seamlessly integrating third-party APIs for enhanced app
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
