import { assets } from '@/assets/assets'
// import useState from 'react'
import Image from "next/image";
import { useState } from 'react';
import { motion } from "motion/react"
const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8dd7c62a-c230-4530-8523-d7ca440e451e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")]'>
        <motion.h4 
         initial={{y:-20,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.5,delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'>Connect wiht me</motion.h4>
       <motion.h2 
        initial={{y:-20,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{duration:0.5,delay:0.5}}
       className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

       <motion.p 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.7}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to heat from you! If you have any questions, comments,
            or feedback, please use the form below.
       </motion.p>

       <motion.form 
        initial={{opacity:0}}
               whileInView={{opacity:1}}
               transition={{duration:0.5,delay:0.9}}
       onSubmit={onSubmit} className='max-w-2xl mx-auto' action="">
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
            <motion.input 
             initial={{x:-50,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{duration:0.6,delay:1.1}}
            type="text" placeholder='Enter your name' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-mdbg-white' name='name' />
             <motion.input
             initial={{x:50,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{duration:0.6,delay:1.2}}
             type="email" placeholder='Enter your email' required 
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-mdbg-white' name='email'/>
        </div>
        <motion.textarea
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:1.3}}
        name="message" id="" rows='6' placeholder='Enter your message' required 
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 
        rounded-md bg-white mb-6'></motion.textarea>
        <motion.button 
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        type='submit' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
        mx-auto hover:bg-black duration-500'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/> </motion.button>
       </motion.form>

       <p className='mt-4'>{result}</p>
    </motion.div>
  )
}

export default Contact
