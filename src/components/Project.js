import React from 'react'
import Layout from './Layout'
import { FaLink } from "react-icons/fa6";
import Slick from "./Slick";


export default function Project (){
    return (
        <>
        <Layout>

        
  
 
<div id="work" className="mt-10 max-w-7xl mx-auto  px-1">
      <h2 className="text-2xl font-bold mb-8">Project.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-2xl font-semibold mb-4">Online Food Order Website | MERN</h3>
          <p><FaLink /></p>
          <p className="text-gray-600">
          Create a dynamic MERN stack online food ordering website that seamlessly connects users with their favorite local restaurants. Empower customers to browse diverse menus, place orders, and track deliveries effortlessly. Enhance user experience with real-time updates and secure payment options, revolutionizing the way people savor their favorite meals.

          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">Face Recognition Attendance System | Python</h3>
          <p className="text-gray-600">
          Developed an application that can mark attendance using face recognition. Built using Python machine learning, with data stored in CSV files.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">To-Do App | React, JavaScript</h3>
          <p className="text-gray-600">
          Developed a To-Do application allowing users to set goals, complete tasks, and delete them.
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">
          Book Exchange | HTML, CSS, JavaScript, React
          </h3>
          <p className="text-gray-600">
          Created a book exchange site using HTML, CSS, JavaScript, and React.
          </p>
        </div>
        
      </div>
    </div>
    <Slick/>
</Layout>
        </>
    )
}