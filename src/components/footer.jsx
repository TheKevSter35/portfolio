import {React} from "react";
import {Github, LinkedIn} from '../../src/components/icons'

const Footer = () => {
    return (
        <footer>
            <div className="inner">
            <nav>
                <a
                    href="https://github.com/TheKevSter35"
                    alt="My github page"
                    target="_blank"
                    rel="noreferrer">
                    <Github/>
                </a>
                <a
                    href="https://www.linkedin.com/in/kevin-curi-4902b5141"
                    alt="My linkedin page"
                    target="_blank"
                    rel="noreferrer">
                    <LinkedIn/>
                </a>
            </nav>
             <p>© 2021 Kevin Curi</p>
             </div>
        </footer>
    )
}

export default Footer;
