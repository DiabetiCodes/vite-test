import { Routes, Route } from "react-router-dom";

import Layout from './components/global/Layout'
import Footer from './components/global/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

import './App.css'

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
