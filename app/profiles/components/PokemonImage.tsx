import Image from "next/image";

export default function PokemonImage({imgURL}:{imgURL:string}) {

return(
    <div className="Image flex justify-center bg-white rounded-xl border-solid border-4 border-black">
    <Image src = {imgURL} width={500} height = {500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="an image of the pokemon"/>
</div>
)
}