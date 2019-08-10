const express = require('express');
const router  = express.Router();
const Movie = require ('../models/movies.model')
const multer = require('multer')
const uploader = multer({dest: 'movies/'})


// GET movies list
router.get('/movies', (req, res) => {
    Movie.find()
    .then(data => res.json(data))
    .catch(err => console.log('Error:', err))
});

// GET movie detail
router.get('/movies/:id', (req, res) =>{
    Movie.findById(req.params.id)
        .then(data=> res.json(data))
        .catch(err=> res.status(400).json({errorMessage: 'Hubo un error, no se pudo añadir la película'}))
    
})

//POST delete movie
router.delete('/movies/:id', (req, res)=>{
    Movie.findByIdAndDelete(req.params.id)
        .then(theMovie=>{
            Movie.find()
                .then(data=>res.json(data))
        })
        .catch(err=> console.log(err))

})

//POST add new movie
router.post('/movies', (req, res)=>{
    console.log('Entrnado en el new movies')
    console.log(req.body)
    const newMovie = new Movie (req.body)
    newMovie.save()
        .then(data=> {
            console.log('newMovie created')
            res.json(data)
        })
        .catch(err=> res.status(400).json({errorMessage: 'Hubo un error, no se pudo añadir la película'}))
})

//POST edit movie
router.put('/movies/:id' , (req, res)=>{
    const {original_title, overview, poster_path, video}= req.body
   
    console.log(req.body, 'body', req.file, 'file')
        
    
        Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {original_title, overview, video, poster_path}}, {new: true})
                .then(movie=>{
                    console.log('movie updated')
                    res.json(movie)
                })
                .catch(err=>console.log(err))
    
    
})


module.exports = router;
