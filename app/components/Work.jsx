import { assets , workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className="w-full px-[12%] py-10 scroll-mt-20">
      
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-2 text-lg font-Ovo text-black dark:text-white">My Portfolio</motion.h4>
      
      <motion.h2
         initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center  text-5xl font-Ovo text-black dark:text-white">My Latest work</motion.h2>
      
      {/* <motion.p
        
         initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-black dark:text-white">welcome to my portfolio.I offer a range of services to help you achieve your goals.........................................</motion.p> */}
          
          
      <motion.div
         initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5 dark:text-black' >
              {workData.map((project, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className='border border-gray-400 rounded-xl overflow-hidden hover-shadow-black cursor-pointer hover-bg-lightHover hover:translate-y-1 duration-500 hover-bg-darkHover hover-shadow-white bg-white/5 hover:bg-white/10'>
                  
                  {/* Project Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div 
                      className='w-full h-full bg-no-repeat bg-cover bg-center'
                      style={{ backgroundImage: `url(${project.bgImage})` }}
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-600 leading-6 dark:text-white/80 mb-4">{project.description}</p>
                    
                    {/* Technology Cards */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies && project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/10 dark:bg-white/20 text-gray-700 dark:text-white rounded-full border border-gray-300 dark:border-white/30 hover:bg-white/20 dark:hover:bg-white/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 text-white">
                      Explore Project <Image src={assets.right_arrow_white} alt="" className='w-4'/>
                    </a>
                  </div>
                </motion.div>
              ))}
      </motion.div>

      <motion.a
        
         initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="" className='w-max flex items-center gap-2 justify-center text-white border-[0.5px] border-white rounded-full py-3 px-10 mx-auto my-20 hover-bg-darkHover duration-500'>
      View More on Github<Image src={assets.right_arrow_bold_dark} alt='right arrow' className='w-4' />
              </motion.a>
      
    </motion.div>
  )
}

export default Work
