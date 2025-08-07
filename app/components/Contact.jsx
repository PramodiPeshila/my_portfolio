import React , {useState} from 'react'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';

const Contact = () => {

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "50287d61-1e58-4a83-9fbf-ac0963fc8b57");

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
       initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
      id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      
      <motion.h4
         initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
      
      <motion.h2
         initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center  text-5xl font-Ovo">Get in Touch</motion.h2>
      
      <motion.p
         initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">welcome to my portfolio.I offer a range of services to help you achieve your goals.........................................</motion.p>

      <motion.form
         initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-1 sm:grid-cols-2  gap-6 mt-10 mb-8'>
          <motion.input
              initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
            type="text" placeholder='Your Name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  text-gray-900 placeholder-gray-500 hover:bg-lightHover dark:bg-darkTheme dark:border-gray-600 dark:text-white dark:placeholder-gray-400 hover-bg-darkHover' name='name' />

          <motion.input
            initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
            type="email" placeholder='Your Email' required
            className='flex-1 p-3 outline-none border-[0.8px] border-gray rounded-md  text-gray-900 placeholder-gray-500 hover:bg-lightHover dark:bg-darkTheme dark:border-gray-600 dark:text-white dark:placeholder-gray-400 hover-bg-darkHover' name='email'/>
        </div>
        
        <motion.textarea
          initial={{ opacity: 0, y:100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
          rows='6' placeholder='Your Message' required
              className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  text-gray-900 placeholder-gray-500 mb-6 hover:bg-lightHover dark:bg-darkTheme dark:border-gray-600 dark:text-white dark:placeholder-gray-400 hover-bg-darkHover' name='message'></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type='submit'
                  className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/50 text-white rounded-full mx-auto hover:bg-black/80 duration-500 dark:bg-darkTheme dark:border-[0.5px] dark:border-gray-600 hover-bg-darkHover dark:text-white'>Submit Now
                  <Image src={assets.right_arrow_white} alt="" className='w-4' />
              </motion.button>

              <p className='mt-4 text-center text-gray-700 dark:text-gray-300'>{result}</p>
          </motion.form>



    </motion.div>
  )
}

export default Contact


