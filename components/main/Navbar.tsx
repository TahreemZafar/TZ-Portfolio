import { Socials } from "@/cosnstants";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-[72px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg md:backdrop-blur-md z-50 px-0 md:px-3 lg:px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center "
        >
          <Image
            src="/NavLogo.png"
            alt="space logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin "
          />

          <span className="font-bold  lg:ml-[3px] md:hidden lg:block text-gray-100 " >TZ Developer</span>
        </a>

         <div className="w-[500px] hidden md:flex h-full flex-row items-center justify-center md:mr-20 ">
            <div className="flex items-center justify-around gap-4 border
             border-[#e4e0f161] w-10/12 h-[70%] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">

                 <a href="#about-me" className=" cursor-pointer " > About me </a>
                 <a href="#skills" className=" cursor-pointer " > Skills </a>
                 <a href="#projects" className=" cursor-pointer " > Projects </a>
                 <a href="#contact" className=" cursor-pointer " > Contact me </a>

            </div>
         </div>
     
         
         <div className="flex flex-row gap-4 items-center justify-center ">
             { Socials.map((social,i) => (
              <Fragment key={i} >
                  <Link href={"https://github.com/TahreemZafar"} target="_blank">
                 <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={30}
                    height={30}
                    className=""  
                 />
                 </Link>

                 <Link href="https://www.linkedin.com/in/tahreem-zafar-346676323/" >
                   <FaLinkedin size={30} color="white" />
                 </Link>
                 </Fragment>
                
             )) }
         </div>


      </div>
    </div>
  );
}

export default Navbar;
