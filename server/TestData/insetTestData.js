const Film = require('../models/Film');
const Genre = require('../models/Genre');
const Acting = require('../models/Acting');
const User = require('../models/User');
const FilmWithScore = require('../models/FilmWithScore');

const filmData = require('./FilmData.json');
const genreData = require('./GenreData.json');
const actingData = require('./ActingData.json');
const userData = require('./UserData.json');
const filmWithScoreData = require('./FilmWithScoreData.json');

class insertTestData{

    async dropAllData(){
        try {
            await Film.deleteMany();
            await Genre.deleteMany();
            await Acting.deleteMany();
            await User.deleteMany();
            await FilmWithScore.deleteMany();
        }
        catch (e){
            console.log(e);
        }
    }

    async insertAllTestData(){

        await Genre.insertMany(genreData).then(function () {
            console.log("Test genre data inserted")
        }).catch(function (error) {
            console.log(error)
        });

        await Acting.insertMany(actingData).then(function () {
            console.log("Test acting data inserted")
        }).catch(function (error) {
            console.log(error)
        });
    }
}

module.exports = new insertTestData();