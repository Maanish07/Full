import React from "react";
import Card from './Card';

const Cardcontent = () =>{
    const cards = [
        {
          title: 'Leet Code',
          description: 'Leetcode Profile Showcase my problem solving skill.',
          image: '/Assets/Card/leetcode.png',
          url : 'https://leetcode.com/u/Mannu_story07/',
        },
        {
          title: 'Github',
          description: 'Github Profile Showcase my projects.',
          image: '/Assets/Card/github.png',
          url : 'https://github.com/Maanish07'
        },
        {
          title: 'Next.js Commerce',
          description: 'An all-in-one eCommerce solution for performance.',
          image: '/images/commerce.png',
          url : '/'
        },
      ];
    
      return (
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center items-center py-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              url={card.url}
            />
          ))}
        </div>
      );
};

export default Cardcontent;
