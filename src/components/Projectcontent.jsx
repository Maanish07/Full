import React from "react";
import Layout from "./Layout";
import Project from "./Project";
import Slick from "./Slick";
import { IoIosLink } from "react-icons/io";


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
        {
          title: 'Neat & Clean | MERN',
          description: 'Create a dynamic, user-friendly MERN stack website that connects users with household services such as cleaning and mopping. Allow customers to easily browse a variety of services and book assistance seamlessly. Enhance the user experience with real-time updates and secure payment options, revolutionizing the way people manage their household tasks with convenience and comfort.',
          image: '/Assets/Card/clean.png',
          url : 'https://neat-clean.vercel.app/'
        },
        
      ];
      const ProjectShopo = [
        {
          Name : 'Vip Clothing',
          url : 'https://vipinners.com/'
        },
        {
          Name : 'Guvit Jeweller',
          url : 'https://www.guvit.co.in/'
        },
        {
          Name : 'HeadGen.ai',
          url : 'https://headgen.ai'
        },
        {
          Name : 'The Bridge Store',
          url : 'https://thebridgestore.in/'
        },
        {
          Name : 'Miraluxury',
          url : 'https://miraluxury.in'
        }
      ]
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
        
        <section className="mb-6 pl-12">
              <h2 className="text-2xl font-bold mb-4">Project Worked Upon</h2>
              <div className="mb-6">
                
              <h3 className="font-bold text-lg">
              As a Backend developer
                </h3>
              <ul className="list-disc ml-5 text-gray-600">
  {ProjectShopo.map((project, index) => (
    <li key={index} className="flex items-center">
      <a href={project.url} className="flex items-center">
        <IoIosLink className="mr-2" /> 
        <span>{project.Name}</span>
      </a>
    </li>
  ))}
</ul>

              </div>
            </section>

        <Slick/>
        </Layout>
        </>
    );
}

export default Projectcontent;