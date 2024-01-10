import Image from "next/image";

export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)

    console.log(profileData);
    const imgURL = profileData.sprites.other['official-artwork'].front_default

    
    return (  
        <div className="flex justify-center">
        <Image src = {imgURL} width={500} height = {500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="an image of the pokemon"/>
        </div>
    );
}

async function getProfileData (name:string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()

}
 
