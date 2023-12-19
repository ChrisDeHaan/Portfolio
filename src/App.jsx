import { useState } from 'react'
import './App.css'

import { Projects1, Projects2 } from './components/Projects/'
import { AboutMe } from './components/AboutMe'
import { SpacerTop, SpacerBtm } from './components/Spacer'

function App() {

  return (
    <>
      <div className='container-main'>
        <header className='max-w'>nav links</header>
        <div className='max-w'>
          <AboutMe />
        </div>
        <h1 className='max-w'>Proficiencies</h1>
        <SpacerTop />
        <div className='cstm-bg'>
          <Projects1 />
          <Projects2 />
          <Projects1 />
          <Projects2 />
        </div>
        <SpacerBtm />
        <h1 className='max-w'>Contact Me</h1>
      </div>
    </>
  )
}

export default App
