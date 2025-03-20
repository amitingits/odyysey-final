/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import day1 from "../assets/day1.png";
import day2 from "../assets/day2.png";

export default function Timeline() {
  const [isDay1, setIsDay1] = useState(true);

  return (
    <div className="relative max-w-dvw px-4 md:px-8 py-10" id="timeline">
      <div className="speakerTitle flex justify-center text-6xl">
        Schedule
      </div>

      <div className="buttonDiv">
        <button className="day">Day 1</button>
        <button className="day">Day 2</button>
      </div>

      {/* Timeline Image */}
      <div className="relative w-full flex justify-center items-center my-8">
        <img
          src={day1}
          alt="Day 1 Event Schedule"
          className="h-[75dvh] md:h-[90dvh] w-auto max-w-full"
        />
      </div>
    </div>
  );
}
