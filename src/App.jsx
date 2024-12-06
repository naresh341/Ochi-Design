
import React, { useLayoutEffect } from 'react';
import Navbar from "./Component/Navbar";
import Landingpage from "./Component/Landingpage";
import Marquee from "./Component/Marquee";
import About from "./Component/About"
import Eyes from "./Component/Eyes"
import Cards from './Component/Cards';
import Fcards from "./Component/Fcards"
import Footer from './Component/Footer';

import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useLayoutEffect(() => {
    const container = document.querySelector('[data-scroll-container]');
    if (container) {
      new LocomotiveScroll({
        el: container,
        smooth: true,
        getDirection: true,
      });
    }
  }, []);
  

  return (
    <div className="w-full bg-zinc-900 text-white m-h-screen" data-scroll-container>
      <Navbar></Navbar>
      <Landingpage></Landingpage>
     <Marquee></Marquee>
      <About />
      <Eyes />
      <Cards />
      <Fcards />
      <Footer />
    </div>
  );
}

export default App;