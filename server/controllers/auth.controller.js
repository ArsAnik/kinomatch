const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const config = require("nodemon/lib/config");

class AuthController {

    async registration(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrected request", errors});
            }

            const {email,name, login, password} = req.body;

            const userByEmail = await User.findOne({email});

            if (userByEmail !== null) {
                return res.status(400).json({message: `User with email ${email} already exist`});
            }

            const userByName = await User.findOne({name});

            const userByLogin = await User.findOne({login});

            if (userByLogin !== null) {
                return res.status(400).json({message: `User with login ${login} already exist`});
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = new User({email, name, login, password: hashPassword});
            await user.save();
            return res.json({message: "User was successfully created"});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async login(req, res) {
        try{
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrected request", errors});
            }

            const {login, password} = req.body;

            const user = await User.findOne({login});
            if (user === null) {
                return res.status(404).json({message: `User with login ${login} don't exist`})
            }

            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                return res.status(400).json({error: `Wrong password` });
            }

            return res.json({message: "User logged in"});

            const token = jwt.sign({_id:user.id}, config.get("secretKey"),{expiresIn: "1h"});
            return res.json({
                token,
                user:{
                    id: user.id,
                    name: user.name,
                }
            })

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }

    async auth(req, res) {
        try{
            const user = await User.findOne({id:req.user.id})
            const token = jwt.sign({_id:user.id}, config.get("secretKey"),{expiresIn: "1h"});
            return res.json({
                token,
                user:{
                    id: user.id,
                    name: user.name,
                }
            })
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new AuthController();