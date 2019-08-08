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













// //POST edit movie
// router.post('/edit/:id' , (req, res, next)=>{
//     const update = {original_title, overview, poster_path, video, homepage}=req.body
//     Movie.findByIdAndUpdate(req.params.id, update, {new: true})
//         .then(movieUpdated=>{
//             console.log(req.body, 'succes')
//             res.json(movieUpdated)
//         })
//         .catch(err=>console.log(err))
// })

//POST add new movie
router.post('/movies', uploader.any(), (req, res)=>{
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
    const {original_title, overview, video}= req.body
    const poster_path = req.file
    console.log('hola', req.body)
    if(req.file){
        Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {original_title, overview, poster_path, video}}, {new: true})
            .then(movie=>{
                console.log('movie updated')
                res.json(movie)
            })
            .catch(err=>console.log(err))
            // .catch(err=>res.status(200).json({errorMessage: 'No es posible actualizar la información'}))
    }else{
        Movie.update({_id: req.params.id}, {$set: {original_title, overview, video}}, {new: true})
        .then(movie=>{
            console.log('movie updated')
            res.json(movie)
        })
        .catch(err=>console.log(err))
        // .catch(err=>res.status(200).json({errorMessage: 'No es posible actualizar la información'}))
    }
})

router.post('/upload', uploader.single("poster_path"), (req, res, next) => {

    if (!req.file) { 
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({ secure_url: req.file.secure_url });
})

module.exports = router;
