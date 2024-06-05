const Router = require("express");
const AuthController = require('../controllers/auth.controller');
const {check} = require("express-validator");
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware')


router.post('/registration',
    [
        check('login', 'Поле "логин" не может быть пустым').notEmpty(),
        check('name', 'Поле "имя" не может быть пустым').notEmpty(),
        check('email', "Неккоректный email").isEmail(),
        check('password', "Пароль должен быть длиннее 3 символов").isLength({min:4}),
    ],
    AuthController.registration);

router.post('/login', [
        check('login', 'Поле "логин" не может быть пустым').notEmpty(),
        check('password', 'Поле "имя" не может быть пустым').notEmpty()
    ],
    AuthController.login);

router.get('/auth', authMiddleware, AuthController.auth);

module.exports = router;