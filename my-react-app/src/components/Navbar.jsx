import React,{ useState } from 'react'
import logo from '../assets/pizzaLogo.png'
import {Link} from "react-router-dom"
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
    const [openLinks,setOpenLinks]=useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
  return (
    <>
    <div className='navbar'>
        <div className='leftside' id={openLinks?"open":"close"}>
            <img src={logo}/>
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
            
        </div>
    </div>
    </>
  )
}

export default Navbar