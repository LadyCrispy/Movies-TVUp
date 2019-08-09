import React, { Component } from 'react'
import MoviesServices from '../services/movies.services'
import Modal from 'react-bootstrap/Modal'

class MovieAddForm extends Component {

    
    constructor() {
        super()
        this.state = {
            movie: {
                original_title: '',
                overview: '',
                poster_path: null,
                video: '',

            },
            show: false
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.service = new MoviesServices()
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

    handleSubmit = e => {
        e.preventDefault()
        const uploadData = new FormData();
        
        uploadData.append('original_title', this.state.movie.original_title)
        uploadData.append('overview', this.state.movie.overview)
        uploadData.append('poster_path', this.state.poster_path)
        uploadData.append('video', this.state.movie.video)

        this.service.addMovie(uploadData)
            .then(console.log('service'))
    }

    getFile = e => {
       e.preventDefault()
       this.setState({
           
           poster_path: e.target.files[0]
       })
    }



    render() {
        return (
            <div>

                <button className="btn btn-dark" onClick={this.handleShow}>Añadir película</button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva película</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input onChange={this.handlechange} value={this.state.movie.original_title} type="text" className="form-control" id="original_title" name="original_title" />
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
                                <input onChange={this.getFile} type="file" className="form-control" id="poster_path" name="poster_path" />
                            </div>
                            <button type="submit" className="btn btn-dark">Añadir</button>
                        </form>
                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}

export default MovieAddForm