import React, { useEffect, useState } from "react";
import glimpse1 from '../assets/glimpse1.svg'
import glimpse2 from '../assets/glimpse2.svg'
import glimpse3 from '../assets/glimpse3.svg'
import glimpse5 from '../assets/glimpse5.svg'
import glimpse6 from '../assets/glimpse6.svg'

const Glimpse = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1060);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1060);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <>
      { isMobile ? (
        <div id="glimpses" className="glimpsePage">
        <h1 className="glimpseTitle text-5xl">Glimpses</h1>
        <div className="grid-item item4">
            <h1 className="middleHeading bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent text-center">
              AI ODYSSEY 2024
            </h1>
        </div>
        <div className="grid-container">
          <div className="grid-item item1"><img className="w-full h-full object-cover " src={glimpse6} alt="" /></div>
          <div className="grid-item item2"><img className="w-full h-full object-cover " src={glimpse2} alt="" /></div>
          <div className="grid-item item3"><img className="w-full h-full object-cover " src={glimpse1} alt="" /></div>         
          <div className="grid-item item5"><img className="w-full h-full object-cover " src={glimpse5} alt="" /></div>
          <div className="grid-item item6"><img className="w-full h-full object-cover " src={glimpse3} alt="" /></div>
        </div>
      </div>
      ) :
      (<div id="glimpses" className="glimpsePage">
        <h1 className="glimpseTitle text-6xl">Glimpses</h1>
        <div className="grid-container">
          <div className="grid-item item1"><img className="w-full h-full object-cover" src={glimpse1} alt="" /></div>
          <div className="grid-item item2"><img className="w-full h-full object-cover " src={glimpse2} alt="" /></div>
          <div className="grid-item item3"><img className="w-full h-full object-cover" src={glimpse3} alt="" /></div>
          <div className="grid-item item4">
            <h1 className="middleHeading text-5xl bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent text-center">
              AI ODYSSEY 2024
            </h1>
          </div>
          <div className="grid-item item5"><img className="w-full h-full object-cover" src={glimpse5} alt="" /></div>
          <div className="grid-item item6"><img className="w-full h-full object-cover" src={glimpse6} alt="" /></div>
        </div>
      </div>
      )
      
      
       
    }
    
    </>
  );
};

export default Glimpse;