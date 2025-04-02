import ThreeDCard from "../components/ThreeDCard";
import { AnimatePresence } from "framer-motion";

export default function Hackotsav() {
  const cardData = [
    {
      title: "AIML",
      description: "Explore the world of AI and ML.",
      linkText: " ",
      linkUrl: "https://hackmaster.com",
    },
    {
      title: "AI in Healthcare",
      description: "Transforming healthcare with AI solutions.",
      linkText: " ",
      linkUrl: "https://ai-innovations.com",
    },
    {
      title: "Web3 & Blockchain",
      description: "Unlock the potential of decentralized technologies.",
      linkText: " ",
      linkUrl: "https://web3future.com",
    },
    {
      title: "DevOps",
      description: "Streamline your development and operations.",
      linkText: " ",
      linkUrl: "https://cybersecuritytoday.com",
    },
    {
      title: "Open Innovations",
      description: "Bring your very own innovations onto the plate.",
      linkText: " ",
      linkUrl: "https://cloudtech.com",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="px-5">
        <h1 className="text-5xl text-center lg:pt-9 text-shadow-2">Themes</h1>
        <div className="flex flex-wrap lg:gap-6 px-2 py-5 justify-center align-center">
          {cardData.map((card, index) => (
            <ThreeDCard key={index} {...card} cardKey={index} />
          ))}
        </div>
        <div className="shadow-lg rounded-lg p-6 mt-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4">
            HackOdyssey Guidelines
          </h2>
          <div className="flex flex-wrap flex-col gap-4">
            {[
              {
                title: "Mandatory Laptop Requirement",
                description:
                  "All team members must bring and use their own laptops throughout the event.",
              },
              {
                title: "Problem Statement Selection",
                description:
                  "Participants must choose one problem statement from the five designated domains.",
              },
              {
                title: "Mentor Round Timing",
                description:
                  "The mentor interaction session is scheduled to begin at approximately 12:00 PM.",
              },
              {
                title: "Problem Statement Selection Process",
                description:
                  "Participants are required to select their problem statement from the official list provided within the specified domains.",
              },
              {
                title: "Event Schedule",
                description:
                  "HackOdyssey will take place from 10:00 AM to 4:00 PM.",
              },
            ].map((rule, index) => (
              <div
                key={index}
                className=" shadow-md rounded-lg p-4 border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                <p className="text-gray-700">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
