import React from "react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false)
    return (
        <div   className=" fixed z-[999] w-full lg:px-20 lg:py-8 px-8 py-2 flex justify-between font-neue-montreal  font-light items-center">
        <div className="logo">
        <svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
            fill="currentColor"
          ></path>
          <path
            d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
            fill="currentColor"
          ></path>
          <path
            d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
            fill="currentColor"
          ></path>
          <path
            d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
            fill="currentColor"
          ></path>
          <path
            d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
            fill="currentColor"
          ></path>
        </svg>
            </div>
        <div className="lg:flex lg:gap-5 invisible ">
          {["services", "our work", "about us", "insights","contact us"].map(
            (item, index) => (
              <a
                key={index}
                className={` lg:capitalize lg:text-lg ${index == 4 && "ml-32"}`}
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className=" h-10 w-10 flex flex-col justify-center items-center" onClick={()=>setOpen(true)}>
          <div className="bg-white h-[2px] w-6 mb-1"></div>
          <div className="bg-white h-[2px] w-6 mb-1"></div>
        </div>
            {open &&(

              <div className="w-full h-screen fixed top-0 left-0 text-white  flex flex-col justify-center overflow-auto  bg-zinc-800 ">
          <button className="absolute top-5 right-5 text-3xl inline-block "
          onClick={()=>setOpen(false)}>
            x
          </button>
                <div className="absolute top-7 left-5 ">
            <div className="logo ">
        <svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
            fill="currentColor"
          ></path>
          <path
            d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
            fill="currentColor"
          ></path>
          <path
            d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
            fill="currentColor"
          ></path>
          <path
            d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
            fill="currentColor"
          ></path>
          <path
            d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
            fill="currentColor"
          ></path>
        </svg>
            </div>
            </div>
            <hr  className="bg-white h-[0.5px] w-full absolute top-28 "/>
          <nav className="flex flex-col items-start px-7 absolute top-40  font-founders-grotesk text-6xl uppercase font-semibold tracking-tight">
            <a href="#" className="hover:underline" >services</a>
            <a href="#" className="hover:underline" >our work</a>
            <a href="#" className="hover:underline" >about us</a>
            <a href="#" className="hover:underline" >insights</a>
            <a href="#" className="hover:underline" >Contact US</a>
          </nav>

          <div className="absolute bottom-10 left-5 sapce-y-2">
            <div className="text-lg font-semibold">S:</div>
            <div className="flex space-x-4">
              <div>
                <div>Instagram</div>
                <div>Behance</div>
                <div>Facebook</div>
                <div>linkedin</div>
              </div>
            </div>
            <div className="text-lg font-semibold">L:</div>
            <div>
              <div>202-1965 W 4th Ave</div>
              <div>Vancouver,Canada</div>
              <div> 
                <div>30 Chukarnia St</div>
                <div>Lviv,Ukraine</div>
              </div>
            </div>
            <div className="text-lg font-semibold">E:</div>
            <a href="#">hello@ochi.design</a>
          </div>
        </div>
          )}
    </div>
  );
}

export default Navbar;
