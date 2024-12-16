import './Fire.css';
function Fire({ playerHealth, enemyHealth, callFire }) {
    const handleClick = () => {
        callFire();
    }
    const message = playerHealth == 0 || enemyHealth == 0 ? 'Restart?' : 'Fire!';
    const cssClassName = playerHealth == 0 || enemyHealth == 0 ? "center restart" : "center fire";
    return (
        <div className={ cssClassName } onClick={ handleClick }>
            <h2>{ message }</h2>
        </div>
    )
}

export default Fire