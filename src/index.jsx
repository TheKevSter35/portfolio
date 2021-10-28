import {React} from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'
import MainRouter from './router'
import '../src/assets/styles/main.scss'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_nl from "./translations/nl/commen.json";
import common_en from "./translations/en/commen.json";

i18next.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'nl',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            nl: {
                common: common_nl
            },
        },
    });

// require('dotenv').config()

ReactDOM.render(
    <Provider store={store}>
    <I18nextProvider i18n={i18next}>
        <MainRouter/>
    </I18nextProvider>
</Provider>, document.getElementById('root'))