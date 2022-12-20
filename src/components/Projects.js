import React from 'react'
import '../css/projects.css'
export default function Projects () {
  return (
    <div className='projects-container'>
      <div className='title'>
        <span className='underline--magical'>Projects</span>
      </div>
      <div className='projects'>
        <div className='project-stack'>
          <h1>BeActiv</h1>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>AWS</li>
            <li>Docker</li>
          </ul>
          <button className='button'>View Projects</button>
          <p className='project-description'></p>
        </div>
        <div className='project-image'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  )
}
