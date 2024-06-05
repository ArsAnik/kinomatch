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
            console.log(e);
            res.send({message: "Ошибка сервера"});
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
                return res.status(400).json({error: `Неверный пароль` });
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
            console.log(e);
            res.send({message: "Ошибка сервера"});
        }
    }

    async getUsers(req, res){
        try {
            const users = await User.find({});

            return res.send(users);
        } catch (e) {
            console.log(e);
            return res.send({message: "Ошибка сервера"});
        }
    }

    async getFilms(req, res){
        try {
            const {page} = req.body;
            const films = await Film.find({}).skip(page * 10).limit(10);

            return res.send(films);
        } catch (e) {
            console.log(e);
            return res.send({message: "Ошибка сервера"});
        }
    }

    async deleteUser(req, res){
        try {
            const {id} = req.body;
            await User.deleteOne({ _id: id });

            return res.send({message: "Пользователь успешно удалён"});
        } catch (e) {
            console.log(e);
            return res.send({message: "Ошибка сервера"});
        }
    }

    async deleteFilm(req, res){
        try {
            const {id} = req.body;
            await Film.deleteOne({ _id: id });

            return res.send({message: "Фильм успешно удалён"});
        } catch (e) {
            console.log(e);
            return res.send({message: "Ошибка сервера"});
        }
    }
}

module.exports = new AuthController();