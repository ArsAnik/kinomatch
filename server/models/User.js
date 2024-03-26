const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    login: {type: String, required: true},
    age: {type: String},
    avatar: {type: String},
    films: [{type: ObjectId, ref: 'FilmsWithScore'}]
});

module.exports = model('User', User);