import Link from 'next/link'

const Pokemon = ({monster}: {monster:any}) => {

    let url = `/profiles?name=${monster.name}`

    return ( 
        <Link href = {url}> 
        <li className= "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {monster.name} 
        </li>
        </Link>
     );
}
 
export default Pokemon;