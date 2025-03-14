import oddessylogo from "../assets/white-logo.svg";
export default function Navbar() {
  return (
    <section className="m-2 p-2 flex justify-between items-center h-[71px] ">
      <div className=" logo  ">
        <img src={oddessylogo} alt="Ai-Odyssey" className=" h-[71px] " />
      </div>
      <div className="flex justify-center navbar items-center bg-gradient-to-br from-blue-500 via-[#1c1c1c] to-[#2c2c2c]">
        <ul class="navbar-menu flex align-center">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#sponsor">Partners & Sponsors</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
