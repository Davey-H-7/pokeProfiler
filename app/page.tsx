import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1> Welcome to the Poke Profiler! </h1>
      <h2> Select a game below to see the monsters from that generation</h2>


      <div className = 'imageList'>
        {/* Images of different games go here */}
      </div>
    </main>
  )
}
