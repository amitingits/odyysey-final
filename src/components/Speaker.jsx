import SpeakerComponent from "./SpeakerComponent.jsx";
import speakersData from "./speakerData.js";

export default function Speakers() {
  return (
    <div id="speaker" className="flex justify-center items-center px-20">
      <div className=" w-full">
        <h1 className="speakerTitle text-6xl mb-10 text-center">SPEAKER</h1>
        <div className="flex flex-wrap justify-center align-middle lg:gap-[300px] md:gap-5 gap-5">
          {speakersData.map((speaker, index) => (
            <SpeakerComponent
              id={index}
              key={index}
              backgroundShape={speaker.backgroundShape}
              personImage={speaker.personImage}
              personName={speaker.personName}
              designation={speaker.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
