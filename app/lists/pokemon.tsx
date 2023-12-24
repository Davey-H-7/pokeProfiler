const Pokemon = ({monster}: {monster:any}) => {
    return ( 
        <li className="bg-white h-12 flex shadow-lg items-center justify-center">
        {monster.name}
        </li>
     );
}
 
export default Pokemon;