const DarkMode = () => {

    if (window.matchMedia('(prefers-color-scheme: dark)')) {
        const element = document.querySelector('body');
        element
            .classList
            .toggle("dark");
    }
    const handleOnClick = () => {
        const element = document.querySelector('body');
        element
            .classList
            .toggle("dark");
    }

    return (

        <button
            onClick={() => {
            handleOnClick()
        }}
            className='darkmodebutton'>
            <span></span>
        </button>
    )
}

export default DarkMode