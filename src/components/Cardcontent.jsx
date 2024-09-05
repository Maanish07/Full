import React from "react";
import Card from './Card';

const Cardcontent = () =>{
    const cards = [
        {
          title: 'Leet Code',
          description: 'Leetcode Profile Showcase my problem solving skill.',
          image: '/Assets/Card/leetcode.png',
        },
        {
          title: 'Git hub',
          description: 'Leetcode Profile Showcase my projects.',
          image: '/Assets/Card/github.png',
        },
        {
          title: 'Next.js Commerce',
          description: 'An all-in-one eCommerce solution for performance.',
          image: '/images/commerce.png',
        },
      ];
    
      return (
        <div className="flex space-x-6 justify-center items-center py-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      );
};

export default Cardcontent;