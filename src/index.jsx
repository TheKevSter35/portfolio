import {React} from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'
import MainRouter from './router'

import '../src/assets/styles/main.scss'
// require('dotenv').config()

ReactDOM.render(
    <Provider store={store}>
    <MainRouter />
</Provider>,
document.getElementById('root')) 

