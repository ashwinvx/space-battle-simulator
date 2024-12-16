const Emoji = ({ health }) => {
    return (
        <>
            { health == 100 ? '❤️' : health != 0 ? '❤️‍🩹' : '💀' }
        </>
    )
}

export default Emoji