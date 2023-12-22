'use client'
import Pokemon from "./pokemon";
import { useSearchParams } from "next/navigation";



const PokemonList = ({pokemon}: {pokemon:[]}) => {

    let pokemonByGeneration:any[] = []

    const searchParams = useSearchParams();

    const gen = searchParams.get("gen");

    console.log(gen)

   if(gen == "1") {
    pokemonByGeneration = pokemon.slice(0, 151)
   }

   if(gen == "2") {
    pokemonByGeneration = pokemon.slice(151, 251)
   }
     
    
    

    const pokeNodes = pokemonByGeneration.map((monster:object, index: number) => {
        return <Pokemon key = {index} monster = {monster}/>
    })


   

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