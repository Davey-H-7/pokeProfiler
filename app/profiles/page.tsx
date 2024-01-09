'use client'

import { useSearchParams } from "next/navigation";
import PokemonDetails from "./components/PokemonDetails";


export default function Profile () {

  const searchParams = useSearchParams();
  
  const pokemonName = searchParams.get("name") as string;

    return (

        <>
        <h1> {pokemonName}s profile </h1>
        <PokemonDetails name = {pokemonName}/>
        </>
    )

}



