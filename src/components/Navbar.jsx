import oddessylogo from "../assets/white-logo.svg";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full   z-50 py-4">
      <nav class="flex justify-between items-center px-8">
        <div className=" flex justify-between items-center px-8  ">
          <img src={oddessylogo} alt="Ai-Odyssey" className="h-[71px] " />
        </div>
        <div className="navbar flex justify-between items-center h-13 px-8 bg-[rgba(44,44,44,0.5)]  backdrop-blur-md ">
          <ul class="navbar-menu flex align-center ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#game">Games</a>
            </li>
            <li>
              <a href="#speaker">Speakers</a>
            </li>
            <li>
              <a href="#timeline">Schedule</a>
            </li>
            <li>
              <a href="#sponsor">Partners & Sponsors</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
