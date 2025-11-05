import React from 'react'
import ProjectCard from '../sub/ProjectCard';

function Projects() {
  return (
    <div id='projects' className='flex z-30 flex-col items-center justify-center py-20 ' >

        <h1 className=' text-[37px] lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ' >My Projects</h1>

        <div className=' h-full w-full flex flex-col gap-5 md:flex-row lg:gap-6 px-10 md:grid-rows-2 md:flex-wrap lg:flex-nowrap '>
        <ProjectCard
          src="/1.png"
          href='https://tz-tiktok.vercel.app/'
          title="Tiktok Clone"
          desc="Full Stack Tiktok Clone with Next js, TypeScript, zustand, App Write, tailwind CSS and deployed on Vercel"
        />
        <ProjectCard
          src="/5.png"
          href='https://tz-ricardo.vercel.app/'
          title="Ricardo Portfolio"
          desc=" Next js portfolio website with dark theme and Framer Motion, TypeScript, tailwind css and email "
        />
        <ProjectCard
          src="/3.png"
          href='https://tz-airbnb.vercel.app/'
          title="Airbnb Clone"
          desc="Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023
"
        />
      </div>
    </div>
  );
};

export default Projects;