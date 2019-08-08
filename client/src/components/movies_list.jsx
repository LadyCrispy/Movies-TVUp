import React, {Component} from 'react'
import MoviesServices from '../services/movies.services'
import { MoviesCard } from './cards/movies.cards';
import MovieAddForm from './movie_add_form'


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


    // isDeleted=(movies)=>{
    //    movies[1][id]
    //     this.setState({
    //         movies: movies
    //     })
    // }

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

                <h1>Listado de películas</h1>
                <MovieAddForm/>
                <div className='row movies-list'>
                    {this.state.movies ? this.state.movies.map((movie, idx)=> <MoviesCard {...movie} key={idx} delete={this.deleteMovie}/>) : null}
                </div>
            
            </div>
        )
    }
}

export default MoviesList