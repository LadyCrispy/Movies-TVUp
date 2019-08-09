import React, {Component} from 'react'
import MoviesServices from '../services/movies.services'
import { MoviesCard } from './cards/movies.cards';


class MoviesList extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            movies: [],
            search: '',
            filteredMovies: [],
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

    searchMovie =(e)=> {
        this.setState({ search: e.target.value })
        let searchMovie = this.state.movies.filter(movie => movie.original_title.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({ filteredMovies: searchMovie })
      }

    render(){
        return(
            <div className='container'>
 
                
                    <input onChange={this.searchMovie} type="text" placeholder='Buscar película' value={this.state.search} className='search-movie' id="search" name="search"/>
                

                <section className='hero'>
                    <video src="https://res.cloudinary.com/dgesryvti/video/upload/v1565296650/Movies_posters/y2mate.com_-_batman_vs_bane_the_dark_knight_rises_full_fight_1080p_hd_rDuetklFtDQ_1080p_vj40gk.mp4" playsInline autoPlay muted loop>video</video>
                    <h1>Nuestras películas</h1>

                </section>
                {/* <MovieAddForm className='add-btn'/> */}
                <div className='row movies-list'>

                    {
                    this.state.search.length ? 
                        this.state.filteredMovies.map((movie, idx)=> <MoviesCard {...movie} key={idx} delete={this.deleteMovie}/>) 
                        : 
                        this.state.movies.map((movie, idx)=> <MoviesCard {...movie} key={idx} delete={this.deleteMovie}/>) 
                    }
                </div>
            
            </div>
        )
    }
}

export default MoviesList