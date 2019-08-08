import axios from 'axios'

export default class services {

    constructor() {
  
      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}api`,
        withCredentials: true
      })
    }
  
    getAllMovies = () => {
      return this.service.get(`/movies`)
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    movieDetails = id =>{
      return this.service.get(`/movies/${id}`)
        .then(res=>res.data)
        .catch(err=> console.log(err))
    }

    deleteTheMovie = id =>{
      return this.service.delete(`/movies/${id}`)
        .then(res=> res.data)
        .catch(err=> alert(err))
    }

    editTheMovie = (id, movieUpdated) =>{
      return this.service.put(`/edit/${id}`, movieUpdated)
        .then(res=> res.data)
        .catch(err=>console.log(err))
    }

    addMovie = movie => {
      return this.service.post('/movies', movie)
          .then(res => res.data)
          .catch(err => console.log(err))
    }


}    