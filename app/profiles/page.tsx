'use client'

import { useSearchParams } from "next/navigation";


export default function Profile () {

  const searchParams = useSearchParams();
  
  const pokemonName = searchParams.get("name") as string;

  const profileData = getProfileData(pokemonName)

  console.log(profileData);
    return (

        <>
        <h1> {pokemonName} profile </h1>
        </>
    )

}
  
      async function getProfileData (name:string) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      
      return res.json()

    }


