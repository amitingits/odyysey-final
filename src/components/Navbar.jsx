import { useState } from "react";
import { Menu, X } from "lucide-react";
import oddessylogo from "../assets/white-logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(44,44,44,0.5)] backdrop-blur-md py-4 shadow-lg">
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
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li>
            <a href="#" className="hover:text-amber-300">
              Home
            </a>
          </li>
          <li>
            <a href="#game" className="hover:text-amber-300">
              Games
            </a>
          </li>
          <li>
            <a href="#speaker" className="hover:text-amber-300">
              Speakers
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:text-amber-300">
              Schedule
            </a>
          </li>
          <li>
            <a href="#sponsor" className="hover:text-amber-300">
              Partners & Sponsors
            </a>
          </li>
        </ul>

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
              href="#"
              className="block py-2 hover:text-amber-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#game"
              className="block py-2 hover:text-amber-300"
              onClick={() => setIsOpen(false)}
            >
              Games
            </a>
          </li>
          <li>
            <a
              href="#speaker"
              className="block py-2 hover:text-amber-300"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="block py-2 hover:text-amber-300"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#sponsor"
              className="block py-2 hover:text-amber-300"
              onClick={() => setIsOpen(false)}
            >
              Partners & Sponsors
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
