import React from 'react'
import "../css/skills.css"
import ProfilePhoto from "../assets/profilfoto.jpeg"
export default function Skills () {
  return (
    <div className='main-component'>
      <div className='title'>
        {/* <h1>My Skills</h1> */}
        <span>My</span>
        <span className='underline--magical'>Skills</span>
        <img src={ProfilePhoto} alt='tove adamsson' />
      </div>
      <div className='display-skills'>
        <div className='each-height'>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>MongoDB</li>
            <li>Postman</li>
            <li>RESTful API</li>
            <li>Git</li>
            <li>Github</li>
            <li>Bitbucket</li>
            <li>Jenkins</li>
            <li>Jira</li>
            <li>Google Suite</li>
          </ul>
        </div>
        <div className='about-me'>
          <h2>I always look for new tools to enhance my creative toolbox</h2>
          <p>
            What I've learned about myself, is that I truly enjoy the results of
            my work. Even when at times it seems like taking one step forward
            and two step back, when I solved the issue, I feel great
            satisfaction and motivation to keep going.
          </p>
        </div>
      </div>
    </div>
  )
}
