import GameComponent from "./GameComponent";
import games from "./GamesData";

export default function Games() {
<<<<<<< HEAD
  return (
    <>
      <div className="gamesPage my-20" id="game">
        <h1>GAMES</h1>
        {games.map((game) => (
          <GameComponent
            key={game.id}
            id={game.id}
            title={game.title}
            link={game.link}
            description={game.description}
            randomShapeImage={game.randomShapeImage}
            image={game.image}
=======
  return <>
  <div id="game" className="gamesPage my-20">
    <h1>GAMES</h1>  
    {
      games.map((game)=>(
        <GameComponent 
          key={game.id}
          id={game.id}
          title={game.title}
          link={game.link}
          description={game.description} 
          randomShapeImage={game.randomShapeImage}
          image={game.image}
>>>>>>> prajakta/website-ui
          />
        ))}
      </div>
    </>
  );
}
