import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Form, FormControl} from 'react-bootstrap'
import AddForm from '../components/movie_add_form'
import {Link} from 'react-router-dom'

export const NavBar =()=>{

    return(

        <Navbar bg="dark" expand="xl" fixed="top">
          <img src="/client/public/icon.jpg" alt="icon"/>
          <Navbar.Brand><Link to='/' className='nav-links title'>FilmFever</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav><Link  to='/' className='nav-links'>Inicio</Link></Nav>
          </Navbar.Collapse>
        </Navbar>
    
    )
}


