import './PlayerHealth.css'
function PlayerHealth({ player, health }) {
    return (
        <div>
            { player } Health: { health }
        </div>
    )
}

export default PlayerHealth