import ActiveSlider from "./ActiveSlider";

export default function Sponsors() {
  return (
    <div id="sponsor">
      <div className="sponsor flex justify-center ">Sponsor and community</div>
      <ActiveSlider direction="left" />
      <ActiveSlider direction="right" />
    </div>
  );
}
