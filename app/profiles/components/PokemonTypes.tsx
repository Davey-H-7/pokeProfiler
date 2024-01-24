export default function PokemonTypes({types}:{types:Array<any>}) {

    const primaryType = types[0].type.name
    const primaryTypeCapitalized = primaryType.charAt(0).toUpperCase() + primaryType.slice(1);
    let secondaryType = null
    let secondaryTypeCapitalized = null

    if (types[1]){
    secondaryType = types[1].type.name;
    secondaryTypeCapitalized = secondaryType.charAt(0).toUpperCase() + secondaryType.slice(1);}

return(
    <div className ="Types flex justify-center gap-5  py-3">
    <p>Primary type: {primaryTypeCapitalized} </p>
    {types[1]? <p>Secondary type: {secondaryTypeCapitalized} </p>: <p></p>}
</div>
)
}