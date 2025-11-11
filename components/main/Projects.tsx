import React from 'react'
import ProjectCard from '../sub/ProjectCard';
import { SparklesIcon } from '@heroicons/react/24/solid';

function Projects() {
  return (
    <div id='projects' className='flex z-30 flex-col items-center justify-center mt-10 py-20 ' >

      <div className='Welcome-box py-[12px] -mb-16 pl-[10px] pr-[22px] border border-[#7042f88b] opacity-[0.9] '   
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                 <h1 className='Welcome-text text-[13px] ' > Visit my Git repo for more projects.</h1>
            </div>

        <h1 className=' text-[30px] sm:text-[37px] lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ' >My Projects</h1>

           

        <div className=' h-full w-full grid lg:grid-cols-3 md:w-full md:grid-cols-2 grid-col-1 gap-x-5 gap-y-9  lg:gap-6 px-10  '>
        <ProjectCard
          src="/s.png"
          href='https://tz-bugbook.vercel.app/'
          title="BugBook Social Media"
          desc="A Complete Full-Stack Social Media App With Next.js 15 (React Query, Lucia Auth, TypeScript, Tailwind, Infinite scrolling, Like, Comment, Posts, Bookmarks, Hashtag, Notification ) and real time messaging features with Theme, Optimistic Updates and many more"
        />
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
          desc="Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth
"
        />

        <ProjectCard
          src="/x.jpeg"
          href='https://tz-trello.netlify.app/'
          title="Trello Dashboard"
          desc=" React Admin Dashboard | Charts, Calendar, Tables and Kanban Trello board Todo App"
        />

        <ProjectCard
          src="/v.png"
          href='https://tz-qrispy.netlify.app/'
          title="Qrispy"
          desc="Landing Restaurant Website UI Design Using Bootstrap 5"
        />

      </div>
    </div>
  );
};

export default Projects;