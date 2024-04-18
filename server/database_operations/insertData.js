const Film = require('../models/Film');
const User = require('../models/User');
const Genre = require('../models/Genre');
const FilmWithScore = require('../models/FilmWithScore');
const User_testData = require('../database_operations/UserData.json');
const config = require("config");
const request = require('request');

class insertData{

    async dropAllData(){
        try {
            await Film.deleteMany();
            await User.deleteMany();
            await Genre.deleteMany();
            await FilmWithScore.deleteMany();
        }
        catch (e){
            console.log(e);
        }
    }

    async insertFilmData(){
        let page = 1;
        let counter = 0;
        let limit = 250;

        let FilmOptions = {
            method: 'GET',
            url: `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=name&selectFields=description&selectFields=year&selectFields=genres&selectFields=persons&selectFields=poster&type=movie&rating.kp=6-10`,
            headers: {accept: 'application/json', 'X-API-KEY': config.get("kinopoiskAPI")}
        };

        async function insertFilmPage() {
            request(FilmOptions, async function (error, response, body) {
                if (error){
                    console.log(error);
                }
                else{
                    let films = JSON.parse(body);
                    for(let i = 0; i < films.limit; ++i){
                        await Film.collection.insertOne(films.docs[i]).then(function () {
                            counter += 1;
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                    console.log(counter + " films inserted at all.");
                }
            });
        }

        request(FilmOptions, async function (error, response, body) {
            if (error){
                console.log(error);
            }
            else{
                let inf = JSON.parse(body);
                for(let pg = 1; pg <= inf.pages; ++pg){
                    page = pg;
                    await insertFilmPage();
                }
            }
        });
    }

    async insertGenreData(){
        let GenreOptions = {
            method: 'GET',
            url: 'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
            headers: {accept: 'application/json', 'X-API-KEY': config.get("kinopoiskAPI")}
        };

        request(GenreOptions, async function (error, response, body) {
            if (error){
                console.log(error);
            }
            else{
                let genres = JSON.parse(body);
                await Genre.insertMany(genres).then(function () {
                    console.log('Genres inserted');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });
    }

    async insertUserData() {
        //await User.deleteMany();

        // await User.insertMany(User_testData).then(function () {
        //     console.log('Users inserted');
        // }).catch(function (error) {
        //     console.log(error);
        // });
    }
}

module.exports = new insertData();