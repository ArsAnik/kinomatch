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

    async getFilmsForUser(req, res){
        try {
            //const userId = req.body.id;
            const userId = '665c72fef7b768b3aedd6267';

            const user = await User.findOne({ _id: userId });
            console.log(user);
            const tuchedFilms = await FilmWithScore.find({ _id: user.films }).distinct('film');

            const films = await Film.find({ _id: { $nin: tuchedFilms } }).limit(10);

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