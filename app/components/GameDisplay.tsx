import Game from "./Game"

const GameDisplay = () => {

    const games = [
        {version: "Red", image: "", generation: 1},
        {version: "Blue", image: "", generation: 1},
        {version: "Yellow", image: "", generation: 1},
        {version: "Gold", image: "", generation: 2},
        {version: "Silver", image: "", generation: 2},
        {version: "Crystal", image: "", generation: 2},
        {version: "Ruby", image: "", generation: 3},
        {version: "Saphire", image: "", generation: 3},
        {version: "Emerald", image: "", generation: 3},
        {version: "Diamond", image: "", generation: 4},
        {version: "Pearl", image: "", generation: 4},
        {version: "Platinum", image: "", generation: 4},
        {version: "Black", image: "", generation: 5},
        {version: "White", image: "", generation: 5},
        {version: "Black 2", image: "", generation: 5},
        {version: "White 2", image: "", generation: 5},
        {version: "X", image: "", generation: 6},
        {version: "Y", image: "", generation: 6},
        {version: "Sun", image: "", generation: 7},
        {version: "Moon", image: "", generation: 7},
        {version: "Ultra Sun", image: "", generation: 7},
        {version: "Ultra Moon", image: "", generation: 7},
        {version: "Sword", image: "", generation: 8},
        {version: "Shield", image: "", generation: 8},
        {version: "Scarlet", image: "", generation: 9},
        {version: "Violet", image: "", generation: 9},
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