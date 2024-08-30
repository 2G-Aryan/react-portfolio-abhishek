import React from 'react'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram} from 'react-icons/fa6'
import {  FaWhatsapp } from 'react-icons/fa'
import { MdOutgoingMail } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa6'
import { animate, motion } from 'framer-motion'


const iconVarients = (duration) => ({
  initial:{ y: -10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Follow us on</motion.h1>
      <motion.div
      whileInView={{opacity:1 , x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVarients(2.5)}
        initial="initail"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <a href="https://wa.me/919082802998"><FaWhatsapp  size="23" className='text-7x1 text-green-500' /></a>
        </motion.div>
      
        <motion.div 
         variants={iconVarients(5)}
         initial="initail"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <a href="https://www.instagram.com/app_growth_hub?igsh=MTFjdDdqbXRrbHhtcQ=="><FaInstagram   size="23" className='text-7x1 text-pink-500' /></a>
        </motion.div>
        <motion.div 
         variants={iconVarients(2)}
         initial="initail"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <a href="#email"><MdOutgoingMail   size="23"  className='text-7x1 text-blue-400' /></a>
        </motion.div>
        <motion.div 
         variants={iconVarients(6)}
         initial="initail"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
         <a href='https://www.facebook.com/profile.php?id=61558543806635&mibextid=ZbWKwL'> <FaFacebook  size="23"  className='text-7x1 bg-white text-blue-900' /></a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology
