import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MoviesService from '../services/movies.services'
import MovieEditForm from './movie_edit_form'

export default class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            movie: {} 
        }
        this.service = new MoviesService()
    }

    componentDidMount(){
        this.service.movieDetails(this.props.match.params.id)
            .then(theMovie=>this.setState({
                movie: theMovie
            }))
    }

    render(){
        return(
            
            <section>
                {this.state.movie? 
                <div className='detail'>
                    <figure>
                    <img src={this.state.movie.poster_path} alt={this.state.movie.original_title}/>
                    </figure>

                    <aside>
                        {/* <h3>Título:</h3> */}
                        <h1>{this.state.movie.original_title}</h1> <br/>
                        <h3>Sinopsis:</h3>
                        <p>{this.state.movie.overview}</p>
                        <a className='btn btn-sm btn-outline-info detail-links' href={this.state.movie.video} target='_blank' rel="noopener noreferrer">Video</a>
                        <MovieEditForm {...this.state} className='detail-links'/>
                        <Link className='btn btn-sm btn-outline-secondary detail-links' to='/'>Volver</Link>
                    </aside>

                </div>
            : 
            <div className='error'>
                <h1>La película que buscas no existe</h1>
                <img src="https://res.cloudinary.com/dgesryvti/image/upload/v1565341464/Movies_posters/oie_transparent_1_uo2oio.png" alt="errorimage"/>
                <Link className='btn btn-sm btn-dark' to='/'>Volver</Link>
    
            </div>
            
            }

            </section>        
        
        )
    }
}