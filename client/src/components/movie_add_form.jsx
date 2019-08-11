import React, { Component } from 'react'
import MoviesServices from '../services/movies.services'
import Modal from 'react-bootstrap/Modal'
import { Redirect } from 'react-router-dom'

class MovieAddForm extends Component {

    
    constructor() {
        super()
        this.state = {
            movie: {
                original_title: '',
                overview: '',
                poster_path: '',
                video: 'https://',

            },
            show: false,
            redirect: false
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.service = new MoviesServices()
        let movieId
    }


    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })

    handlechange = e => {
        const { name, value } = e.target
        this.setState({
            movie: {
                ...this.state.movie,
                [name]: value
            }
        })
    }

    setRedirect = () => {
        if(this.state.movie.original_title.length){
            setTimeout(() => {
                this.setState({
                    redirect: true,
                })
                setTimeout(() => {
                    this.handleClose()
                    this.setState({
                        movie: {
                            original_title: '',
                            overview: '',
                            poster_path: '',
                            video: 'https://',
            
                        }
                    })
                }, 300);

            }, 1000);
        }else{this.handleShow()}
    }

    handleSubmit=e=>{
        e.preventDefault()
        this.service.addMovie(this.state.movie)
            .then(response=> {
                this.movieId = response._id
            })
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



    render() {
        
        return (
            
            <div>
                {this.state.redirect?<Redirect to={`/movies/${this.movieId}`} />:null}
                <button className="btn btn-dark add-button " onClick={this.handleShow}>Añadir película</button>

                <Modal show={this.state.show} onHide={this.handleClose} className='modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva película</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input required onChange={this.handlechange} value={this.state.movie.original_title} type="text" className="form-control" id="original_title" name="original_title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <input onChange={this.handlechange} value={this.state.movie.overview} type="text" className="form-control" id="overview" name="overview" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="length">Enlace al trailer</label>
                                <input onChange={this.handlechange} value={this.state.movie.video} type="text" className="form-control" id="video" name="video" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="poster_path">Poster</label>
                                <input onChange={this.handleFileUpload} type="file" className="form-control" id="poster_path" name="poster_path" />
                            </div>
                            {this.state.movie.poster_path.length ? <button onClick={this.setRedirect} type="submit" className="btn btn-dark">Añadir</button> : null}
                        </form>
                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}

export default MovieAddForm