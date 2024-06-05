const User = require("../models/User");
const FilmWithScore = require("../models/FilmWithScore");
const Film = require("../models/Film");
const Uuid = require('uuid');
const fs = require('fs');
const config = require("config");

class UserController {

    async findUser(req, res){
        try {
            const {login} = req.params;

            const user = await User.findOne({login: {$regex: /login/}});

            return res.send(user);
        } catch (e) {
            console.log(e);
            return res.send({message: "Ошибка сервера"});
        }
    }

    async updateUser(req, res){
        try {
            const {_id} = req.user;
            const {name} = req.body;

            if(!name || name === ''){
                return res.send({message: "Uncorrected request"});
            }

            const user = await User.findByIdAndUpdate(
                _id,
                {name: name}
            );

            return res.send({
                message: "Information updated successfully",
                user:{
                    id: user.id,
                    name: user.name,
                    login: user.login,
                    avatar: user.avatar
                }
            });

        } catch (e) {
            console.log(e);
            return res.send({message: "Ошибка сервера"});
        }
    }

    async changeUserAvatar(req, res){
        try {
            const {_id} = req.user;
            const file = req.files.file;

            const user = await User.findById(_id);
            const avatarName = Uuid.v4() + ".jpg";
            await file.mv(config.get('staticPath') + "\\" + avatarName);
            user.avatar = avatarName;
            await user.save();

            res.send({
                message: "Information updated successfully",
                user:{
                    id: user.id,
                    name: user.name,
                    login: user.login,
                    avatar: user.avatar
                }
            });
        } catch (e) {
            console.log(e);
            res.send({message: "Ошибка сервера"});
        }
    }
}

module.exports = new UserController();