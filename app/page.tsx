import GameList from "./components/GameList"


export default async function Home() {

  const Pokemon = await getPokemon()

  console.log(Pokemon.results);
  

  

    async function getPokemon () {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()

  }

  return (
    <main>
      <h1> Welcome to the Poke Profiler! </h1>
      <h2> Select a game below to see the monsters from that generation</h2>

        <GameList/>
    </main>
  )
}
