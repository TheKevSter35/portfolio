import {React} from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Portfolio</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;
