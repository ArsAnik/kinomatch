const {Schema, model, ObjectId} = require("mongoose")

const Acting = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    birthday: {type: Date},
    photo: {type: String},
});

module.exports = model('Acting', Acting);