import React from "react";
import Layout from "./Layout";
import Project from "./Project";
import Slick from "./Slick";

const Projectcontent = () =>{

    const projects = [
        {
          title: 'Online Food Order Website | MERN',
          description: 'Create a dynamic MERN stack online food ordering website that seamlessly connects users with their favorite local restaurants. Empower customers to browse diverse menus, place orders, and track deliveries effortlessly. Enhance user experience with real-time updates and secure payment options, revolutionizing the way people savor their favorite meals.',
          image: '/Assets/Card/food.png',
          url : 'https://manish-gwap.vercel.app/',
        },
        
        {
          title: 'Portfolio | React',
          description: 'Build a Portfolio in react js , which so case my hand on experience , projects and Links of my social.',
          image: '/Assets/Card/resume.png',
          url : 'https://full-nu.vercel.app/'
        },
        {
          title: 'Book Exchnage website | React',
          description: 'Build a website where Some one can exchnage their book',
          image: '/Assets/Card/book.png',
          url : '/'
        },
        {
          title: 'Face Recognisation Attendance System | Machine Learning | Python',
          description: 'Build a website where Some one can exchnage their book',
          image: '/Assets/Card/face.png',
          url : '/'
        },
        
      ];
    return (
        <>
        <Layout>
        <h2 className="text-2xl font-bold mb-8 pl-12">Project.</h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center items-center py-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
        

        <Slick/>
        </Layout>
        </>
    );
}

export default Projectcontent;