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
                
                <figure>
                    <img src={this.state.movie.poster_path} alt={this.state.movie.original_title}/>
                </figure>

                <aside>
                    <p>Título: {this.state.movie.original_title}</p>
                    <p>Sinopsis: {this.state.movie.overview}</p>
                    <a className='btn btn-sm btn-outline-info' href={this.state.movie.video} target='_blank' rel="noopener noreferrer">Video</a>
                    <MovieEditForm {...this.state}/>
                    <Link className='btn btn-sm btn-outline-dark' to='/'>Volver</Link>
                </aside>

            </section>        
        
        )
    }
}