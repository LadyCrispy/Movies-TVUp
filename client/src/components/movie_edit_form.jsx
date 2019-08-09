import React, { Component } from 'react'
import MoviesServices from '../services/movies.services'
import Modal from 'react-bootstrap/Modal'


class MovieEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: {
                original_title: '',
                overview: '',
                poster_path: '',
                video: ''
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
        this.service.editTheMovie(this.props.movie._id, this.state.movie)
            .then(x => window.location.href = `/movies/${this.props.movie._id}`)
    }

    handleFileUpload = e => {
        const uploadData = new FormData();
        uploadData.append("poster_path", e.target.files[0]);
        console.log(e.target, 'e.target')
        this.service.handleUpload(uploadData)
            .then(response => {
                this.setState({
                    movie: {
                        ...this.state.movie, poster_path: response.secure_url
                    }
                })
                console.log(response.secure_url, 'response')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            {console.log(this.props.movie)}

                <button className="btn btn-outline-secondary detail-links" onClick={this.handleShow}>Editar</button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar película</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input onChange={this.handlechange} value={this.state.movie.original_title} type="text" className="form-control" id="original_title" name="original_title" placeholder={this.state.movie.original_title}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <input onChange={this.handlechange} value={this.state.movie.overview} type="text" className="form-control" id="overview" name="overview" placeholder={this.props.overview}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="length">Enlace al trailer</label>
                                <input onChange={this.handlechange} value={this.state.movie.video} type="text" className="form-control" id="video" name="video" placeholder={this.props.video}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="poster_path">Poster</label>
                                <input onChange={this.handleFileUpload} type="file" className="form-control" id="poster_path" name="poster_path" />
                            </div>
                            <button type="submit" className="btn btn-dark">Guardar cambios</button>
                        </form>
                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}

export default MovieEditForm