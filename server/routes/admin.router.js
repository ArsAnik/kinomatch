const Router = require("express");
const AdminController = require('../controllers/admin.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = new Router();


router.post('/registration', AdminController.registration);
router.post('/login', AdminController.login);

router.get('/getUsers', authMiddleware, AdminController.getUsers);
router.get('/getFilms', authMiddleware, AdminController.getFilms);
router.delete('/login', authMiddleware, AdminController.deleteUser);
router.post('/login', authMiddleware, AdminController.deleteFilm);

module.exports = router;