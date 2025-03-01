import React, { useEffect,useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    // useEffect(()=>{

    //     window.addEventListener("mousemove",(e)=>{
    //         //  TO IDNETITY THE VALUE OF X AND Y AXIS
    //         const mouseX=e.clientX
    //         const mouseY=e.clientY
    //             // TO GET THE CENTER POINT OF TYHE PAGE 
    //         const deltaX=mouseX-window.innerWidth/2
    //         const deltaY=mouseY-window.innerHeight/2
    //             //  TO GET THE RADIAN VALUES INTO DEGREE
    //         const angle=Math.atan2(deltaY,deltaX) * (180/Math.PI)
    //         // ADDED -180  DEGREE TO ROTATE IT IN INVERT
    //         setRotate(angle-180)    
    //     })
    // })
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
          };
          window.addEventListener('mousemove', handleMouseMove);
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
        }
      }, []);
  return (
    <>
    <div className='w-full z-10 relative h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6" className=' relative w-full h-full   bg-center bg-red-500 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute  flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='lg:h-[13rem] h-[8rem] w-[8rem] lg:w-[13rem] bg-zinc-100 rounded-full flex items-center justify-center' >
                    <div className='lg:h-[9rem] h-[5rem] w-[5rem] lg:w-[9rem] rounded-full bg-[#212121] relative'>
                        <div style={{transform:`translate(-50%,-50%)  rotate(${rotate}deg)`}} className= ' line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2rem]  '>
                            <div className='lg:w-[2rem] lg:h-[2rem]
                             w-[1.5rem] h-[1.5rem] bg-white rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='lg:h-[13rem] h-[8rem] w-[8rem] lg:w-[13rem] bg-zinc-100 rounded-full flex items-center justify-center' >
                <div className='lg:h-[9rem] lg:w-[9rem]  h-[5rem] w-[5rem] rounded-full bg-[#212121] relative'>
                        <div style={{transform:`translate(-50%,-50%)   rotate(${rotate}deg)` }} className=' line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full lg:h-[2rem] '>
                            <div className='lg:w-[2rem] lg:h-[2rem]
                            w-[1.5rem] h-[1.5rem] bg-white rounded-full'></div>
                        </div>
                    </div>
                </div>
                </div>

        </div>
    </div>
    </>
  )
}

export default Eyes