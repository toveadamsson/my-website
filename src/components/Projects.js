import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../css/projects.css'
import BeActiv from '../assets/beactiv.png'
export default function Projects () {
  // let navigate = useNavigate()
  // const project1 = () => {
  //   let path = `https://beactiv.surge.sh/`
  //   navigate(path)
  // }
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
            <Button
              href='https://beactiv.surge.sh/'
              target='_blank'
              variant='outline-danger'
            >
              View Project
            </Button>
            <p className='project-description'>
      
              Website for sport enthusiast, where to exercise for free in
              Barcelona. The creation of this project came when I noticed Google
              Maps lack information about the free sport facilities in
              Barcelona. I used open source API provided by the government but
              also added manual data. I collaborated with a UX/UI designer
              student and the result became quite more than expected. This code
              is a work in progress towards cleaner code and better structure-
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
