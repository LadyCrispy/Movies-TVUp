import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MoviesService from '../services/movies.services'
import {Accordion, Card, Button, Form} from 'react-bootstrap'

export default class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            movie: {} 
        }
        this.service = new MoviesService();
        
        let uploadData
    }
    
    componentDidMount(){
        this.service.movieDetails(this.props.match.params.id)
            .then(theMovie=>this.setState({
                movie: theMovie
            }))
    }

    handlechange = e => {
        const { name, value } = e.target
        this.setState({
            movie: {
                ...this.state.movie,
                [name]: value
            }
        })
    }

    
    handleSubmit=(e)=>{
        e.preventDefault()
        this.service.editTheMovie(this.state.movie._id, (this.state.movie))
            .then(x=>console.log('done'))
    }

    
    handleFileUpload = e => {

        this.uploadData = new FormData();
        this.uploadData.append("poster_path", e.target.files[0]);

        this.service.handleUpload(this.uploadData)
            .then(response => {
                console.log(response)
                this.setState({
                    movie: {
                        ...this.state.movie, poster_path: response.secure_url
                    }
                })
            })
            .catch(err => console.log(err))
    }

    hideBtn=()=>{
        setTimeout(() => {
            this.uploadData=0         
        }, 2000);

    }

    render(){
        return(
            
            <section>
                {this.state.movie? 
                <div className='detail'>
                    <div>
                        <figure>
                        <img src={this.state.movie.poster_path} alt={this.state.movie.original_title}/>
                        </figure>
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleFileUpload} type="file" name="poster_path" id="poster_path" placeholder='Elige imagen' /> <br />
                            { this.uploadData ? <button type='submit' onClick={this.hideBtn}>Cambiar imagen</button> : null}
                        </form>
                    </div>

                    <aside>
                        <h1>{this.state.movie.original_title}</h1> <br/>
                        <h3>Sinopsis:</h3>
                        <p>{this.state.movie.overview}</p>
                        <a className='btn btn-sm btn-outline-info detail-links' href={this.state.movie.video} target='_blank' rel="noopener noreferrer">Video</a>
                        <Link className='btn btn-sm btn-outline-secondary detail-links' to='/'>Volver</Link>
             
                        <Accordion bsPrefix='accordion'>
                            <Card className='edit-form'>
                              <Card.Header className='dark'>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className='button-edit top-button-edit save'>
                                  Editar
                                </Accordion.Toggle>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className='button-edit save'>
                                ✗
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0" >
                                <Form className='edit' onSubmit={this.handleSubmit} >
                                    <Form.Group htmlFor="original_title">
                                      <Form.Label>Título:</Form.Label>
                                      <Form.Control onChange={this.handlechange} as="textarea" rows="2" value={this.state.movie.original_title} name='original_title' id='original_title'/>
                                    </Form.Group>
                                    <Form.Group htmlFor="overview">
                                      <Form.Label>Sinopsis:</Form.Label>
                                      <Form.Control onChange={this.handlechange} as="textarea" rows="4" value={this.state.movie.overview} name='overview' id='overview'/>
                                    </Form.Group>
                                    <Form.Group htmlFor="video">
                                      <Form.Label>URL del vídeo:</Form.Label>
                                      <Form.Control onChange={this.handlechange} as="textarea" rows="2" value={this.state.movie.video} name='video' id='video'/>
                                    </Form.Group>
                                    <Accordion.Toggle className='btn btn-sm btn-outline-info detail-links save' as={Button} type='submit' variant="link" eventKey="0" >
                                    Guardar
                                    </Accordion.Toggle>
                                </Form>
                                
                              </Accordion.Collapse>
                            </Card>
                        </Accordion>

                              
                    </aside>

                </div>
            : 
            <div className='error'>
                <h1>La película que buscas no existe</h1>
                <img src="https://res.cloudinary.com/dgesryvti/image/upload/v1565341464/Movies_posters/oie_transparent_1_uo2oio.png" alt="errorimage"/><br/>
                <Link className='btn btn-sm btn-dark return' to='/'>Volver</Link>
    
            </div>
            
            }

            </section>        
        
        )
    }
}