const Router = require("express");
const AdminController = require('../controllers/admin.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = new Router();


router.post('/registration', AdminController.registration);
router.post('/login', AdminController.login);

router.get('/getUsers', authMiddleware, AdminController.getUsers);
router.post('/getFilms', authMiddleware, AdminController.getFilms);
router.get('/getFilmsPages', authMiddleware, AdminController.getFilmsPages);
router.post('/deleteUser', authMiddleware, AdminController.deleteUser);
router.post('/deleteFilm', authMiddleware, AdminController.deleteFilm);
router.post('/login', authMiddleware, AdminController.deleteFilm);

module.exports = router;