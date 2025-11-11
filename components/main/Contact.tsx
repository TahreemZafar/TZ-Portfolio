import { SparklesIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div id='contact' className='flex z-30 flex-col items-center justify-center mt-10 py-20' >
        
      <div className='Welcome-box py-[12px] -mb-16 pl-[10px] pr-[22px] border border-[#7042f88b] opacity-[0.9] '   
            >
                <SparklesIcon
                 className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                 <h1 className='Welcome-text text-[13px] ' > Wanna have a talk!</h1>
            </div>

        <h1 className=' text-[30px] sm:text-[37px] lg:text-[40px] font-semibold text-transparent bg-clip-text -mb-4 sm:mb-1 bg-gradient-to-r from-purple-500 to-cyan-500 py-16 ' >Contact me</h1>

             <p className="text-gray-800 mb-6 text-lg -mt-5 dark:text-white/80 mx-4 text-center">
        Please contact me directly at{" "}
        <Link
          className=" underline cursor-pointer font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 py-20  "
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tahreem100m@gmail.com&sub=Regarding&body=message
"
        >
         <span className=' underline ' > tahreem100m@gmail.com. </span>
        </Link>
      </p>

      {/* <form className="mt-10 flex flex-col dark:text-black " action={async (FormData) => {
            const { data, error } = await sendEmail(FormData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success('Email sent Successfully!')

         }
         }>

        <input
          placeholder="Your Email..."
          name="senderEmail"
          maxLength={500}
          type="email"
          required
          className=" p-4 h-14 border border-gray-400 !outline-2 outline-gray-500/70 dark:bg-white/70 dark:focus:bg-white dark:focus:outline dark:outline-  placeholder:text-gray-600 transition-all "
        />
        <textarea
          placeholder="Your Message..."
          name="message"
          maxLength={5000}
          required
          className="h-52 my-3 border p-4 border-gray-400 !outline-2 outline-gray-500/70 dark:bg-white/70  dark:focus:bg-white dark:focus:outline  placeholder:text-gray-600 transition-all "
        />

         {/* <SubmitBtn /> */}
        
      {/* </form>
    </motion.section>
  );
} */} 



      
    </div>
  )
}

export default Contact
