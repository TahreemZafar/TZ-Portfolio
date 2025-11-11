"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

function Encryption() {
  return (
    <div className=" flex flex-row relative justify-center items-center p-60 md:p-64 lg:min-h-screen w-full h-full z-20 ">
      <div className=" absolute top-0 w-auto h-auto z-[5] ">
        <motion.div
          variants={slideInFromTop}
          className=" text-[30px] sm:text-[35px] lg:text-[40px] font-medium text-center text-gray-200 "
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-cyan-500">
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className=" flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto ">
        <div className=" flex flex-col items-center group cursor-pointer w-auto h-auto ">

          <Image
            src="/LockTop.png"
            alt="lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11  "
          />

          <Image
            src="/LockMain.png"
            alt="lock main"
            width={70}
            height={70}
            className=" z-10 "
          />

        </div>

          <div className=" Welcome-box px-[20px] py-[7px] z-[20] border my-[20px] border-[#7042f88b] opacitt-[0.9] " >
             <h1 className=" Welcome-text text-[13px] " >Encryption</h1>
          </div>

      </div>


        <div className=" absolute z-[20] bottom-[10px] px-[5px] " >
      <div className=" cursive text-[20px] font-medium text-center text-gray-300 ">
         Secure your data with end-to-end Encryption.
      </div>
      </div>



       <div className=" w-full flex items-start justify-center absolute ">
          <video 
             loop 
             autoPlay
             muted
             playsInline
             preload="false"
             className=" w-full h-auto "
             src="/encryption.webm"
          />
       </div>



    </div>
  );
}

export default Encryption;
