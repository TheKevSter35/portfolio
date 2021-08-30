import {React} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Header from './components/header'
import Home from './components/pages/home'
import Post from './components/posts'
import '../src/assets/styles/main.scss'

import {global} from "./components/reducer/global-reducer"

const store = createStore(global, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>

    <Header/>
    <Home/>
    <Post/>

</Provider>, 
  document.getElementById('root')
)
