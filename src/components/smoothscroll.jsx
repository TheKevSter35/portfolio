import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const SmoothScroll = () => {

    const handleOnClick = () => {
 window.scrollTo({top: 0, behavior: 'smooth'});
        }

        return (
            <button
                onClick={() => {
                handleOnClick()
            }}
                className='scrolltop'>^</button>
        )
    }

    export default SmoothScroll