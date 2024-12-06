import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className="marquee w-full mt-20 py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]  "
      >
        <div className="border-t-2  overflow-hidden border-b-2 border-zinc-300 flex  whitespace-nowrap">
          <motion.h1
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='text-[24rem] pr-20 font-bold leading-none  font-["Founders_Grotesk_X_Condensed"] uppercase  pt-[2rem]  -mb-[5rem]  '
          >
            we are orhi
          </motion.h1>
          <motion.h1
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className='text-[24rem] pr-20 font-bold leading-none  font-["Founders_Grotesk_X_Condensed"] uppercase pt-[2rem]   '
          >
            we are orhi
          </motion.h1>
        </div>
      </div>
    </>
  );
};  

export default Marquee;
