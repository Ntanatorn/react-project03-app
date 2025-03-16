import React from 'react'
import { Link } from 'react-router-dom'
import Headder from './Headder'

function NavBar() {
  return (
    <>
    <div style={{textAlign:"center"}}>
        <h4>
            <Link to="/" style={{textDecoration:"none",margin:"5px"}}>Login</Link>
            <Link to="/home" style={{textDecoration:"none",margin:"5px"}}>Home</Link>
            <Link to="/about" style={{textDecoration:"none",margin:"5px"}}>About</Link>
            <Link to="/wow/contact" style={{textDecoration:"none",margin:"5px"}}>Contact</Link>
            <Link to="/sau/dti/regis" style={{textDecoration:"none",margin:"5px"}}>Register</Link>
        </h4>
        <Headder/>
        <hr />
    </div>
    </>
  )
}

export default NavBar