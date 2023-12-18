const Game = ({game}: {game:any}) => {
    return ( 
        <li className="gameListItem">
            <h1>{game.version}</h1>
        </li>
     );
}
 
export default Game;