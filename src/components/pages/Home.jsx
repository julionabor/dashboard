import React from 'react'
import Sidebar from './Sidebar'
import Container from './Container'
import Navbar from './Navbar'
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='main-home'> 
        <Navbar />
        <div>
          <Sidebar />
          <Container />
        </div>
    </div>
  )
}

export default Home