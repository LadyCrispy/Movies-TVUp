const mongoose=require('mongoose')
const Schema = mongoose.Schema

const movieSchema= new Schema({
  original_title: String,
  overview: String,
  poster_path: String,
  video: String
}, {
  timestamps: true
})


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie

