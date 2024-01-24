import Image from 'next/image'
import PokemonList from './pokemonList'

export default async function Lists() {

  const fetchedPokemon = await getPokemon()

  const pokemon = fetchedPokemon.results

  

    async function getPokemon () {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1024&offset=0')
      
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()

  }
  
  
  return (
    <main>
      <PokemonList pokemon = {pokemon}/>
    </main>
  )
}
