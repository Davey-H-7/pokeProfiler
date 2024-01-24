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
        <div className="gameList px-4 mx-auto sm:w-6/12 w-10/12 sm:p-3 p-5 text-center text-white bg-gray-600 rounded-3xl border-solid border-4 border-black">
          <h3 className="text-m sm:text-xl sm:leading-tight mt-5"> Select a game below to see its Pokemon </h3>
          <ul className = "grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto my-7 md:mt-10 md:grid-cols-3 text-black">
            {gameNodes}
          </ul>
        </div>
     );
}
 
export default GameDisplay;