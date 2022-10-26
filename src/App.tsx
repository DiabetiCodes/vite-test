import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
