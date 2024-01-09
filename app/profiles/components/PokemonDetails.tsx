import Image from "next/image";

export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)

    console.log(profileData);
    const imgURL = profileData.sprites.other['official-artwork'].front_default

    
    return (  
        <>
        <Image src = {imgURL} width={500} height = {500} alt="an image of the pokemon"/>
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
 
