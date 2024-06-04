const Film = require("../models/Film");
const User = require("../models/User");
const Genre = require("../models/Genre");
const FilmWithScore = require("../models/FilmWithScore");
const {json} = require("express");

class FilmController {

    async getFilmInf(req, res){
        try {
            const {id} = req.params;

            const film = await Film.findById(id, "-persons");

            let genres = [];
            for (let i = 0; i < film.genres.length; ++i) {
                genres.push(film.genres[i].name);
            }


            res.send({
                id: film._id,
                name: film.name,
                description: film.description,
                poster: film.poster[0].previewUrl,
                genres: genres.join(", ")
            });
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilmActing(req, res) {
        try {
            const {id} = req.params;

            let acting = await Film.findById(id, "persons");
            acting = acting.persons.slice(0, 9);

            res.send({acting});
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilmByGenre(req, res){
        try {
            const genres = req.params.genres.split('&');

            const films = await Film.find({genres: genres});

            res.send(films);

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilmForUser(req, res){
        try {
            const userId = req.user._id;

            const user = await User.findOne({ _id: userId });
            const tuchedFilms = await FilmWithScore.find({ _id: user.films }).distinct('film');

            const films = await Film.find({ _id: { $nin: tuchedFilms } }).limit(1);

            let genres = [];

            for (let i = 0; i < films[0].genres.length; ++i) {
                genres.push(films[0].genres[i].name);
            }

            res.send({
                id: films[0].id,
                name: films[0].name,
                description: films[0].description,
                poster: films[0].poster[0].previewUrl,
                genres: genres.join(", ")
            });
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilmByYear(req, res){
        try {
            const {year} = req.params;

            const film = await Film.find({year: year});

            res.send(film);

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getGenres(req, res){
        try {

            const genres = await Genre.find();
            res.send({genres});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async addFilm(req, res){
        try {
            const {userId, filmId, filmState} = req.body;

            const scoredFilm = new FilmWithScore({
                film: filmId,
                isWanted: filmState
            });

            await scoredFilm.save();

            await User.findByIdAndUpdate(
                userId,
                {$addToSet: {films: scoredFilm}});

            res.send(scoredFilm);
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getUserFilms(req, res){
        try {
            const userId = '661f9353b488840e7989ea47';

            const userFilms = await User.findOne(
                {_id: userId},
                {films: 1}
            );

            res.send(userFilms);

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new FilmController();