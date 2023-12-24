import Link from 'next/link'

const Game = ({game}: {game:any}) => {

    let url = `/lists?gen=${game.generation}`

    return ( 
        <li className="gameListItem bg-white h-12 flex shadow-lg items-center justify-center">
            <Link href = {url}> {game.version} </Link>
        </li>
     );
}
 
export default Game;