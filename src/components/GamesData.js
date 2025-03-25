import Rectangle from "../assets/Rectangle.svg";
// eslint-disable-next-line no-unused-vars
import circle from "../assets/circle.svg";
import SpaceCity1 from "../assets/SpaceCity1.jpeg";
import SpaceCity2 from "../assets/SpaceCity2.jpeg";
import AiDevelop from '../assets/AI-Develop-game.png'
import binaryCoding from '../assets/binaryCoding.png'
import strategicTrade  from '../assets/strategicTrade.jpg'

const games = [
  {
    id: 1,
    title: "Mini Hackthon",
    description: `Hackodyssey is an exhilarating mini hackathon where participants tackle AI model development and optimization challenges. Compete in two intense rounds, building innovative solutions while showcasing creativity, problem-solving, and teamwork. Push your limits, refine your skills, and embark on an unforgettable coding adventure!`,
    link: "/miniHackathon",
    image: SpaceCity1,
  },
  {
    id: 2,
    title: "Meme Maker",
    description: `The Meme Maker Game is a fun competition where players create tech-themed memes based on given themes or words. Within a time limit, they must design and submit their memes, which are judged on creativity, relevance, humor, and presentation to determine the ultimate meme creator!`,
    link: "/memeMaker",
    image: SpaceCity2,
  },
  {
    id: 3,
    title: "HTTPS Find",
    description: `Join the thrilling adventure of HTTPS Find, where players explore a website to uncover hidden clues. Each clue brings them closer to solving exciting puzzles and advancing to the next challenge. With every step, participants test their thinking, speed, and problem-solving skills. Get ready for an engaging online quest full of fun, mystery, and surprises!`,
    link: "https://qrfy.io/DghE2ew1zr",
    image: SpaceCity1,
  },
  {
    id: 4,
    title: "AI or NOT",
    description: `AI-NOT is a super fun and interactive game where you get to guess whether a creation is made by AI or a human! As you play, you’ll earn points and have a blast competing for the top spot, all while sharpening your observation and analytical skills. Come join the fun and see how many you can get right!`,
    link: "https://qrfy.io/e0Obzeson5",
    image: SpaceCity2,
  },
  {
    id: 5,
    title: "Find The Glitch",
    description: `Find the Glitch is a thrilling coding challenge where participants spot and fix errors in code snippets within a time limit. With levels ranging from easy to high difficulty, the game tests debugging skills across logical, syntactical, and semantic errors. As challenges grow more complex, only the sharpest problem-solvers will succeed!`,
    link: "https://qrfy.io/CJrke0OkAQ",
    image: SpaceCity1,
  },
  {
    id: 6,
    title: "AI Develop",
    description: `AI Develop is an innovative game where participants design visually stunning, functional, and user-friendly web pages using advanced AI tools. Spanning two challenging levels, it tests creativity, technical expertise, and user experience. Beyond competition, it’s a platform to experiment, learn, and refine web development skills.`,
    link: "https://qrfy.io/BZBhmj8osO",
    image: AiDevelop,
  },
  {
    id: 7,
    title: "Hunter’s Grid",
    description: `Hunter’s Grid is an exciting campus-wide challenge where teams compete to scan QR codes, solve puzzles, and complete tasks. The game tests speed, intelligence, and problem-solving skills, with the fastest team emerging as the winner.`,
    link: "/huntersGrid",
    image: SpaceCity1,
  },
  {
    id: 8,
    title: "Strategic Trade",
    description: `Strategic Trade is a competitive event designed to assess participants’ proficiency in stock market dynamics and real-time trading. Participants utilize platforms like TradingView to engage in simulated trading environments, aiming to maximize profits and demonstrate their strategic trading acumen.`,
    link: "https://qrfy.io/DghE2ew1zr",
    image: strategicTrade,
  },
  {
    id: 9,
    title: "Binary Coding",
    description: `Binary Coding Quest is a thrilling competition that puts participants' binary conversion skills and logical reasoning to the test. Players tackle a series of challenges that assess their speed, accuracy, and problem-solving abilities in a structured format. With each stage increasing in difficulty, teams must strategically apply their coding knowledge to stay ahead. The event encourages competitive spirit while ensuring fair play and precision in binary-based problem-solving.`,
    link: "https://qrfy.io/Oe5lX9IZ0k",
    image: binaryCoding,
  },
];

export default games;
