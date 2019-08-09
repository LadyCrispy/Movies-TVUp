import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Form, FormControl} from 'react-bootstrap'
import AddForm from '../components/movie_add_form'
import {Link} from 'react-router-dom'

export const NavBar =()=>{

    return(

        <Navbar bg="dark" expand="xl" fixed="top">
          <Navbar.Brand><Link to='/'>FilmFever</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav><Link  to='/'>Inicio</Link></Nav>
              <AddForm/>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
    
    )
}


