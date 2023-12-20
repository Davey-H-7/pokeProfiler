
import { useState, useEffect } from "react"
import GameList from "./components/GameList"


export default async function Home() {

  

    let fetchedPokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    console.log(fetchedPokemon.json);
    
 

  



  return (
    <main>
      <h1> Welcome to the Poke Profiler! </h1>
      <h2> Select a game below to see the monsters from that generation</h2>

        <GameList/>
    </main>
  )
}
