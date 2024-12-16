import PlayerHealth from "./PlayerHealth"
import Fire from "./Fire"
import FooterBanner from "./FooterBanner"
import Emoji from "./Emoji"
import './BattleSimulator.css'
import { useState } from "react"
function BattleSimulator({ minDamage = 0, maxDamage = 50 }) {
    const initial_health = 100;
    const [playerHealth, setPlayerHealth] = useState(initial_health);
    const [enemyHealth, setEnemyHealth] = useState(initial_health);
    const healthCalculator = () => {
        const playerAttack = Math.floor(Math.random() * (maxDamage - minDamage));
        const enemyAttack = Math.floor(Math.random() * (maxDamage - minDamage));
        if (playerHealth == 0 || enemyHealth == 0) {
            setPlayerHealth(initial_health);
            setEnemyHealth(initial_health);
        } else {
            setPlayerHealth(playerHealth - enemyAttack > 0 ? playerHealth - enemyAttack : 0);
            setEnemyHealth(enemyHealth - playerAttack > 0 ? enemyHealth - playerAttack : 0);
        }
    }
    return (
        <div className="main-container">
            <h1>Space Battle Simulator</h1>
            <div className="game-container">
                <div className="player">
                    <div className="green">
                        <PlayerHealth player='Player' health={ playerHealth }></PlayerHealth>
                    </div>
                    <div>
                        <Emoji health={ playerHealth }></Emoji>
                    </div>
                </div>
                <Fire playerHealth={ playerHealth } enemyHealth={ enemyHealth } callFire={ healthCalculator }></Fire>
                <div className="enemy">
                    <div className="red">
                        <PlayerHealth player='Enemy' health={ enemyHealth }></PlayerHealth>
                    </div>
                    <div>
                        <Emoji health={ enemyHealth }></Emoji>
                    </div>
                </div>
            </div>
            <FooterBanner playerHealth={ playerHealth } enemyHealth={ enemyHealth }></FooterBanner>
        </div>
    )
}

export default BattleSimulator