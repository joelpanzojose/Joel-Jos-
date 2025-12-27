import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import AboutMe from './Components/About Me/AboutMe.jsx'

function App() {

  return (
    <div className="site-container">
      <Header />
      <div className="content">
          <Hero  />
      </div>
      <div className="content">
          <AboutMe />
      </div>
     
    </div>
  )
}

export default App
