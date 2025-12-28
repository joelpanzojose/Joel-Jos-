import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import AboutMe from './Components/About Me/AboutMe.jsx'
import Project from './Components/Projectos/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'

import image from './assets/img/bg.png'
function App() {

  return (
    <div className="site-container">
      <Header />

      <div className="content">
          <Hero  />
      </div>
  {/* ========================================== */}
      <div className="content">
          <AboutMe />
      </div>
    {/* ============================================ */}
      <div className="content projects-section">
          <Project />
      </div>
    {/* ================================================ */}
      <div className="content">
          <Contact />
      </div>
    </div>
  )
}

export default App
