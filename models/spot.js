const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema({
    name: String,
    description: String,
    difficulty: Number,
    location: String,
    state: String
})

module.exports = mongoose.model('Spot', spotSchema)