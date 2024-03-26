const {Schema, model, ObjectId} = require("mongoose")

const FilmWithScore = new Schema({
    film: {type: ObjectId, ref: 'Film'},
    score: {type: Number, min: 0, max: 10}
});

module.exports = model('FilmWithScore', FilmWithScore);