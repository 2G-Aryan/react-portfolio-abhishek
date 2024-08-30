import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import customer from '../assets/customer.jpg'
const reviews = [
  { id: 1, img:  customer, review: 'Jamie Patel, CEO of TechGuru Inc :- ClientWorking with App Marketing Hub Agency has been a game-changer for TechGuru Inc. Their strategic approach to app promotion led to a 50% increase in user engagement for our latest application. The depth of their knowledge in digital marketing, particularly in SEO and social media, has greatly improved our online visibility.' , rating: 5 },
  { id: 2, img:  customer , review: 'Alex Rodriguez, Founder of Innovate Digital Solutions :-  Marketing Hub Agency is a digital marketing wizard. Their expertise in YouTube monetization helped us achieve over 1,000 monetized videos in record time. Their innovative strategies and attention to detail are second to none. If you want results and creative solutions, App Marketing Hub Agency is the go-to professional.', rating: 5 },
  { id: 3, img:  customer , review: 'Emily Carter, Web Development Manager at DigiSolutions:-      "I’ve had the pleasure of working with App Marketing Hub Agency on several website development projects. Their skills in SEO and website optimization are unparalleled. They’ve consistently delivered high-quality, user-friendly websites that rank well on search engines. "', rating: 5 }
 , { id: 4, img:  customer , review: 'Samantha Lee, Marketing Director at TrendyTech :- Client "Thanks to  exceptional Instagram growth strategies, our follower count increased by over 500 within just a few months. Their ability to create engaging content and execute targeted campaigns has significantly boosted our brand’s presence on social media. Truly impressed with their work!"', rating: 5 }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const { img, review, rating } = reviews[currentIndex];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center justify-center">
        <button onClick={prevSlide} className="relative left-0 px-4 py-2 text-white bg-violet-400 rounded-full">
          &#9664;
        </button>
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg">
          <img src={img} alt="Customer" className="w-24 h-24 rounded-full mb-4" />
          <p id="Reviews" className="text-center mb-4">{review}</p>
          <div className="flex">
            {[...Array(rating)].map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.39 7.26L22 9.27l-5.91 4.31L17.18 22 12 17.27 6.82 22l1.09-8.12L2 9.27l7.61-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="relative right-0 px-4 py-2 text-white bg-violet-400 rounded-full">
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Slider;
