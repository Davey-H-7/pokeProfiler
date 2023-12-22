import Game from "./Game"

const GameDisplay = () => {

    const games = [
        {version: "Red", image: "", generation: 1},
        {version: "Blue", image: "", generation: 1},
        {version: "Yellow", image: "", generation: 1}
    ]

    const gameNodes = games.map((game, index) => {
      return <Game key = {index} game = {game} />
    })

    return ( 
        <div className="gameList">
        <h1> I am the game list </h1>
        <ul>
        {gameNodes}
        </ul>
        </div>
     );
}
 
export default GameDisplay;