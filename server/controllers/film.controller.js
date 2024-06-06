const Film = require("../models/Film");
const User = require("../models/User");
const Genre = require("../models/Genre");
const FilmWithScore = require("../models/FilmWithScore");
const {json} = require("express");

class FilmController {

    async getInfFilm(req, res) {
        try {
            const {id} = req.params;

            let film = await Film.findById(id);

            if(Object.keys(film).length !== 0) {
                let genres = [];
                for (let i = 0; i < film.genres.length; ++i) {
                    genres.push(film.genres[i].name);
                }

                res.send({
                    id: film._id,
                    name: film.name,
                    description: film.description,
                    poster: film.poster[0].url,
                    genres: genres.join(", ")
                });
            }
            else{
                res.send({});
            }
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getFilmActing(req, res) {
        try {
            const {id} = req.params;
            const {number} = Number(req.params);

            let acting;

            if(number === 0){
                acting = await Film.findById(id, "persons");
                acting = acting.persons;
            }
            else{
                acting = await Film.findById(id, "persons").limit(number);
                acting = acting.persons.slice(0, number);
            }

            res.send({acting});
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getFilmByGenre(req, res){
        try {
            const userId = req.user._id;
            const genres = req.params.genres.split('&');

            const user = await User.findOne({ _id: userId });
            const tuchedFilms = await FilmWithScore.find({$and: [{ _id: {$in: user.films}}, {"genres.name": {$in: genres}}]}).distinct('film');

            let film = await Film.findOne({ _id: { $nin: tuchedFilms } });

            if(Object.keys(film).length !== 0) {
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
            }
            else{
                res.send({});
            }
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getFilmForUser(req, res){
        try {
            const userId = req.user._id;

            const user = await User.findOne({ _id: userId });
            const tuchedFilms = await FilmWithScore.find({ _id: {$in: user.films} }).distinct('film');

            const film = await Film.findOne({ _id: { $nin: tuchedFilms } });

            if(Object.keys(film).length !== 0) {
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
            }
            else{
                res.send({});
            }
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getFilmForTwoUsers(req, res){
        try {
            const userId = req.user._id;
            const secondUserId = req.body.secondUserId;

            const firstUser = await User.findOne({ _id: userId });
            const secondUser = await User.findOne({ _id: secondUserId });

            const tuchedFilms_1 = await FilmWithScore.find({ _id: {$in: firstUser.films}}).distinct('film');
            const tuchedFilms_2 = await FilmWithScore.find({ _id:  {$in: secondUser.films}}).distinct('film');
            const touchedFilms_both = Object.assign(tuchedFilms_1, tuchedFilms_2);

            const film = await Film.findOne({ _id: { $nin: touchedFilms_both } });

            if(Object.keys(film).length !== 0) {
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
            }
            else{
                res.send({});
            }
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getGenres(req, res){
        try {

            const genres = await Genre.find();
            res.send({genres});

        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getUserFilms(req, res){
        try {
            const userId = req.user._id;
            const isWatch = req.body.isWatch;

            const user = await User.findOne({_id: userId});
            const tuchedFilms_id = await FilmWithScore.find({$and: [{ _id: {$in: user.films}}, {isWatch: isWatch}, {isWanted: true}]}).distinct("film");

            const films = await Film.find({ _id: { $in: tuchedFilms_id } });

            for(let i = 0; i < films.length; ++i){
                films[i] = new Object({
                    id: films[i]._id,
                    name: films[i].name,
                    photo: films[i].poster[0].previewUrl
                });
            }
            res.send(films);
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async addFilm(req, res){
        try {
            const userId = req.user._id;
            const {filmId, isWanted, isWatch} = req.body;

            const scoredFilm = new FilmWithScore({
                film: filmId,
                isWanted: isWanted,
                isWatch: isWatch,

            });

            await scoredFilm.save();

            await User.findByIdAndUpdate(
                userId,
                {$addToSet: {films: scoredFilm}});

            res.send(scoredFilm);
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async editFilmStatus(req, res){
        try {
            const userId = req.user._id;
            const {filmId, isWanted, isWatch} = req.body;

            const user = await User.findOne({_id: userId});
            const filmWithScore_id = await FilmWithScore.find({$and: [{ _id: {$in: user.films}}, {film: filmId}]}).distinct("_id");

            const updated = await FilmWithScore.findByIdAndUpdate(filmWithScore_id, {isWanted, isWatch});
            res.send(updated);
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }
}

module.exports = new FilmController();