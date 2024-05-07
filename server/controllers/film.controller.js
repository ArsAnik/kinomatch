const Film = require("../models/Film");
const User = require("../models/User");
const Genre = require("../models/Genre");
const FilmWithScore = require("../models/FilmWithScore");
const {json} = require("express");

class FilmController {

    async getFilmInf(req, res){
        try {
            const {id} = req.params;

            const film = await Film.findById(id);

            res.send(film);

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

    async getFilmInf(req, res){
        try {
            const {id} = req.params;

            const film = await Film.findById(id);

            res.send(film);

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilms(req, res){
        try {
            const films = await Film.find({});

            res.send(films);

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

    async addWantToWatch(req, res){
        try {
            const userId = '661f9353b488840e7989ea47';
            const filmId = '661f6315877a005f3b04b41c';

            const scoredFilm = new FilmWithScore({
                film: filmId,
                isWatch: false,
                isWanted: true
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