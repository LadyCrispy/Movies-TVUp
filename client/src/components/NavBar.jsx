import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import AddForm from '../components/movie_add_form'
import {Link} from 'react-router-dom'

export const NavBar =()=>{

    return(

        <Navbar bg="dark" expand="xl" fixed="top">
          <Navbar.Brand><Link to='/' className='nav-links title'>FilmFever</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <AddForm/>
          </Navbar.Collapse>
        </Navbar>
    
    )
}


