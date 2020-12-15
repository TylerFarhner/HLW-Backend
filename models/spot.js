const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: Number, required: true},
    location: { type: String, required: true },
    state: { type: String, required: true },
})

module.exports = mongoose.model('Spot', spotSchema)