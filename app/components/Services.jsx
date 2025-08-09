import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0 }}
      whileInView={{opacity: 1  }}
      transition={{ duration: 1 }}
      id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      
      <motion.h4
        initial={{opacity:0 , y: -20 }}
      whileInView={{opacity: 1 ,y:0  }}
        transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-2 text-lg font-Ovo">what I Published</motion.h4>
      
      <motion.h2
        initial={{opacity:0 , y: -20 }}
      whileInView={{opacity: 1 ,y:0  }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center  text-5xl font-Ovo">My Articles </motion.h2>
      
      {/* <motion.p
        initial={{opacity:0  }}
      whileInView={{opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I offer a range of services to help you achieve your goals.........................................</motion.p> */}

      <motion.div
        initial={{opacity:0  }}
      whileInView={{opacity: 1  }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 max-w-2xl mx-auto'>
              {serviceData.map(({ icon, title, description, link }, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  
                  key={index} className='border border-gray-400 rounded-xl overflow-hidden hover-shadow-black cursor-pointer hover-bg-lightHover hover:translate-y-1 duration-500 hover-bg-darkHover hover-shadow-white bg-white/5 hover:bg-white/10'>
                      {/* Article Image */}
                      <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                          <Image src={icon} alt={title} className='w-full h-full object-cover' />
                      </div>
                      
                      {/* Article Content */}
                      <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-3">{title}</h3>
                          <p className="text-sm text-gray-600 leading-6 dark:text-white/80 mb-6">{description}</p>
                          <a href={link} className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300">
                              Read Article <Image src={assets.right_arrow_bold_dark} alt="" className='w-4'/>
                          </a>
                      </div>
                  </motion.div>

              ))}
          </motion.div>

    </motion.div>
  )
}

export default Services