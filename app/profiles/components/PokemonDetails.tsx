import PokemonImage from "./PokemonImage";
import PokemonTypes from "./PokemonTypes";

export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)

    const hp = profileData.stats[0].base_stat
    const attack = profileData.stats[1].base_stat
    const defence = profileData.stats[2].base_stat
    const spAttack = profileData.stats[3].base_stat
    const spDefence = profileData.stats[4].base_stat
    const speed = profileData.stats[5].base_stat
  

    
    return (  
        <div className="Details flex flex-col justify-center">
            <PokemonTypes types ={profileData.types}/>
            <PokemonImage imgURL = {profileData.sprites.other['official-artwork'].front_default}/>

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
 
