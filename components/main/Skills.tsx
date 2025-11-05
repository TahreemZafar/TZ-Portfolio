import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/cosnstants'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillText from '../sub/SkillText'

function Skills() {
  return (
    <div 
      id='skills'
      className='flex flex-col items-center z-40 justify-center pb-80 gap-3 h-full relative overflex-hidden py-20 '
      style={{ transform: "scale(0.9)" }}
       >

         <SkillText />

        <div className='flex flex-row flex-wrap justify-around mt-4 gap-5 items-center '>
            { 
               Frontend_skill.map((img, index) => (
                   <SkillsDataProvider 
                       key={index}
                       src={img.Image}
                       width={img.width}
                       height={img.height}
                       index={index}
                   />
               ))
            }
        </div>

        <div className='flex flex-row flex-wrap justify-around mt-4 gap-5 items-center '>
            { 
               Backend_skill.map((img, index) => (
                   <SkillsDataProvider 
                       key={index}
                       src={img.Image}
                       width={img.width}
                       height={img.height}
                       index={index}
                   />
               ))
            }
        </div>

        <div className='flex flex-row flex-wrap justify-around mt-4 gap-5 items-center '>
            { 
               Full_stack.map((img, index) => (
                   <SkillsDataProvider 
                       key={index}
                       src={img.Image}
                       width={img.width}
                       height={img.height}
                       index={index}
                   />
               ))
            }
        </div>

        <div className='flex flex-row flex-wrap justify-around mt-4 gap-5 items-center '>
            { 
               Other_skill.map((img, index) => (
                   <SkillsDataProvider 
                       key={index}
                       src={img.Image}
                       width={img.width}
                       height={img.height}
                       index={index}
                   />
               ))
            }
        </div>


        <div className='w-full h-full absolute'>
            <div className=' w-full h-full z-[-10] opacity-30 absolute
             flex items-center justify-center bg-cover '>
                <video 
                   className='w-full h-auto '
                   preload='false'
                   loop
                   playsInline
                   muted
                   autoPlay
                   src='/cards-video.webm'
                />
            </div>
        </div>




    </div>
  )
}

export default Skills