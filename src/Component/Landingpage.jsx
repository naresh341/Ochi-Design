import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.5 "  className="w-full h-screen  bg-zinc-900 text-white pt-1 ">
        <div className="lg:mt-48 lg:px-20 mt-28 px-20">
          {["we create", "eye opening", "presentation"].map((item, index) => {
            return (
              <div key={index} className="masker ">
                <div className="w-full flex items-end overflow-hidden ">
                  {index == 1 && (
                    <motion.div
                      key={99}
                      initial={{ width: 0 }}
                      animate={{ width: "12rem" }}
                      transition={{ ease: [0.65, 0, 0.35, 1], duration: 2 }}
                      className=" mr-[1rem] lg:w-[11rem] h-[5.7rem]  relative lg:-top-[2.5rem] rounded-md bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover"
                    ></motion.div>
                  )}
                  <h1 className='uppercase lg:text-[9.5rem] text-[2.5rem] lg:pt-[2rem] pt-[1rem]  -mb-[-0rem]  font-bold leading-[0.75] font-["Founders_Grotesk_X_Condensed"]'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] border-zinc-700  mt-20 px-4 flex justify-between items-center ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => {
            return (
              <div key={index} className="flex mt-5 lg:p-2  font-light">
                <h1>{item}</h1>
              </div>
            );
          })}
          <div className=" flex items-center gap-3 ">
            <button className="  border-[1px] border-zinc-500 px-5 py-2 rounded-full mt-5 uppercase ">
              Get Started
            </button>
            <div className="w-10 h-10 mt-5 rounded-full border-zinc-500 border-[1px] flex justify-center items-center ">
              <span className="rotate-45">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
