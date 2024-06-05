const {Schema, model} = require("mongoose")
const config = require("config");
const request = require("request");
const Genre = require("./Genre");
const User = require("./User");
const User_testData = require("./UserData.json");

const Film = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    year: {type: Number},
    poster: [{type: Object}],
    genres: [{type: Object}],
    persons: [{type: Object}]
});

async function insertFilmData() {
    await Film.deleteMany();
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
            if (error) {
                console.log(error);
            } else {
                let films = JSON.parse(body);
                for (let i = 0; i < films.limit; ++i) {
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
        if (error) {
            console.log(error);
        } else {
            let inf = JSON.parse(body);
            for (let pg = 1; pg <= inf.pages; ++pg) {
                page = pg;
                await insertFilmPage();
            }
        }
    });
}

module.exports = model('Film', Film);