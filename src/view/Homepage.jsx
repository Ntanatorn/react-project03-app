import React from 'react'
import NavBar from '../components/NavBar'
import Footter from '../components/footter'
import Piccrad from '../components/piccrad'
import pic1 from '../assets/pic1.png.png'
import pic2 from '../assets/pic2.png.png'
import pic3 from '../assets/pic3.png.png'
function Homepage() {
  return (
    <>
    <NavBar/>
    <h1>Home page</h1>
    <Piccrad showimg={pic1} wi={"100px"}/>
    <br />
    <Piccrad showimg={pic2} wi={"50px"}/>
    <br />
    <Piccrad showimg={pic3} wi={"150px"}/>
    <Footter/>
    </>
  )
}

export default Homepage