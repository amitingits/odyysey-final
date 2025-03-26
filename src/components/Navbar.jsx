import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import oddessylogo from "../assets/white-logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 shadow-lg">
      <nav className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={oddessylogo}
            alt="AI-Odyssey"
            className="h-[50px] md:h-[71px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex">
          <ul className="hidden md:flex space-x-6 text-white h-17 items-center p-4  px-6 text-lg rounded-[60px] bg-[rgba(45,45,45,0.5)] backdrop-blur-md">
            <li>
              <a
                href="#home"
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
            {/* <li>
              <a
                href="#speaker"
                className={`hover:text-[#005ebe] ${
                  activeSection === "speaker" ? "text-[#005ebe]" : ""
                }`}
              >
                Speakers
              </a>
            </li> */}
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
            <li>
              <a
                href="#sponsor"
                className={`hover:text-[#005ebe] ${
                  activeSection === "sponsor" ? "text-[#005ebe]" : ""
                }`}
              >
                Leaderboard
              </a>
            </li>
          </ul>

          <ul className="hidden md:flex space-x-6 text-white h-17 items-center p-4  text-lg rounded-[60px] bg-[rgba(45,45,45,0.5)] register h-13 backdrop-blur-md ml-2 border border-blue-500">
            <li className="hover:text-[#005ebe]">
              <a
                href="https://www.infivent.io/eventdetail/f4963c24-022b-4fe4-b705-193d070005f7"
                className=""
                target="_blank"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[rgba(44,44,44,0.9)] backdrop-blur-md py-4 text-white transition-transform duration-300 ease-in-out transform origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a
              href="#home"
              className={`block py-2 hover:text-[#005ebe] ${
                activeSection === "home" ? "text-[#005ebe]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#game"
              className={`block py-2 hover:text-[#005ebe] ${
                activeSection === "game" ? "text-[#005ebe]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Games
            </a>
          </li>
          {/* <li>
            <a
              href="#speaker"
              className={`block py-2 hover:text-[#005ebe] ${
                activeSection === "speaker" ? "text-[#005ebe]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </a>
          </li> */}
          <li>
            <a
              href="#timeline"
              className={`block py-2 hover:text-[#005ebe] ${
                activeSection === "timeline" ? "text-[#005ebe]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#sponsor"
              className={`block py-2 hover:text-[#005ebe] ${
                activeSection === "sponsor" ? "text-[#005ebe]" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Leaderboard
            </a>
          </li>
          <li>
            <a
              href="https://www.infivent.io/eventdetail/f4963c24-022b-4fe4-b705-193d070005f7"
              target="_blank"
              className="block py-2 hover:text-[#005ebe]"
              onClick={() => setIsOpen(false)}
            >
              Register Here
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
