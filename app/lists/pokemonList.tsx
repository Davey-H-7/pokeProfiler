'use client'
import Pokemon from "./pokemon";
import { useSearchParams } from "next/navigation";



const PokemonList = ({pokemon}: {pokemon:[]}) => {

    let pokemonByGeneration:any[] = []

    const searchParams = useSearchParams();

    const gen = searchParams.get("gen");

   if(gen == "1") {
    pokemonByGeneration = pokemon.slice(0, 151)
   }

   if(gen == "2") {
    pokemonByGeneration = pokemon.slice(151, 251)
   }

   if(gen == "3") {
    pokemonByGeneration = pokemon.slice(251, 386)
   }

   if(gen == "4") {
    pokemonByGeneration = pokemon.slice(386, 493)
   }

   if(gen == "5") {
    pokemonByGeneration = pokemon.slice(493, 649)
   }

   if(gen == "6") {
    pokemonByGeneration = pokemon.slice(649, 721)
   }

   if(gen == "7") {
    pokemonByGeneration = pokemon.slice(721, 809)
   }

   if(gen == "8") {
    pokemonByGeneration = pokemon.slice(809, 905)
   }

   if(gen == "9") {
    pokemonByGeneration = pokemon.slice(905, 1024)
   }
     
    const pokeNodes = pokemonByGeneration.map((monster:object, index: number) => {
        return <Pokemon key = {index} monster = {monster}/>
    })


   

    return (
    <div className ="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-light text-black sm:text-4xl sm:leading-tight mt-5"> Generation {gen} Pokemon</h1>
        <div className = "grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-10 md:grid-cols-4">
            {pokeNodes}
        </div>
    </div> 
    );
}
 
export default PokemonList;