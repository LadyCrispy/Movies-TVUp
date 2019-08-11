import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

export const MoviesCard= (props) =>{

    return(
        <Card bg='secondary' className='movie-card'>
        <Card.Img variant="top" src={props.poster_path} alt={props.original_title} />
        <Card.Body>
            <Card.Title>{props.original_title}</Card.Title>
            <Link className="card-btn btn btn-md btn-dark" to={`/movies/${props._id}`}> Detalles </Link>
            <Button variant="danger" onClick={()=>props.delete(props._id)}>Eliminar</Button>
            
        </Card.Body>
        </Card>
    )
}

    