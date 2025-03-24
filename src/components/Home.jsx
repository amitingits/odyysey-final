import balckman from "../assets/blackman.png";
import logo from "../assets/white-logo.svg";
import squareman from "../assets/square-man.svg";
import circleman from "../assets/circle-man.svg";
import triangleman from "../assets/triangle-man.svg";
import { useState, useEffect } from "react";


export default function Home() {
  function formatNumber(num) {
    return String(num).padStart(2, "0");
  }
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetTime = new Date("April 4, 2025 10:30:00").getTime();
  useEffect(() => {
    if (!targetTime) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = targetTime - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div
      className="Home flex h-screen sticky justify-center items-center pt-25"
      id="home"
    >

      <img
        src={circleman}
        alt=""
        className="absolute left-0 top-20"
        dragabble={false}
      />
      <img
        src={circleman}
        alt=""
        className="circleMan absolute left-0 top-20"
        dragabble={false}
      />
      <img
        src={triangleman}
        alt=""
        className="triangleMan absolute right-0 top-60"
        dragabble={false}
      />
      <img
        src={balckman}
        alt="balckman"
        className="relative  object-cover bottom-15 w-60"
        dragabble={false}
      />

      <img
        src={squareman}
        alt="fuck"
        className="absolute object-cover bottom-50 w-45"
        dragabble={false}
      />
  
      <img
        src={logo}
        alt="logo"
        className="absolute object-contain bottom-50 w-130 "
        draggable={false}
      /> 

      <div className="justify-items-center  mx-auto  gap-1 text-white-600 absolute timer bottom-17 justify-center flex">
        <div className="flex-1  flex-col items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[50.4px] justify-center flex">
            {formatNumber(timeLeft.days)}
          </p>
          <p className="text-[20px] justify-center flex">DAYS</p>
        </div>
        <div className="flex items-center justify-center text-5xl">
          <p>:</p>
        </div>
        <div className="flex-1  flex-col items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[50.4px] justify-center flex">
            {formatNumber(timeLeft.hours)}
          </p>
          <p className="text-[20px] justify-center flex">HRS</p>
        </div>
        <div className="flex items-center justify-center text-5xl">
          <p>:</p>
        </div>
        <div className="flex-1  flex-col items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[50.4px] justify-center flex">
            {formatNumber(timeLeft.minutes)}
          </p>
          <p className="text-[20px] justify-center flex">MIN</p>
        </div>
        <div className="flex items-center justify-center text-5xl">
          <p>:</p>
        </div>
        <div className="flex-1  flex-col items-center justify-center">
          <p className="text-xl lg:text-[50.4px] justify-center flex">
            {formatNumber(timeLeft.seconds)}
          </p>
          <p className="text-[20px] justify-center flex">SEC</p>
        </div>
      </div>
    </div>
  );
}
