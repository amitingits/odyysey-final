import timelineImage from "../assets/timeline-1.png";

const timelineEvents = [
  {
    title: "REGISTRATION",
    time: "09:00 AM - 10:00 AM",
    position: "top-[7%] left-[7%] md:left-[36.7%]",
    alignment: "left",
  },
  {
    title: "INAUGURATION / SPEAKER SESSION",
    time: "10:00 AM - 11:00 AM",
    position: "top-[20%] left-[41%] md:left-[46.4%]",
    alignment: "right",
  },
  {
    title: "START OF GAMES",
    time: "11:00 AM - 12:00 PM",
    position: "top-[38%] left-[70%] md:left-[60.2%]",
    alignment: "left",
  },
  {
    title: "BREAK",
    time: "12:00 PM - 12:30 PM",
    position: "top-[49.6%] left-[40%] md:left-[50%]",
    alignment: "bottom",
  },
  {
    title: "HUNTER’S GRID",
    time: "12:30 PM - 01:30 PM",
    position: "top-[42%] left-[5%] md:left-[30%]",
    alignment: "top",
  },
  {
    title: "REAL TRADE MARKET & AI DEVELOP",
    time: "02:00 PM - 03:00 PM",
    position: "top-[69%] left-[10%] md:left-[30%]",
    alignment: "bottom",
  },
  {
    title: "INVENT-O-MANIA",
    time: "03:00 PM - 04:00 PM",
    position: "top-[80%] left-[40%] md:left-[50.2%]",
    alignment: "left",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-dvw px-4 md:px-8 py-10" id="timeline">
      <div className="speakerTitle flex justify-center text-3xl md:text-4xl lg:text-6xl">
        Schedule
      </div>

      {/* Timeline Image */}
      <div className="relative w-full flex justify-center items-center my-8">
        <img
          src={timelineImage}
          alt="Timeline"
          className="h-[75dvh] md:h-[90dvh] w-auto max-w-full"
        />

        {/* Overlayed Text & Nodes */}
        {timelineEvents.map((event, index) => {
          // Determine flex direction based on alignment
          let flexDirection;
          switch (event.alignment) {
            case "left":
              flexDirection =
                "flex-row-reverse items-center space-x-reverse space-x-2";
              break;
            case "right":
              flexDirection = "flex-row items-center space-x-2";
              break;
            case "top":
              flexDirection =
                "flex-col-reverse items-center space-y-reverse space-y-2";
              break;
            case "bottom":
              flexDirection = "flex-col items-center space-y-2";
              break;
            default:
              flexDirection = "flex-col items-center";
          }

          return (
            <div
              key={index}
              className={`absolute flex ${flexDirection} ${event.position}`}
            >
              {/* Node Indicator */}
              <div className="w-4 h-4 md:w-6 md:h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>

              {/* Event Details */}
              <div className="text-white text-xs sm:text-sm md:text-lg text-center">
                <h3 className="font-bold">{event.title}</h3>
                <p className="text-gray-300">{event.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
