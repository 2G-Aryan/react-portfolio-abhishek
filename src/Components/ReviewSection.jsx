import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const ReviewSection = () => {
  const [visibleDiv, setVisibleDiv] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleDiv(visibleDiv === index ? null : index);
  };

  const sections = [
    { id: "TechGuru Inc", text: 'Harsh Patel, CEO of TechGuru Inc :-  App Marketing Hub Agency has been a game-changer for TechGuru Inc. Their strategic approach to app promotion led to a 50% increase in user engagement for our latest application , particularly in SEO and social media, has greatly improved our online visibility' },
    { id:"TrendyTech", text: 'Samantha Lee, Marketing Director at TrendyTech :- "Thanks to  exceptional Instagram growth strategies, our follower count increased by over 5000+ within just a few months. Their ability to create engaging content and execute targeted campaigns has significantly boosted our brand’s presence on social media. Truly impressed with their work!.' },
    { id: "Tech Nova Limited", text: '  Web Development Manager at DigiSolutions:-      "I’ve had the pleasure of working with App Marketing Hub Agency on several website development projects. Their skills in SEO and website optimization are unparalleled. They’ve consistently delivered high-quality, user-friendly websites that rank well on search engines.' },
    { id:" Digital Solutions", text: 'Alex Rodriguez, Founder of Innovate Digital Solutions :-  Marketing Hub Agency is a digital marketing wizard. Their expertise in YouTube monetization helped us achieve over 1,000 monetized videos in record time. Their innovative strategies and attention to detail are second to none. If you want results and creative solutions, App Marketing Hub Agency is the go-to professional.' },
  ];

  return (
    <div  className='border-b border-neutral-900 pb-4'>
      <div className="flex flex-col items-center justify-start min-h-screen space-y-0 px-4 md:px-0">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }} id="Reviews"
          className="mb-10 text-center text-3xl md:text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tighter text-transparent ">
          Reviews
        </motion.h1>

        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className={`w-full max-w-md ${visibleDiv === section.id || index === sections.length - 1 ? '' : 'mb-4'}`}
          >
            <button
              onClick={() => toggleVisibility(section.id)}
              className="w-full bg-black-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
              {visibleDiv === section.id ? 'Close' : `${section.id}`}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                visibleDiv === section.id ? 'h-auto mt-2 p-4' : 'h-0'
              } bg-black border border-gray-300 rounded-md`}
            >
              {visibleDiv === section.id && <p>{section.text}</p>}
            </div>
            
          </div>
          
        ))}
          <div  className='border-b border-neutral-900 pb-20 px-4 md:px-0'>
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-10 text-center text-3xl md:text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tighter text-transparent'
        >
          Get in touch
        </motion.h1>
        
        <div className='text-center tracking-tighter'>
          <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-4 text-sm md:text-base'
          >
            {CONTACT.address}
          </motion.p>
          
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='my-4 text-sm md:text-base'
          >
            {CONTACT.phoneNo}
          </motion.p>
          
          <a href="#Home" id='email' className='text-sm md:text-base'>
            {CONTACT.email}
          </a>
        </div>       
      </div>
    </div>
      </div>
      
    
  );
};

export default ReviewSection;