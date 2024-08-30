// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons from lucide-react (or you can use any other icon library)
import logo from '../assets/—Pngtree—symbolic significance smart logo solutions_15379534.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black-900 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
        <img src={logo} alt="Logo" className="h-12" /> 
        </div>
        
        <div id="Home" className="hidden md:flex space-x-6">
          <a href="#Reviews" className="text-white hover:text-gray-400">Reviews</a>
          <a href="#About" className="text-white hover:text-gray-400">About</a>
          <a href="#Services" className="text-white hover:text-gray-400">Services</a>
          <a href="#Contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
       <div className="md:hidden mt-2 space-y-2">
       <a href="#Reviews" className="block text-white hover:text-gray-400">Reviews</a>
       <a href="#About" className="block text-white hover:text-gray-400">About</a>
       <a href="#Services" className="block text-white hover:text-gray-400">Services</a>
       <a href="#Contact" className="block text-blue-500 hover:bg-blue-700 hover:text-white py-2 px-4 rounded border border-blue-500">Contact</a>
     </div>
     
      )}
    </nav>
  );
};

export default Navbar;
