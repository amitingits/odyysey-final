import Rectangle from "../assets/Rectangle.svg";
// eslint-disable-next-line no-unused-vars
import circle from "../assets/circle.svg";
import SpaceCity1 from "../assets/SpaceCity1.jpeg";
import SpaceCity2 from "../assets/SpaceCity2.jpeg";

const games = [
  {
    id: 1,
    title: "Hunter's Grid",
    description: `Hunter’s Grid is a strategic game that challenges players to outsmart their opponents. 
      Navigate through a complex maze filled with obstacles, hidden traps, and secret pathways. 
      Players must collect special power-ups and solve cryptic puzzles to unlock new areas. 
      Each level presents a unique challenge, requiring quick thinking and tactical planning. 
      The game offers multiple modes, including solo missions and multiplayer battles. 
      Adaptive AI makes the gameplay unpredictable, ensuring a fresh experience each time. 
      Dynamic environments change based on player actions, making every decision crucial. 
      Victory depends on your ability to analyze patterns and anticipate enemy moves. 
      The immersive soundtrack and visually stunning graphics enhance the overall experience. 
      Are you ready to conquer the Hunter’s Grid and become the ultimate strategist?`,
    link: "/huntersGrid",
    // randomShapeImage: Rectangle,
    image: SpaceCity1,
  },
  {
    id: 2,
    title: "Shadow Quest",
    description: `Shadow Quest takes you on an epic journey through a world of mystery and darkness. 
      You play as a lone warrior seeking lost knowledge hidden within ancient ruins. 
      The game’s deep storyline unfolds through cinematic cutscenes and interactive dialogues. 
      Every choice you make affects the outcome, leading to multiple possible endings. 
      Face off against powerful enemies with unique abilities and unpredictable strategies. 
      Upgrade your weapons, learn magical spells, and forge alliances to strengthen your quest. 
      The game world is vast, featuring hidden dungeons, treacherous landscapes, and secret artifacts. 
      Stunning visuals and fluid combat mechanics create an immersive experience. 
      Unravel the secrets of the Shadow Realm and shape your destiny. 
      Only the bravest warriors can uncover the truth and survive the Shadow Quest!`,
    link: "/shadowQuest",
    // randomShapeImage: circle,
    image: SpaceCity2,
  },
  {
    id: 3,
    title: "Cyber Arena",
    description: `Cyber Arena is a high-tech battleground where elite hackers and cyber warriors compete. 
      The game is set in a dystopian future where AI controls every aspect of life. 
      Players take on the role of rebels fighting to reclaim digital freedom. 
      Engage in fast-paced combat using futuristic weapons and hacking abilities. 
      Customize your character with cybernetic enhancements and strategic gear. 
      Every mission requires skill, precision, and teamwork to outmaneuver opponents. 
      The game offers multiple PvP and PvE modes for varied gameplay experiences. 
      Real-time hacking mechanics let players manipulate the battlefield in unique ways. 
      Advanced AI-driven enemies adapt to your strategies, making battles intense. 
      Will you become the ultimate cyber warrior in this neon-drenched battleground?`,
    link: "/cyberArena",
    // randomShapeImage: Rectangle,
    image: SpaceCity1,
  },
  {
    id: 4,
    title: "Mythic Wars",
    description: `Mythic Wars immerses players in a battle of gods, warriors, and mythical beasts. 
      Choose from various factions inspired by legends and forge your own destiny. 
      Each hero has unique abilities based on ancient mythology. 
      Massive online battles let players test their skills in tactical warfare. 
      Build alliances, conquer territories, and expand your empire. 
      The game features an evolving story with quests that change based on your decisions. 
      Stunning environments bring ancient civilizations to life. 
      Master different battle strategies, from siege warfare to magical duels. 
      Compete in tournaments for legendary rewards and recognition. 
      Can you rise to power and become a legend in the world of Mythic Wars?`,
    link: "/mythicWars",
    // randomShapeImage: circle,
    image: SpaceCity2,
  },
  {
    id: 5,
    title: "Neon Drift",
    description: `Neon Drift is a high-speed, futuristic racing game set in a cyberpunk city. 
      Customize your hovercars with advanced technology and glowing neon designs. 
      Race through dazzling cityscapes filled with obstacles, ramps, and shortcuts. 
      Unlock new vehicles and upgrades to dominate the competition. 
      Compete in high-stakes tournaments against skilled AI and real players. 
      Dynamic weather and day-night cycles affect track conditions. 
      Precision drifting mechanics reward skill and perfect timing. 
      The immersive soundtrack keeps adrenaline levels high. 
      Explore hidden areas to discover secret challenges and rewards. 
      Do you have what it takes to be the ultimate street racer in Neon Drift?`,
    link: "/neonDrift",
    // randomShapeImage: Rectangle,
    image: SpaceCity1,
  },
  {
    id: 6,
    title: "Apocalypse Rising",
    description: `Survive in a post-apocalyptic world filled with dangers at every turn. 
      Scavenge for resources, craft weapons, and build shelters to stay alive. 
      Choose to work with others or betray them to ensure your survival. 
      Face mutated creatures, hostile survivors, and environmental hazards. 
      The game features an open world with diverse biomes to explore. 
      Randomized events keep each playthrough unique and challenging. 
      Upgrade your character’s skills to enhance combat and survival abilities. 
      Manage hunger, thirst, and health in a realistic survival system. 
      Your decisions shape the story and determine who lives or dies. 
      Can you endure the chaos and thrive in Apocalypse Rising?`,
    link: "/apocalypseRising",
    // randomShapeImage: circle,
    image: SpaceCity2,
  },
  {
    id: 7,
    title: "Titan's Fall",
    description: `In Titan's Fall, humanity faces extinction as giant mechanical titans wage war. 
      As a pilot, you control powerful mechs and engage in large-scale battles. 
      Strategize with your team to take down enemy forces and secure objectives. 
      Customize your mech with powerful weapons and defensive systems. 
      The game features destructible environments that change the battlefield. 
      Engage in intense aerial combat with vertical movement mechanics. 
      Experience a gripping story campaign with emotional character arcs. 
      Multiplayer modes offer ranked battles, team fights, and battle royale. 
      Advanced physics bring realism to combat and destruction. 
      Will you rise as the ultimate pilot in Titan's Fall?`,
    link: "/titansFall",
    // randomShapeImage: Rectangle,
    image: SpaceCity1,
  },
  {
    id: 8,
    title: "Magic Chronicles",
    description: `Embark on a magical adventure filled with mystery, spells, and ancient secrets. 
      Play as a young sorcerer discovering their hidden potential. 
      Explore vast kingdoms, enchanted forests, and forbidden dungeons. 
      Master powerful spells and elemental magic to overcome obstacles. 
      Engage in turn-based battles against mythical creatures and rival wizards. 
      Solve challenging puzzles that require both intelligence and magic. 
      Dynamic choices influence the storyline and unlock different endings. 
      Customize your character with rare magical artifacts and gear. 
      Multiplayer duels let you test your skills against other players. 
      Will you become the legendary wizard of Magic Chronicles?`,
    link: "/magicChronicles",
    // randomShapeImage: circle,
    image: SpaceCity2,
  },
  {
    id: 9,
    title: "Galaxy Raiders",
    description: `Galaxy Raiders is an intergalactic space adventure filled with danger and discovery. 
      Command your spaceship and explore unknown galaxies teeming with alien life. 
      Trade, mine, or battle your way to fortune and power. 
      Dynamic space battles test your piloting skills and tactical abilities. 
      Upgrade your ship with advanced weapons, shields, and engines. 
      Form alliances with alien factions or conquer planets for dominance. 
      Every mission has branching paths that impact the galaxy’s fate. 
      A deep crafting system lets you build and modify your fleet. 
      Realistic planetary physics enhance the immersive space travel experience. 
      Will you become a hero, a tyrant, or a legend among the stars?`,
    link: "/galaxyRaiders",
    //randomShapeImage:Rectangle,
    image: SpaceCity1,
  },
];

export default games;
