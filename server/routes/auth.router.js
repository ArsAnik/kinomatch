const Router = require("express");
const AuthController = require('../controllers/auth.controller');
const {check} = require("express-validator");
const router = new Router();


router.post('/registration',
    [
        check('login', 'Login cannot be empty').notEmpty(),
        check('email', "Uncorrected email").isEmail(),
        check('password', "Password should be longer than 3 symbols").isLength({min:4}),
    ],
    AuthController.registration);

router.post('/login', [
        check('login', 'Login cannot be empty').notEmpty(),
        check('password', 'Password cannot be empty').notEmpty()
    ],
    AuthController.login);

module.exports = router;