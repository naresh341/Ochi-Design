import React from 'react'

function About() {
  return (
    <>
    <div className='w-full z-10 relative lg:p-20 text-black bg-[#CDEA68] lg:rounded-tr-[1.5rem] rounded-tr-[1rem] lg:rounded-tl-[1.5rem] rounded-tl-[1rem]'>
       <div className='lg:text-[4rem] text-[3rem]  font-neue-montreal leading-[4rem] tracking-tight' >
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
       </div>
        <div className='border-t-2 pt-5 flex gap-5 border-[#99AD53] mt-16 '>
          <div className='lg:w-1/2 '>
            <h1 className='lg:text-[3rem] text-[1.5rem] px-2 font-medium'>Our Approach:</h1>
            <button className='text-white uppercase flex  gap-6 items-center lg:py-7 lg:px-7  bg-black rounded-full mt-5 lg:w-[12rem] text-xs px-2 p-3 lg:h-[3rem]'>Read More

            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-full  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover  lg:h-[70vh] h-[35vh] bg-center mr-2   rounded-3xl' >
          </div>

        </div>
    </div>
    </>
  )
}

export default About