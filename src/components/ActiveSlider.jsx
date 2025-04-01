import Marquee from "react-fast-marquee";
import img1 from "../assets/decode.svg";
import img2 from "../assets/ieeeCS.svg";
import img4 from "../assets/mlNagpur.svg";
import img5 from "../assets/openbox.svg";
import img6 from "../assets/infivent.svg";
import img7 from "../assets/vibes-kitchen.jpeg";
import img8 from "../assets/s2p.jpg";

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
          <img src={img4} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img5} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img6} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img2} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img7} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-[214px] h-[137px] p-5 m-1">
          <img src={img8} alt="" className="rounded-[10px]" />
        </div>
      </Marquee>
    </>
  );
}
