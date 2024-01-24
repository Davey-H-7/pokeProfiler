'use client'

import { useSearchParams } from "next/navigation";
import PokemonDetails from "./components/PokemonDetails";


export default function Profile () {

  const searchParams = useSearchParams();
  
  let pokemonName = searchParams.get("name") as string;
  const pokemonNameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  
    return (

        <div className ="px-4 mx-auto sm:w-6/12 w-10/12 sm:p-3 lg:p-5 text-center text-white bg-gray-600 rounded-3xl border-solid border-4 border-black">
          <h1 className="text-2xl font-light sm:text-4xl sm:leading-tight mt-5"> {pokemonNameCapitalized} </h1>
          <PokemonDetails name = {pokemonName} />
        </div>
    )

}



