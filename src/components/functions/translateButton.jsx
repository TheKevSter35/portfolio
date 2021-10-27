import {React, useEffect, useState} from "react";

import {useTranslation} from "react-i18next";

const TranslateButton = () => {
    const [t,
        i18n] = useTranslation('common');

    useEffect(() => {
        if (i18n.language === ('en')) {
            const enLangauge = document.getElementsByClassName('en')[0]
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
    }
    return (
        <div className='translatebuttons'>
            <button className="nl" onClick={() => setNL()}>nl</button>
            <button className="en" onClick={() => setEN()}>en</button>
        </div>
    )
}

export default TranslateButton;
