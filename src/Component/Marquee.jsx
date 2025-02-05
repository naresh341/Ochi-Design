import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className="marquee w-full lg:mt-20 mt-[-15rem] lg:py-20 py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]  "
      >
        <div className="border-t-2  overflow-hidden border-b-2 border-zinc-300 flex  whitespace-nowrap">
          <motion.h1
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='lg:text-[24rem] text-[10rem] pr-20 font-bold leading-none  font-["Founders_Grotesk_X_Condensed"] uppercase  pt-[2rem]  -mb-[5rem]  '
          >
            we are orhi
          </motion.h1>
          <motion.h1
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='lg:text-[24rem] pr-20  text-[10rem] font-bold leading-none  font-["Founders_Grotesk_X_Condensed"] uppercase pt-[2rem] '
          >
            we are orhi
          </motion.h1>
        </div>
      </div>
    </>
  );
};  

export default Marquee;
