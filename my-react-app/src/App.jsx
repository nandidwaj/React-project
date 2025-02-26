import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
function App() {
  return (
    <>
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/menu" exact Component={Menu}/>
      <Route path="/about" exact Component={About}/>
      <Route path="/contact" exact Component={Contact}/>
    </Routes>
    <Footer/>
    </Router>
    </div>
    </>
  )
}

export default App
