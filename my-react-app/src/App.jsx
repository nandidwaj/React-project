import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
function App() {
  return (
    <>
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact Component={Home}/>
    </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
