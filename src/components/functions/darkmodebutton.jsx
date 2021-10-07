
const DarkMode = () => {

    const handleOnClick = () => {
        var element = document.querySelector('body');
        element.classList.toggle("dark");
    }

    return (

        <button
            onClick={() => {
            handleOnClick()
        }}
            className='scrolltop'><span></span></button>
    )
}

export default DarkMode