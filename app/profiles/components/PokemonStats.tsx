export default function PokemonStats({stats}:{stats:Array<any>}) {

    const hp = stats[0].base_stat
    const attack = stats[1].base_stat
    const defence = stats[2].base_stat
    const spAttack = stats[3].base_stat
    const spDefence = stats[4].base_stat
    const speed = stats[5].base_stat

return(
    <div className ="Stats flex flex-col justify-center gap-5">
    <p>HP: {hp} </p>
    <p>Attack: {attack} </p>
    <p>Defence: {defence} </p>
    <p>Special-Attack: {spAttack} </p>
    <p>Special-Defence: {spDefence} </p>
    <p>Speed: {speed} </p>
</div>
)
}

function CheckStats (stats:Array<any>){
    for (let i = 0; i < 5; i++) {
        

    }
}