import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import oddessylogo from "../assets/white-logo.svg";
import { useLocation } from "react-router-dom";

export default function Navbar({ setIsAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getIn = () => {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");
    if (username === "admin" && password === "password") {
      setIsAdmin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 shadow-lg">
      <nav className="flex justify-between items-center px-6 md:px-10">
        <div className="flex items-center">
          <img
            src={oddessylogo}
            alt="AI-Odyssey"
            className="h-[50px] md:h-[71px]"
          />
        </div>

        <div className="flex">
          <ul className="hidden md:flex space-x-6 text-white h-17 items-center p-4 px-6 text-lg rounded-[60px] bg-[rgba(45,45,45,0.5)] backdrop-blur-md">
            <li>
              <a
                href="/"
                className={`hover:text-[#005ebe] ${
                  activeSection === "home" ? "text-[#005ebe]" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#game"
                className={`hover:text-[#005ebe] ${
                  activeSection === "game" ? "text-[#005ebe]" : ""
                }`}
              >
                Games
              </a>
            </li>
            <li>
              <a
                href="#speaker"
                className={`hover:text-[#005ebe] ${
                  activeSection === "speaker" ? "text-[#005ebe]" : ""
                }`}
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className={`hover:text-[#005ebe] ${
                  activeSection === "timeline" ? "text-[#005ebe]" : ""
                }`}
              >
                Schedule
              </a>
            </li>
          </ul>

          <ul className="hidden md:flex space-x-6 text-white items-center p-4 text-lg rounded-[60px] bg-[rgba(45,45,45,0.5)] register h-13 backdrop-blur-md ml-2 border border-blue-500">
            <li className="hover:text-[#005ebe]">
              {location.pathname === "/leaderboard" ? (
                <button onClick={() => getIn()}>Check In</button>
              ) : (
                <a
                  href="https://www.infivent.io/eventdetail/f4963c24-022b-4fe4-b705-193d070005f7"
                  target="_blank"
                >
                  Register Now
                </a>
              )}
            </li>
          </ul>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
  );
}
