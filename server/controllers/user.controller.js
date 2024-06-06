const User = require("../models/User");
const FilmWithScore = require("../models/FilmWithScore");
const Film = require("../models/Film");
const Uuid = require('uuid');
const fs = require('fs');
const config = require("config");

class UserController {

    async findUser(req, res){
        try {
            const userId = req.user._id;
            const {login} = req.params;

            const user = await User.find({$and: [{login: { $regex: login}}, {_id: {$nin: [userId]}}] });

            console.log(user);

            return res.send(user);
        } catch (e) {
            console.log(e);
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async updateUser(req, res){
        try {
            const {_id} = req.user;
            const {name} = req.body;

            if(!name || name === ''){
                return res.status(404).send({message: "Некорректное имя"});
            }

            const user = await User.findByIdAndUpdate(
                _id,
                {name: name}
            );

            return res.send({
                message: "Информация успешно обновлена",
                user:{
                    id: user.id,
                    name: user.name,
                    login: user.login,
                    avatar: user.avatar
                }
            });

        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
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
                message: "Информация успешно обновлена",
                user:{
                    id: user.id,
                    name: user.name,
                    login: user.login,
                    avatar: user.avatar
                }
            });
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }
}

module.exports = new UserController();