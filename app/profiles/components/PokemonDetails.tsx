import Image from "next/image";

export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)

    console.log(profileData.stats);
    const imgURL = profileData.sprites.other['official-artwork'].front_default


    const primaryType = profileData.types[0].type.name
    let secondaryType = null

    if (profileData.types[1]){
    secondaryType = profileData.types[1].type.name}

    const hp = profileData.stats[0].base_stat
    const attack = profileData.stats[1].base_stat
    const defence = profileData.stats[2].base_stat
    const spAttack = profileData.stats[3].base_stat
    const spDefence = profileData.stats[4].base_stat
    const speed = profileData.stats[5].base_stat
  

    
    return (  
        <div className="Details flex flex-col justify-center">
            <div className ="Types flex justify-center gap-5">
                <p>Primary type: {primaryType} </p>
                {profileData.types[1]? <p>Secondary type: {secondaryType} </p>: <p></p>}
            </div>
            <div className="Image flex justify-center">
                <Image src = {imgURL} width={500} height = {500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="an image of the pokemon"/>
            </div>
            <div className ="Stats flex flex-col justify-center gap-5">
                <p>HP: {hp} </p>
                <p>Attack: {attack} </p>
                <p>Defence: {defence} </p>
                <p>Special-Attack: {spAttack} </p>
                <p>Special-Defence: {spDefence} </p>
                <p>Speed: {speed} </p>
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
 
