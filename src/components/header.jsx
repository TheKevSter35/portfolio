import {React} from "react";
import {Link} from 'react-router-dom'
import {Logo} from './icons'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/work"><span>Work</span></Link>
                <Link className="logo" to="/"><Logo/></Link>
                <Link to="/about"><span>About</span></Link>
            </nav>
        </header>
    )
}

export default Header;
