import GameDisplay from "./components/GameDisplay"


export default function Home() {

  return (
    <main className ="bg-red text-center">
      <h1 className="text-2xl font-bold font-mono text-yellow-300 sm:text-4xl sm:leading-tight my-5">PokeProfiler</h1>
        <GameDisplay/>
    </main>
  )
}
