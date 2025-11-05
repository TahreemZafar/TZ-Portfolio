"use client";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { motion } from 'framer-motion';

function SkillText() {
  return (
    <div className=' w-full h-auto flex flex-col items-center justify-center ' >

          <motion.div className='Welcome-box py-[12px] pl-[10px] pr-[22px] border border-[#7042f88b] opacity-[0.9] '
               variants={slideInFromTop}
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                 <h1 className='Welcome-text text-[13px] ' > My Core Stack is Next js.</h1>
            </motion.div>

           
           <motion.div 
              variants={slideInFromLeft(0.5)}
              className='text-[30px] text-white font-medium mt-8 text-center mb-[15px] '
           >
               Making sites with modern technologies
           </motion.div>


           <motion.div
              variants={slideInFromRight(0.5)}
              className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center '
           >
             Never miss a task, deadline or a idea
           </motion.div>

 
    </div>
  )
}

export default SkillText