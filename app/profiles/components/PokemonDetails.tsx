import Image from "next/image";

export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)

    console.log(profileData.types);
    const imgURL = profileData.sprites.other['official-artwork'].front_default
    const primaryType = profileData.types[0].type.name
    const secondaryType = profileData.types[1].type.name

    
    return (  
        <div className="Details flex flex-col justify-center">
            <div className ="Types flex justify-center gap-5">
                <p>Primary type: {primaryType} </p>
                <p>Secondary type: {secondaryType} </p>
            </div>
            <div className="Image flex justify-center">
                <Image src = {imgURL} width={500} height = {500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="an image of the pokemon"/>
            </div>
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
 
