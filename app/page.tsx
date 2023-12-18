import GameList from "./components/GameList"

export default function Home() {
  return (
    <main>
      <h1> Welcome to the Poke Profiler! </h1>
      <h2> Select a game below to see the monsters from that generation</h2>

        <GameList/>
    </main>
  )
}
