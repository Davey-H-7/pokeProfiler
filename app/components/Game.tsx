import Link from 'next/link'

const Game = ({game}: {game:any}) => {

    let url = `/lists?gen=${game.generation}`

    return ( 
        <Link href = {url}>
        <li className="gameListItem bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
             {game.version} 
        </li>
        </Link>
     );
}
 
export default Game;