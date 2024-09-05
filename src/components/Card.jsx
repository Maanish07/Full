import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="relative w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
