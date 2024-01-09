'use client'

import { useSearchParams } from "next/navigation";
import PokemonDetails from "./components/PokemonDetails";


export default function Profile () {

  const searchParams = useSearchParams();
  
  const pokemonName = searchParams.get("name") as string;

    return (

        <div className ="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-light text-black sm:text-4xl sm:leading-tight mt-5"> {pokemonName} </h1>
        <PokemonDetails name = {pokemonName}/>
        </div>
    )

}



