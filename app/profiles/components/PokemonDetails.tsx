export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)

    console.log(profileData);

    
    return (  
        <>
        <h1>data</h1>
        </>
    );
}

async function getProfileData (name:string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()

}
 
