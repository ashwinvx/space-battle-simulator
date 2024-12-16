import './FooterBanner.css'
const FooterBanner = ({ playerHealth, enemyHealth }) => {
    const youWon = 'Congratulations. 😎💪 You\'ve successfully defended your spacecraft.';
    const youLost = 'Mission Failed. 😲 Your spacecraft has been defeated.';
    const draw = 'Its a draw! 🤝 Both spacecrafts have been neutralized.';
    const engage = 'Engage the enemy! ☄️';
    let message = playerHealth == 0 && enemyHealth == 0 ? draw : playerHealth == 0 ? youLost : enemyHealth == 0 ? youWon : engage;
    return (
        <>
            <div class="banner">
                <h4>{ message }</h4>
            </div>
        </>
    )
}

export default FooterBanner