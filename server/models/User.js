const {Schema, model, ObjectId} = require("mongoose")
const User_testData = require("./UserData.json");

const User = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    login: {type: String, required: true, unique: true},
    age: {type: String},
    avatar: {type: String},
    films: [{type: ObjectId, ref: 'FilmsWithScore'}]
});

async function insertUserData(){
    await User.deleteMany();

    await User.insertMany(User_testData).then(function () {
        console.log('Users inserted');
    }).catch(function (error) {
        console.log(error);
    });
}

module.exports = model('User', User);