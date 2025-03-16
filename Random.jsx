import { Link } from "react-router";
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
  return (
    <>
      <div className="gamesContainer">
        <div
          className={`gamesContentDiv ${
            id % 2 != 0 ? "gamesContentReverseFlex" : ""
          }`}
        >
          <div className="gameTitleContainer">
            <h2 className="gameTitle bg-gradient-to-r from-[#C6D5FF] via-[#476BD0] to-[#476BD0] bg-clip-text text-transparent">
              {title}
            </h2>
          </div>

          <div className="image-description-container">
            <p className="gameDescription">{description}</p>
            <div className="gameImageDiv">
              <img src={image} alt="" />
            </div>
          </div>

          <div className="ruleBookDiv">
            <Link to={link} className="">
                          {" "}
                          <span className="text-[17px]">View Rule Book </span>{" "}
                          <img src={triangleForLink} alt="" />
            </Link>
          </div>




        </div>
      </div>
    </>
  );
}
