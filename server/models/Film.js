const {Schema, model} = require("mongoose")

const Film = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    year: {type: Number},
    poster: [{type: Object}],
    genres: [{type: Object}],
    persons: [{type: Object}]
});

module.exports = model('Film', Film);