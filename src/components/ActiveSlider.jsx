import Marquee from "react-fast-marquee";
import img1 from "../assets/SpaceCity1.jpeg";
import img2 from "../assets/SpaceCity2.jpeg";
import img3 from "../assets/SpaceCity3.jpeg";
import img4 from "../assets/SpaceCity4.jpeg";
import img5 from "../assets/SpaceCity7.jpeg";
import img6 from "../assets/SpaceCity6.jpeg";
import img7 from "../assets/SpaceCity7.jpeg";

export default function ActiveSlider({ direction }) {
  return (
    <>
      <Marquee className="sponsor" play={true} speed={50} direction={direction}>
        <div className="w-[214px] h-[137px]  p-5 m-1">
          <img src={img1} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px]  p-4 m-1">
          <img src={img2} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img3} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img4} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img5} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img6} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img7} alt="" className="rounded-[10px]" />
        </div>
      </Marquee>
    </>
  );
}
