const {Schema, model} = require("mongoose")
const config = require("config");
const request = require("request");

const Genre = new Schema({
    name: {type: String, required: true, unique: true}
});

async function insertGenreData(){
    await Genre.deleteMany();

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

module.exports = model('Genre', Genre);