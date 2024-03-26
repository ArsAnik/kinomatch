const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

class AuthController {

    async registration(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrected request", errors});
            }

            const {email, login, password} = req.body;

            const userByEmail = await User.findOne({email});

            if (userByEmail !== null) {
                return res.status(400).json({message: `User with email ${email} already exist`});
            }

            const userByLogin = await User.findOne({login});

            if (userByLogin !== null) {
                return res.status(400).json({message: `User with login ${login} already exist`});
            }

            const hashPassword = await bcrypt.hash(password, 15);
            const user = new User({email, login, password: hashPassword});
            await user.save();
            return res.json({message: "User was successfully created"});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});;
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
                return res.status(400).json({message: `User with login ${login} don't exist`})
            }

            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                return res.json({ is_error: true, error: `Wrong password` });
            }

            return res.json({message: "User logged in"});

        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    }
}

module.exports = new AuthController();