const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
<<<<<<< Updated upstream
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
=======
>>>>>>> Stashed changes
    password: {type: String, required: true},
    email: {type: String},
    login: {type: String, required: true, unique: true},
    age: {type: String},
    avatar: {type: String},
    films: [{type: ObjectId, ref: 'FilmsWithScore'}]
});

module.exports = model('User', User);