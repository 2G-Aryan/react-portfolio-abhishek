// Carousel.js
import React, { useState, useEffect } from 'react';

const Carousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [items.length, interval]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              <img src={item.src} alt={item.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)}
            className="bg-gray-800 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)}
            className="bg-gray-800 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
