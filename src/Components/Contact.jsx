import React from 'react';
import './Contact1.css';
import Swal from 'sweetalert2';
import {motion } from 'framer-motion'
const Contact = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "448f2c4f-ea7a-4d67-92b4-044ad750e98d");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Success",
          text: "Message sent successfully",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There was a problem sending your message",
          icon: "error"
        });
      }
    };

    return(
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <motion.h2 
                 whileInView={{opacity: 1,x:0}}
                 initial={{opacity: 0, x: -100}}
                 transition={{duration: 0.5}}
                id='Contact'> Contact Us</motion.h2>
                <div className='input-box'>
                    <label> Full Name </label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' required/>       
                </div>
                <div className='input-box'>
                    <label> Email Address</label>
                    <input type="email" className='field' placeholder='Enter your email' name='email' required/>
                </div>
                <div className='input-box'>
                    <label> Enter your Number</label>
                    <input type="number" className='field mess' placeholder='Enter your number' name='number' required/>
                </div>
                <div className='input-box'>
                    <label> Enter your Message</label>
                    <textarea name="message" className='field mess' placeholder='Enter your message' required></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
