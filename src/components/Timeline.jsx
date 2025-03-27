import React, { useState } from "react";
import day1 from "../assets/day1Timeline.svg";
import day2 from "../assets/day2Timeline.svg";

export default function Timeline() {
  const [isDay1, setIsDay1] = useState(true);

  return (
    <div className="relative max-w-dvw px-4 md:px-8 py-10" id="timeline">
      <div className="speakerTitle flex justify-center text-5xl md:text-6xl mb-15">
        Schedule
      </div>

      <div className="buttonDiv">
        <button
          onClick={() => setIsDay1(true)}
          className={`w-[130px] border text-xl border-white py-[10px] px-[10px] rounded-[50px] bg-gradient-to-r from-[#c6d5ff00] via-[#476cd098] to-[rgba(0,0,0,0.373)]  font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#c6d5ff20] hover:via-[#476cd0b8] hover:to-[rgba(0,0,0,0.473)] hover:scale-105 ${
            !isDay1 ? "opacity-30" : "opacity-80"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setIsDay1(false)}
          className={`w-[130px] border text-xl border-white py-[10px] px-[10px] rounded-[50px] bg-gradient-to-r from-[#c6d5ff00] via-[#476cd098] to-[rgba(0,0,0,0.373)] font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#c6d5ff20] hover:via-[#476cd0b8] hover:to-[rgba(0,0,0,0.473)] hover:scale-105 ${
            isDay1 ? "opacity-30" : "opacity-80"
          }`}
        >
          Day 2
        </button>
      </div>

      {/* Timeline Image */}
      <div className="relative w-full flex justify-center items-center my-8">
        <img
          src={isDay1 ? day1 : day2}
          alt={isDay1 ? "Day 1 Event Schedule" : "Day 2 Event Schedule"}
          className="h-[75dvh] md:h-[90dvh] w-auto max-w-full"
        />
      </div>
    </div>
  );
}
