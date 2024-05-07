const User = require("../models/Film");
const FilmWithScore = require("../models/FilmWithScore");
const Film = require("../models/Film");
const Uuid = require('uuid');
const fs = require('fs');
const config = require("config");

class UserController {

    async getUser(req, res){
        try {
            const {id} = req.params;

            const user = await User.find();

            res.send(user);
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async findUser(req, res){
        try {
            const {login} = req.params;

            const user = await User.findOne({login: {$regex: /login/}});

            res.send(user);
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async updateUser(req, res){
        try {
            const {id} = req.user;
            const {updates} = req.body;

            const user = await User.findOneAndUpdate(
                {_id: id},
                {updates}
            );

            res.send(user);

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async changeUserAvatar(req, res){
        try {
            const {id} = req.user;
            const {file} = req.files;

            const user = await User.findById(id);
            const avatarName = Uuid.v4() + ".jpg";
            await file.mv(config.get('staticPath') + "\\" + avatarName);
            user.avatar = avatarName;
            await user.save();

            res.send(user);
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new UserController();