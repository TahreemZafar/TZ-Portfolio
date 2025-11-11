"use client";

import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function HeroContent() {

  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center pl-7 lg:pl-[60px] pr-7 md:pr-0 mt-[140px] w-full z-[20]'
       
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start '>

            <motion.div className='Welcome-box py-[12px] pl-[10px] pr-[22px] border border-[#7042f88b] opacity-[0.9] '
               variants={slideInFromTop}
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                 <h1 className='Welcome-text text-[13px] ' >About Me</h1>
            </motion.div>
 

            <motion.div variants={slideInFromLeft(0.5)}
               className='flex flex-col mt-5 gap-6 text-[30px] sm:text-5xl font-bold text-white w-auto h-auto max-w-[600px] '
            >
                <span>
                Hi! I&apos;m <span className='text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-cyan-500'>Tahreem.<br /> </span>

                {/* <span className='text-3xl' >Your Full Stack Developer.</span> */}
                </span>

            </motion.div>


            <motion.p 
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400  max-w-[600px] '
             >
                I&apos;m a self-taught full-stack developer with over 5 years of experience building scalable, high-performance web applications using React, with a strong focus on Next.js. <br /> I can build everything from simple landing pages to fully dynamic, production-ready apps, bringing clean code and a unique visual touch to every layout I craft. I love turning ideas into responsive, user-friendly interfaces that feel intuitive and look elegant. <br /> <br /> If you&apos;re into frontend magic, smooth transitions, and a sprinkle of ✨flair✨—you&apos;re in the right place.
                  <br /><br />
                  Amazed by the space?
            </motion.p>

           
            <motion.button
          variants={slideInFromLeft(1)}
          className="py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <a href='#skills' > Enjoy More!</a>
         
        </motion.button>

        </div>

          
          <motion.div
             variants={slideInFromRight(0.8)}
             className='w-full hidden md:flex -right-20 h-full items-center justify-center'
          >

             <Image 
                src="/mainIconsdark.svg"
                alt='Working homePage Icons'
                width={650}
                height={650}
             />

          </motion.div>


      

    </motion.div>
  )
}

export default HeroContent