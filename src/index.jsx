import {React} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/header'
import Home from './components/pages/home'
import Post from './components/posts'
import '../src/assets/styles/main.scss'
require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>

    <Header/>
    <Home/>
    <Post/>

</Provider>, 
  document.getElementById('root')
)
