const {Schema, model, ObjectId} = require("mongoose")

const Film = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    year: {type: Date},
    cover: {type: String},
    genres: [{type: ObjectId, ref: 'Genre'}],
    actors: [{type: ObjectId, ref: 'Acting'}],
    director: {type: ObjectId, ref: 'Acting'}
});

module.exports = model('Film', Film);