import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full z-20 h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mb-12 ">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[18px] mb-4">Community</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <FaYoutube size={18} />
                        <span className="text-[14px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxGithubLogo size={18} />
                        <span className="text-[14px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxDiscordLogo size={18} />
                        <span className="text-[14px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[18px]  mb-4 ">Social Media</div>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <FaYoutube size={18} />
                        <span className="text-[14px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxGithubLogo size={18} />
                        <span className="text-[14px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                        <RxDiscordLogo size={18} />
                        <span className="text-[14px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[18px]  mb-4 ">About</div>
                   <p className="flex flex-row items-center my-[10px] cursor-pointer">
                     
                        <span className="text-[14px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                      
                        <span className="text-[14px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[10px] cursor-pointer">
                  
                        <span className="text-[14px] ml-[6px]">test@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[25px] text-[15px] text-center">
                &copy; By: Tahreem Zafar,  2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer