import React from 'react'

const Fcards = () => {
  return (

      <div  className='w-full h-screen bg-zinc-800 flex flex-col lg:flex-row items-center gap-10 px-10  '>
        <div className='cardcontainer lg:w-1/2 w-full h-[50vh] '>
            <div className='bg-[#004D43]  h-full relative rounded-xl flex  items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-5 bottom-7 px-5 py-1 border-2 border-[#C2E266] text-[#C2E266] rounded-full'>&copy;2019-2022</button>
            </div>

        </div>
        <div className='cardcontainer lg:w-1/2 w-full h-[50vh] flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-1/2 h-full  relative  bg-[#212121] rounded-xl flex items-center justify-center '>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-5 lg:bottom-7 bottom-0 px-5 py-1 border-2  rounded-full uppercase'>Rating 5.0 on clutch</button>

        </div>
        <div className='lg:w-1/2 mb-5  w-full relative bg-[#212121] rounded-xl flex  items-center justify-center '>
        <img className='bg-cover lg:w-[10rem]   lg:h-[10rem]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-5  lg:bottom-7 bottom-0 px-5 py-1 border-2  rounded-full uppercase'>Business bootcamp alumni</button>

        </div>

        </div>
    </div>
  )
}

export default Fcards