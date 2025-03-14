import SpeakerComponent from "./SpeakerComponent.jsx";
import speakersData from "./speakerData.js";

export default function Speakers() {
  return (
    <div id="speaker">
      <h1 className="speakerTitle">SPEAKER</h1>
      <div className="listOfSpeakers">
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
  );
}
