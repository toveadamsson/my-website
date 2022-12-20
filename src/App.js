import React from 'react'
import './App.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App () {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <AboutMe />
      <Projects />
      {/* <Contact /> */}
    </div>
  )
}

export default App
