import React, {Component} from 'react'
import MoviesServices from '../services/movies.services'
import { MoviesCard } from './cards/movies.cards';
import MovieAddForm from './movie_add_form'
import {NavBar} from './NavBar'


class MoviesList extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            movies: [],
            deleted: false
        }

        this.service = new MoviesServices()
    }    
    
    componentDidMount(){
        this.service.getAllMovies()
            .then(movies=>this.setState({
                movies: movies
            }))
    }


    deleteMovie = id =>{
        this.service.deleteTheMovie(id)
            .then(x=>{
               const peli= this.state.movies.filter(movie=> movie['_id']!==id)
               this.setState({
                   movies: peli
               })
            })
    }


    render(){
        return(
            <div className='container'>
                <section className='hero'>
                    <video src="https://res.cloudinary.com/dgesryvti/video/upload/v1565296650/Movies_posters/y2mate.com_-_batman_vs_bane_the_dark_knight_rises_full_fight_1080p_hd_rDuetklFtDQ_1080p_vj40gk.mp4" playsInline autoPlay muted loop>video</video>
                    <h1>Listado de películas</h1>

                </section>
                {/* <MovieAddForm className='add-btn'/> */}
                <div className='row movies-list'>
                    {this.state.movies ? this.state.movies.map((movie, idx)=> <MoviesCard {...movie} key={idx} delete={this.deleteMovie}/>) : null}
                </div>
            
            </div>
        )
    }
}

export default MoviesList