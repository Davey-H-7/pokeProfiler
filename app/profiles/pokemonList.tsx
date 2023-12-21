import Pokemon from "./pokemon";

const PokemonList = ({pokemon}: {pokemon:[]}) => {

    console.log(pokemon)
    

    const pokeNodes = pokemon.map((monster, index) => {
        return <Pokemon key = {index} monster = {monster}/>
    })

   console.log(pokeNodes);
   

    return (
    <>
        <h1> I am the pokemon list</h1>
        <ol>
        {pokeNodes}
        </ol>
    </> 
    );
}
 
export default PokemonList;