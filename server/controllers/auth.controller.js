const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const config = require("config");

class AuthController {

    async registration(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка! ", errors});
            }

            const {email,name, login, password} = req.body;

            const userByEmail = await User.findOne({email});

            if (userByEmail !== null) {
                return res.status(400).json({message: `Данная почта уже зарегистрирована`});
            }

            const userByLogin = await User.findOne({login});

            if (userByLogin !== null) {
                return res.status(400).json({message: `Данный логин уже существует, выбирите другой`});
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = new User({email, name, login, password: hashPassword});
            await user.save();
            return res.json({message: "Пользователь успешно зарегистрирован"});

        } catch (e) {
            console.log(e);
            res.send({message: "Ошибка сервера"});
        }
    }

    async login(req, res) {
        try{
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка! ", errors});
            }

            const {login, password} = req.body;

            const user = await User.findOne({login});
            if (user === null) {
                return res.status(404).json({message: `Данный логин не существует`})
            }

            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                return res.status(400).json({message: `Неверный пароль` });
            }

            const token = jwt.sign({_id:user.id}, config.get("server.secretKey"),{expiresIn: "365d"});
            return res.json({
                message: "Успешный вход",
                token,
                user:{
                    id: user.id,
                    name: user.name,
                    login: user.login,
                    avatar: user.avatar
                }
            })

        } catch (e) {
            console.log(e);
            res.send({message: "Ошибка сервера"});
        }
    }

    async auth(req, res) {
        try{
            const user = await User.findOne({id:req.user.id})
            const token = jwt.sign({_id:user.id}, config.get("server.secretKey"),{expiresIn: "365d"});
            return res.json({
                token,
                user:{
                    id: user.id,
                    name: user.name,
                    login: user.login,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e);
            res.send({message: "Ошибка сервера"});
        }
    }
}

module.exports = new AuthController();