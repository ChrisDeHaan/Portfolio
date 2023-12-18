import { useState } from 'react'
import './App.css'

import { Projects1, Projects2 } from './components/Projects/'
import { AboutMe } from './components/AboutMe'

function App() {

  return (
    <>
      <div className='container-main'>
        <header>nav links</header>
        <AboutMe />
        <h1>Proficiencies</h1>
        <h1>Portfolio</h1>
        <div>
          <Projects1 />
          <Projects2 />
          <Projects1 />
          <Projects2 />
        </div>
        <h1>Contact Me</h1>
      </div>
    </>
  )
}

export default App
