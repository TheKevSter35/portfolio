import {React} from "react";
import {NavLink , Link} from 'react-router-dom'
import {Logo} from './icons'
import TranslateButton from '../components/functions/translateButton'
import Darkmode from '../components/functions/darkmodebutton'
import {useTranslation} from "react-i18next";

const Header = () => {
    const [t] = useTranslation('common');

    return (
        <header>
            <TranslateButton/>
            <nav>
                <NavLink  to="/work"><span>{t('nav.work')}</span></NavLink>
                <Link className="logo" to="/"><Logo/></Link>
                <NavLink  to="/about"><span>{t('nav.about')}</span></NavLink>
            </nav>
             <Darkmode/>
        </header>
    )
}

export default Header;
