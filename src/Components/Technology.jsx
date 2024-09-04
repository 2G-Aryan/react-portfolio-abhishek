import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
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
      className='my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent'>Follow us on</motion.h1>
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
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGlxztkZNxXhprdKsmbzcfXClQQrRSscnDCPdSDhHNRRrslppZRqjHJHPCnrmTKNCKStg"><MdOutgoingMail   size="23"  className='text-7x1 text-white-400' /></a>
        </motion.div>
        <motion.div 
         variants={iconVarients(2)}
         initial="initail"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
        <a href="https://www.linkedin.com/in/app-growth-hub-0b5b90301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin   size="23"  className='text-7x1 text-blue-400' /></a>
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

