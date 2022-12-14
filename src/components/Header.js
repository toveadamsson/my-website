import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header () {
  return (
    <Navbar
      className='naaaav ui'
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
    >
      <Navbar.Brand className='nav-title' href='/'>
     Tove Adamsson
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='/about'>about</Nav.Link>
          <Nav.Link href='/projects'>projects</Nav.Link>
          <Nav.Link href='/contact'>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
