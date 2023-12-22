import Link from 'next/link'

const Game = ({game}: {game:any}) => {

    let url = `/lists?gen=${game.generation}`

    return ( 
        <li className="gameListItem">
            <Link href = {url}> {game.version} </Link>
        </li>
     );
}
 
export default Game;