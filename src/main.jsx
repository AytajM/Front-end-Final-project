import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import './App.css'
import './App2.css'
import { BrowserRouter as Router  } from "react-router-dom"
import { legacy_createStore } from 'redux'
import Reducer from './store/Reducer'
import { Provider } from 'react-redux'
const store = legacy_createStore(Reducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </ Provider>
)
