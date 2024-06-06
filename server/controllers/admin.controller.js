const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const Film = require("../models/Film");

class AuthController {

    async registration(req, res) {
        try {
            const {login, password} = req.body;

            const hashPassword = await bcrypt.hash(password, 5);
            const admin = new Admin({login, password: hashPassword});
            await admin.save();
            return res.json({message: "Админ успешно зарегистрирован"});
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async login(req, res) {
        try{
            const {login, password} = req.body;

            const admin = await Admin.findOne({login});

            if (admin === null) {
                return res.status(404).json({message: `Данный логин не существует`})
            }

            const isValidPassword = bcrypt.compareSync(password, admin.password);
            if (!isValidPassword) {
                return res.status(400).json({message: `Неверный пароль` });
            }

            const token = jwt.sign({_id:admin.id}, config.get("server.secretKey"),{expiresIn: "365d"});
            return res.json({
                message: "Успешный вход",
                token,
                admin:{
                    id: admin.id,
                    login: admin.login,
                }
            })

        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getUsers(req, res){
        try {
            const users = await User.find({});

            for(let i = 0; i < users.length; ++i){
                users[i] = new Object({
                    id: users[i]._id,
                    name: users[i].name,
                    login: users[i].login,
                    email: users[i].email,
                    avatar: users[i].avatar
                });
            }

            return res.send(users);
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getFilms(req, res){
        try {
            const {page} = req.body;
            const films = await Film.find({}).skip(page * 10).limit(10);

            for(let i = 0; i < films.length; ++i){
                films[i] = new Object({
                    id: films[i]._id,
                    name: films[i].name,
                    description: films[i].description,
                    photo: films[i].poster[0].previewUrl
                });
            }

            return res.send(films);
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async getFilmsPages(req, res){
        try {
            const countFilms = await Film.estimatedDocumentCount();
            return res.send(Math.ceil((countFilms / 10)).toString());
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async deleteUser(req, res){
        try {
            const id = req.body.userId;
            await User.deleteOne({ _id: id });

            return res.send({message: "Пользователь успешно удалён"});
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }

    async deleteFilm(req, res){
        try {
            const {filmId} = req.body;
            await Film.deleteOne({ _id: filmId });

            return res.send({message: "Фильм успешно удалён"});
        } catch (e) {
            return res.status(400).send({message: "Ошибка сервера"});
        }
    }
}

module.exports = new AuthController();