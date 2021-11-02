import {React, useEffect} from "react";
import {setProject} from '../../actions/global-actions'
import {useTranslation} from "react-i18next";
import {connect} from 'react-redux'

const TranslateButton = ({project}) => {
    const [t,
        i18n] = useTranslation('common');

    useEffect(() => {
        if (window.location.href.substr(0, window.location.href.indexOf('en'))) {
            i18n.changeLanguage('en')
            const enLangauge = document.getElementsByClassName('en')[0]
            enLangauge
                .classList
                .add('active')
        } else {
            const enLangauge = document.getElementsByClassName('nl')[0]
            i18n.changeLanguage('nl')
            enLangauge
                .classList
                .add('active')
        }

    }, [])

    const setNL = () => {
        const en = document.getElementsByClassName('en')[0]
        en
            .classList
            .remove('active')
        const nl = document.getElementsByClassName('nl')[0]
        nl
            .classList
            .add('active')
        i18n.changeLanguage('nl')
        if (window.location.pathname === '/en/work') {
            window
                .history
                .pushState({}, '', '/werk');
        }
        if (window.location.pathname === '/en') {
            window
                .history
                .pushState({}, '', '/');
        }
        if (window.location.pathname === '/en/about') {
            window
                .history
                .pushState({}, '', '/overmij');
        }
        if (window.location.pathname === `/en/project/${project.id}`) {
            window
                .history
                .pushState({}, '', `/project/${project.id}`);
        }

    }

    const setEN = () => {
        const nl = document.getElementsByClassName('nl')[0]
        nl
            .classList
            .remove('active')
        const en = document.getElementsByClassName('en')[0]
        en
            .classList
            .add('active')
        i18n.changeLanguage('en')
        if (window.location.pathname === '/werk') {
            window
                .history
                .pushState({}, '', '/en/work');
        }
        if (window.location.pathname === '/') {
            window
                .history
                .pushState({}, '', '/en');
        }
        if (window.location.pathname === '/overmij') {
            window
                .history
                .pushState({}, '', '/en/about');
        }
        if (window.location.pathname === `/project/${project.id}`) {
            window
                .history
                .pushState({}, '', `/en/project/${project.id}`);
        }

    }
    return (
        <div className='translatebuttons'>
            <button className="nl" onClick={() => setNL()}>nl</button>
            <button className="en" onClick={() => setEN()}>en</button>
        </div>
    )
}

const mapStateToProps = state => ({project: state.global.project})

export default connect(mapStateToProps)(TranslateButton)
