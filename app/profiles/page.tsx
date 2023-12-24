

export default async function Profiles() {

  const pokemonDetails = await getDetails()

    async function getDetails () {
      const res = await fetch('')
      
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()

  }
  
  
  return (
    <main>
      <h1> </h1>
      <Profile details = {pokemonDetails}/>
    </main>
  )
}
