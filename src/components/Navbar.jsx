import oddessylogo from "../assets/white-logo.svg";

export default function Navbar() {
  return (
    <section className="m-2 p-2 flex justify-between items-center ">
      <div className="logo">
        <img src={oddessylogo} alt="Ai-Odyssey" className="h-[71px]" />
      </div>
      <div className="flex justify-center navbar items-center bg-[#FEFEFE]/17 backdrop-blur-[20px] rounded-[60px] shadow-lg lg:px-7 lg:py-4 border border-white/11 lg:gap-6">
        <ul className="navbar-menu flex align-center gap-6">
          <li>
            <a href="#home">Home</a>
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
    </section>
  );
}
