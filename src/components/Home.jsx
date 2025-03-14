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
    <div className="Home flex h-screen sticky justify-center items-center">
      <img
        src={circleman}
        alt=""
        className="absolute left-0 top-20"
        dragabble={false}
      />
      <img
        src={circleman}
        alt=""
        className="absolute left-0 top-20"
        dragabble={false}
      />
      <img
        src={triangleman}
        alt=""
        className="absolute right-0 top-60"
        dragabble={false}
      />
      <img
        src={balckman}
        alt="balckman"
        className="relative  object-cover bottom-15 w-60"
        draggable={false}
      />

      <img
        src={squareman}
        alt="fuck"
        className="absolute object-cover bottom-55 w-45"
        draggable={false}
      />
      <img
        src={logo}
        alt="logo"
        className="absolute object-contain bottom-55 w-65"
        draggable={false}
      />
      <div className=" absolute timer bottom-30  justify-center">
        <table className="justify-items-center  mx-auto font-bold">
          <tr className="justify-items-center  ">
            <td className=" justify-items-center  text-4xl ">
              {formatNumber(timeLeft.days)}
            </td>
            <td className=" justify-items-center text-4xl ">
              {formatNumber(timeLeft.minutes)}
            </td>
            <td className=" justify-items-center text-4xl ">
              {formatNumber(timeLeft.minutes)}
            </td>
            <td className=" justify-items-center text-4xl ">
              {formatNumber(timeLeft.seconds)}
            </td>
          </tr>
          <tr className="justify-items-center ">
            <td className="justify-center items-center text-l text-center ">
              Day
            </td>
            <td className="justify-center items-center text-l text-center ">
              HRS
            </td>
            <td className="justify-center items-center text-l text-center ">
              MIN
            </td>
            <td className="justify-center items-center text-l text-center ">
              SEC
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
