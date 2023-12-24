import GameList from "./components/GameDisplay"

export default function Home() {

  return (
    <main className ="bg-white">
      <h1> Welcome to the Poke Profiler! </h1>
        <GameList/>
    </main>
  )
}
