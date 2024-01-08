import Link from 'next/link'

const Pokemon = ({monster}: {monster:any}) => {

    let url = `/profiles/${monster.name}`

    return ( 
        <li className="bg-white h-12 flex shadow-lg items-center justify-center">
            <Link href = {url}> {monster.name} </Link>
        </li>
     );
}
 
export default Pokemon;