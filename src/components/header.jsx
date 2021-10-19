import {React} from "react";
import {NavLink , Link} from 'react-router-dom'
import {Logo} from './icons'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink  to="/work"><span>Work</span></NavLink>
                <Link  className="logo" to="/"><Logo/></Link>
                <NavLink  to="/about"><span>About</span></NavLink>
            </nav>
        </header>
    )
}

export default Header;
