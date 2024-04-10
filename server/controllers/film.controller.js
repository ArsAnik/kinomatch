const Film = require("../models/Film");
const FilmWithScore = require("../models/FilmWithScore");

class FilmController {

    async getFilmFullInf(req, res){
        try {

            const {id} = req.params.id;

            const film = await Film.findOne({id});

            const films = await Film.find();

            res.send({film, films});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getFilmShortInf(req, res){
        try {

            const {id} = req.params.id;

            const film = await Film.find({_id: id}, {name: true, description: true, cover: true});

            const films = await Film.find();

            res.send({film, films});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    // async getFilm(req, res){
    //     try {
    //         const {genre} = req.params.genre;
    //         const {actor} = req.params.actor;
    //         const {director} = req.params.director;
    //
    //         const film = await Film.find({genre: genre, acting: });
    //
    //         res.send();
    //
    //     } catch (e) {
    //         console.log(e);
    //         res.send({message: "Server error"});
    //     }
    // }

    async getGenres(req, res){
        try {

            const genres = await Genre.find({_id: id});
            res.send({genres});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getActing(req, res){
        try {

            const acting = await Acting.find({}, {name: true, photo: true});
            res.send({acting});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getActingInf(req, res){
        try {
            const {id} = req.params;

            const actingInf = await Acting.findById(id);
            console.log(actingInf);
            res.send({actingInf});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async addWantToWatch(req, res){
        try {

            const userId = 1;
            const {film} = req.body;



        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async getWantedFilms(req, res){
        try {



        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new FilmController();