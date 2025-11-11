import Image from 'next/image';
import React from 'react'


interface Props {
    src: string;
    title: string;
    desc: string;
    href: string;
}


function ProjectCard({ src, title, desc, href }: Props ) {
  return (
   
    <div className=' md:max-lg:w-[320px]  relative overflow-hidden rounded-lg shadow-lg transition-all hover:scale-95  border shadow-[#2A0E61]/50 border-[#2A0E61] ' >
        
         <Image 
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className=' w-full object-contain '

         />

         <div className=' relative p-[22px] pb-4 '>
         <a href={href} target='_blank' >
            <h1 className='text-[22px] cursor-pointer hover:underline font-semibold text-white ' >{ title }</h1>
            <p className='mt-2 text-[15px] text-gray-400 ' >{ desc }</p>
            </a>

         </div>

    </div>
   
  )
}

export default ProjectCard