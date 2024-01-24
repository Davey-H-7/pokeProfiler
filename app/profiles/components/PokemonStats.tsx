export default function PokemonStats({stats}:{stats:Array<any>}) {

    const hp = stats[0].base_stat
    const attack = stats[1].base_stat
    const defence = stats[2].base_stat
    const spAttack = stats[3].base_stat
    const spDefence = stats[4].base_stat
    const speed = stats[5].base_stat

    const stat_checks = CheckStats(stats);

    

return(
    <div className ="Stats flex justify-center gap-5">
        <ul className = "text-right">
            <li>Health Points: {hp} </li>
            <li>Attack: {attack} </li>
            <li>Defence: {defence} </li>
            <li>Special-Attack: {spAttack} </li>
            <li>Special-Defence: {spDefence} </li>
            <li>Speed: {speed} </li>
        </ul>
        <ul className = "text-left font-bold">
            <li>{stat_checks[0]} </li>
            <li>{stat_checks[1]} </li>
            <li>{stat_checks[2]} </li>
            <li>{stat_checks[3]} </li>
            <li>{stat_checks[4]}</li>
            <li>{stat_checks[5]} </li>
        </ul>
</div>
)
}

function CheckStats (stats:Array<any>){
    let stat_checks = []
    for (let i = 0; i <= 5; i++) {
        if (stats[i].base_stat >= 130){
            stat_checks[i] = 'Excellent';
        }
        else if (stats[i].base_stat < 130 && stats[i].base_stat >= 110){
            stat_checks[i] = 'Great';
        }
        else if (stats[i].base_stat < 110 && stats[i].base_stat >= 90){
            stat_checks[i] = 'Good';
        }
        else if (stats[i].base_stat < 90 && stats[i].base_stat >= 80){
            stat_checks[i] = 'Decent';
        }
        else if (stats[i].base_stat < 80 && stats[i].base_stat >= 65){
            stat_checks[i] = 'Average';
        }
        else{
            stat_checks[i] = 'Low';
        }
    }

    return stat_checks;
}