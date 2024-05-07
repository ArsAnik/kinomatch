const {Schema, model} = require("mongoose")

const Film = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    year: {type: Number},
    poster: [{type: String}],
    genres: [{type: String}],
    persons: [{type: Object}]
});

module.exports = model('Film', Film);