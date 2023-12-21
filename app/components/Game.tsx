const Game = ({game}: {game:any}) => {

    let url = `/profiles/${game.generation}`

    return ( 
        <li className="gameListItem">
            <a href = {url}> {game.version} </a>
        </li>
     );
}
 
export default Game;