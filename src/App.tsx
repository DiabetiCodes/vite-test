import * as React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

import './App.css'

function App() {

  let component;

  switch(window.location.pathname){
    case '/':
      component = <Home />
      break
    case '/About':
      component = <About />
      break
      case '/Blog':
        component = <Blog />
        break
      case '/Contact':
        component = <Contact />
        break
  }

  return (
    <div className="App">
      <Header/>
      {component}
      <Footer/>
    </div>
  )
}

export default App
