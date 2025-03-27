import ActiveSlider from "./ActiveSlider";

export default function Sponsors() {
  return (
    <div id="sponsor">
      <div className="sponsor flex justify-center text-5xl md:text-6xl">
        Sponsor and community
      </div>
      <ActiveSlider direction="left" />
      <ActiveSlider direction="right" />
    </div>
  );
}
