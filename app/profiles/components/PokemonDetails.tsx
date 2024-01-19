import PokemonImage from "./PokemonImage";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";

export default async function PokemonDetails({name}:{name:string}) {

    const profileData = await getProfileData(name)


  

    
    return (  
        <div className="Details flex flex-col justify-center">
            <PokemonTypes types ={profileData.types}/>
            <PokemonImage imgURL = {profileData.sprites.other['official-artwork'].front_default}/>
            <PokemonStats stats = {profileData.stats}/>

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
 
