import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/projects.css'
import BeActiv from '../assets/beactiv.png'
export default function Projects () {
  return (
    <div className='projects-container'>
      <div className='title'>
        <span className='underline--magical'>Projects</span>
      </div>
      <div className='individual-project'>
        <div className='projects'>
          <div className='project-stack'>
            <h1>BeActiv</h1>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Google Maps</li>
              <li>RESTful Api</li>
            </ul>
            <Button variant='outline-danger'>View Project</Button>
            <p className='project-description'>
              Website for sport enthusiast, where to exercise for free in
              Barcelona. I noticed that common platforms such as Google Maps
              lack information about the free sport facilitiesin Barcelona. This
              is the reason I chose to create my own platform where I could use
              tools such as open source API from the Barcelona government and
              combine it with manual added data. I collaborated with a UX/UI
              designer student and the result became quite more than expected.
              There's a lot of code in this project, I am working activaly to
              apply clean code principles to this project
            </p>
          </div>
        </div>
        <div className='project-image'>
          <img src={BeActiv} alt='' />
        </div>
      </div>
    </div>
  )
}
