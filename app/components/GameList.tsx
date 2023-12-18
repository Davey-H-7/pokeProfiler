import Game from "./Game"

const GameList = () => {

    const games = [
        {version: "Red", image: ""},
        {version: "Blue", image: ""},
        {version: "Yellow", image: ""}
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
 
export default GameList;