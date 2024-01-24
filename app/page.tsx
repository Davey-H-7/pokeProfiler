import GameList from "./components/GameDisplay"

export default function Home() {

  return (
    <main className ="bg-red text-center">
      <h1 className="text-2xl font-light text-black sm:text-4xl sm:leading-tight mt-5">PokeProfiler</h1>
        <GameList/>
    </main>
  )
}
