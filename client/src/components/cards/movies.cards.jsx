import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MoviesService from '../../services/movies.services'


export class MoviesCard extends Component{
    constructor(props){
        super(props)

        this.service = new MoviesService()

    }

    deleteMovie=()=>{
        this.service.deleteTheMovie(this.props._id)
            .then(movies=>{
                console.log('done')
                this.props.isDeleted(movies)
            })
    }

    //Cambiar el borrado al padre



    render(){
        return(
            <div className="col-lg-3 col-md-4 col-sm-6">
             <article className="card">
                 <img className="card-img-top" src={this.props.poster_path} alt={this.props.original_title} />
                 <header className="card-body">
                     <h5 className="card-title">{this.props.original_title}</h5>
                     <Link className="btn btn-sm btn-outline-dark" to={`/movies/${this.props._id}`}> Ver detalles </Link>
                     <button className='btn btn-sm btn-outline-dark' onClick={this.deleteMovie}>Eliminar</button>
                 </header>
             </article>
            </div>
        )
    }
}