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

            const films = await Film.find({"genres.name": { $all: genres }}).limit(10);

            res.send(films);
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilms(req, res){
        try {
            const films = await Film.find({}).limit(1);

            res.send(films[0]);
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
            const {userId, filmId} = req.body;

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