import {React, useEffect} from 'react'

const DarkMode = () => {

    useEffect(() => {
           

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
	// console.log('Currently in dark mode');
    const element = document.querySelector('body');
            element
                .classList
                .add("dark")
}
// else{
// 	console.log('Currently not in dark mode');
// }
    }, [])

    const handleOnClick = () => {
        const element = document.querySelector('body');
        element
            .classList
            .toggle("dark")
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