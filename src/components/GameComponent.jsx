import { Link } from "react-router";
import { useEffect, useState } from "react";
import triangleForLink from "../assets/triangleForLink.svg";
import Rectangle from "../assets/Rectangle.svg";

export default function GameComponent({ id, title, description, link, image }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        // mobile component
        <div className="gamesContainer flex flex-col gap-3">
          <div
            className={`gamesContentDiv ${
              id % 2 === 0 ? "gamesContentReverseFlex" : ""
            }`}
          >
            <h2 className="gameTitle bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent text-center">
              {title}
            </h2>
            <div className="image-text-div flex flex-col gap-6 lg:gap-10">
              <div className="gameImageDiv">
                <img src={image} alt="Game" />
              </div>

              <div className="text-link-div">
                <p
                  className={`line-clamp-3 ${
                    expanded ? "line-clamp-none" : ""
                  }`}
                >
                  {description}
                </p>
                <div className="lg:hidden md:hidden readMoreButton">
                  <button onClick={() => setExpanded(!expanded)}>
                    Read {expanded ? "Less" : "More"}
                  </button>
                </div>
                <Link
                  to={link}
                  className="flex items-center align-middle ruleBookLink border border-blue-500 rounded-[60px] h-13  justify-center"
                >
                  <div className="text-lg lg:text-[17px]   ">
                    View Rule Book
                  </div>
                  {/* <img src={triangleForLink} alt="Link Icon" /> */}
                </Link>
              </div>
            </div>
          </div>
          {/* <img className="randomShapeImage" src={randomShapeImage} alt="Shape" /> */}
        </div>
      ) : (
        //Desktop component
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
              <p
                className={`line-clamp-3 ${expanded ? "line-clamp-none" : ""}`}
              >
                {description}
              </p>
              <div className="lg:hidden md:hidden">
                <button onClick={() => setExpanded(!expanded)}>
                  Read {expanded ? "Less" : "More"}
                </button>
              </div>
              <Link to={link} className="flex items-center align-middle">
                <span className="hidden md:flex space-x-6 text-white h-13 items-center p-4  text-lg rounded-[60px] bg-[rgba(45,45,45,0.5)] register h-13 transform hover:scale-110 hover:text-[#ffffff] transition-all duration-200   border border-blue-500 ">
                  <p> View Rule Book</p>
                  <img src={triangleForLink} alt="Link Icon" className="" />
                </span>
              </Link>
            </div>
          </div>
          {/* <img className="randomShapeImage" src={randomShapeImage} alt="Shape" /> */}
        </div>
      )}
    </>
  );
}
