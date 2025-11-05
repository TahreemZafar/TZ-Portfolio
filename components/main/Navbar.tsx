import { Socials } from "@/cosnstants";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[72px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
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
                 <a href="#projects" className=" cursor-pointer " > Contact me </a>

            </div>
         </div>
     
         
         <div className="flex flex-row gap-5">
             { Socials.map((social) => (
              
                  <a href={"https://github.com/TahreemZafar"} target="_blank">
                 <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={30}
                    height={30}
                    className=""  
                 />
                 </a>
                
             )) }
         </div>


      </div>
    </div>
  );
}

export default Navbar;
