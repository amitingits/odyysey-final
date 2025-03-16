import { Link } from "react-router";
import { useState } from "react";
import triangleForLink from "../assets/triangleForLink.svg";
import Rectangle from "../assets/Rectangle.svg";

export default function GameComponent({
  id,
  title,
  description,
  link,
  randomShapeImage,
  image,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="gamesContainer flex flex-col gap-3">
        <div
          className={`gamesContentDiv ${
            id % 2 === 0 ? "gamesContentReverseFlex" : ""
          }`}
        >
          <div className="gameImageDiv">
            <img src={image} alt="Game" />
          </div>
          <div className="gameTextContent flex flex-col gap-6 lg:gap-10">
            <h2 className="gameTitle bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent text-center">
              {title}
            </h2>
            <p className={`line-clamp-3 ${expanded ? "line-clamp-none" : ""}`}>
              {description}
            </p>
            <div className="lg:hidden md:hidden">
              <button onClick={() => setExpanded(!expanded)}>
                Read {expanded ? "Less" : "More"}
              </button>
            </div>
            <Link to={link} className="flex items-center align-middle">
              <div className="text-lg lg:text-[17px]">View Rule Book</div>
              <img src={triangleForLink} alt="Link Icon" />
            </Link>
          </div>
        </div>
        <img className="randomShapeImage" src={randomShapeImage} alt="Shape" />
      </div>
    </>
  );
}
