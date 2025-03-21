import GameComponent from "./GameComponent";
import games from "./GamesData";

export default function Games() {
  return (
    <>
      <div id="game" className="gamesPage my-20 ">
        <h1 className="text-5xl md:text-6xl">GAMES</h1>
        {games.map((game) => (
          <GameComponent
            key={game.id}
            id={game.id}
            title={game.title}
            link={game.link}
            description={game.description}
            randomShapeImage={game.randomShapeImage}
            image={game.image}
          />
        ))}
      </div>
    </>
  );
}
