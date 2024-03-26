const User = require("../models/Film");
const FilmWithScore = require("../models/FilmWithScore");

class UserController {

    async getUser(req, res){
        try {



        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async findUser(req, res){
        try {


        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async updateUser(req, res){
        try {



        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new UserController();