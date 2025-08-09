import { assets, infoList, toolsData } from "@/assets/assets";
import Image from 'next/image';
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
      <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{opacity:0 }}
      whileInView={{opacity: 1  }}
      transition={{ duration: 1 }}
      >
          
          <motion.h4
              initial={{opacity:0 , y: -20 }}
      whileInView={{opacity: 1 , y:0  }}
      transition={{ duration: 0.5 , delay:0.3 }}
              
              className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
          <motion.h2
              initial={{opacity:0 , y: -20 }}
      whileInView={{opacity: 1 , y:0  }}
      transition={{ duration: 0.5 , delay:0.5 }}
              className="text-center  text-5xl font-Ovo">About me</motion.h2>
          

          <motion.div
              initial={{opacity:0 }}
      whileInView={{opacity: 1  }}
      transition={{ duration: 0.8 }}
              
              className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
              <motion.div
                  initial={{opacity:0 , scale: 0.9 }}
                  whileInView={{opacity: 1 , scale: 1 }}
                  transition={{ duration: 0.6}}
                  className="w-64 sm:w-80 rounded-3xl max-w-none">
                  <Image src={assets.profile_img} alt="user" className="w-full rounded-3xl"/>
              </motion.div>

              <motion.div
                  initial={{opacity:0 }}
                    whileInView={{opacity: 1  }}
                    transition={{ duration: 0.6 , delay: 0.8 }}
                  className="flex-1">
                  <p className="mb-10 max-w-2xl font-Ovo">
                      I am a third-year Computer Science undergraduate at UCSC with a strong passion for exploring new
 technologies and applying them to solve real-world challenges. I have hands-on experience in full-stack
 development and am currently seeking an entry-level opportunity to contribute to a dynamic and col
laborative team.</p>
                  
                  <motion.div
                            initial={{opacity:0 }}
                            whileInView={{opacity: 1  }}
                            transition={{ duration: 0.8 , delay: 1 }}
                      className="max-w-4xl">
                      
                      {/* Skills horizontal card */}
                      {infoList.filter(item => item.title === 'Skills').map(({ icon, iconDark, title, description }, index) => (
                          <motion.div 
                              key={index}
                              className="border-[0.5px] border-gray-400 rounded-xl p-6 mb-6 cursor-pointer hover-bg-lightHover hover:translate-y-1 duration-500 hover-shadow-black dark:border-white hover-shadow-white hover-bg-darkHover"
                              whileHover={{ scale: 1.02 }}
                          >
                              <div className="flex items-start gap-4 mb-4">
                                  <Image src={iconDark} alt={title} className="w-7 mt-1" />
                                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                  {description.split(', ').map((skill, skillIndex) => (
                                      <span 
                                          key={skillIndex} 
                                          className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs text-white/90 border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                                      >
                                          {skill.trim()}
                                      </span>
                                  ))}
                              </div>
                          </motion.div>
                      ))}

                      {/* Education and Projects vertical cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {infoList.filter(item => item.title !== 'Skills').map(({ icon, iconDark, title, description }, index) => (
                              <motion.div 
                                  key={index}
                                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover-bg-lightHover hover:translate-y-1 duration-500 hover-shadow-black dark:border-white hover-shadow-white hover-bg-darkHover flex flex-col"
                                  whileHover={{ scale: 1.05 }}
                              >
                                  <Image src={iconDark} alt={title} className="w-7 mt-3" />
                                  <h3 className="my-4 font-semibold text-white">{title}</h3>
                                  <div className="flex-grow">
                                      {title === 'Education' ? (
                                          <div className="text-white/80 text-sm">
                                              {description.split('|').map((line, lineIndex) => (
                                                  <p key={lineIndex} className={lineIndex > 0 ? 'mt-3' : ''}>
                                                      {line.trim()}
                                                  </p>
                                              ))}
                                          </div>
                                      ) : (
                                          <p className="text-white/80 text-sm">{description}</p>
                                      )}
                                  </div>
                                  
                                  {/* Explore More button for Projects card */}
                                  {title === 'Projects' && (
                                      <motion.a
                                          href="https://github.com/PramodiPeshila"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-lg text-xs text-white/90 hover:text-white text-center transition-all duration-300 flex items-center justify-center gap-2"
                                          whileHover={{ scale: 1.05 }}
                                      >
                                          Explore More
                                          <Image src={assets.right_arrow_bold_dark} alt="arrow" className="w-3" />
                                      </motion.a>
                                  )}
                              </motion.div>
                          ))}
                      </div>
                  </motion.div>

                  <motion.h4
                      initial={{opacity:0  , y:20}}
                        whileInView={{opacity: 1 , y:0  }}
                        transition={{ duration: 0.5 , delay: 1.3 }}
                      className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</motion.h4>

                  <motion.ul
                      initial={{opacity:0 }}
                      whileInView={{opacity: 1  }}
                      transition={{ duration: 0.6 , delay: 1.5 }}
                      className="flex items-center gap-3 sm:gap-5">
                      {toolsData.map((tool, index) => (
                          <motion.li
                              whileHover={{scale: 1.1}}
                              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                              key={index} >
                                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                               
                            </motion.li>
                      ))}
                  </motion.ul>

              </motion.div>
          </motion.div>
    </motion.div>
  );
};

export default About;