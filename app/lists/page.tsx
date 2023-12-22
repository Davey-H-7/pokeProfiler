import Image from 'next/image'
import PokemonList from './pokemonList'

export default async function Lists() {

  const fetchedPokemon = await getPokemon()

  const pokemon = fetchedPokemon.results

  

    async function getPokemon () {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1019&offset=0')
      
    
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()

  }
  
  
  return (
    <main>
      <h1> Welcome to the Poke Profiler! </h1>
      <PokemonList pokemon = {pokemon}/>
    </main>
  )
}
