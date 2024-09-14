import React from "react";
import Astro from "./Astro";
import Counterup from "./Counterup";

const Profilecount = () => {
  const profiles = [
    {
      number: 500,  
      description: "DSA Questions on leetcode",
    },
    {
      number: 16,
      description: "Projects Worked Upon",
    },
    {
      number: 250,
      description: "DSA Questions on GFG",
    },
    
  ];

  return (
    <>
    

    <div className="flex flex-wrap items-center justify-center p-4">
  {profiles.map((profile, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 "
    >
      <Counterup
        number={profile.number} 
        description={profile.description}  
      />
    </div>
  ))}
</div>

    </>
  );
};

export default Profilecount;

