import React from 'react'
import '../css/about.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function About () {
  return (
    <div className='about'>
      <h1>Hi, I'm Tove | </h1>
      <h1 className='underline--magical'>Software Engineer</h1>

      <div className='logo-continer'>
        <a href='https://www.linkedin.com/in/toveadamsson/'>
          <FontAwesomeIcon icon={faLinkedin} className='logo' />
        </a>
        <a href='https://github.com/toveadamsson/'>
          <FontAwesomeIcon icon={faGithub} className='logo' />
        </a>
        <a href='mailto:toveadamsson@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} className='logo' />
        </a>
      </div>
      <div>
        <p>
          I love exloring and creating &#127757; I'm curious by nature &#128300; and
          maybe my house is filled with my own ceramics &#128513;
        </p>
      </div>
    </div>
  )
}

