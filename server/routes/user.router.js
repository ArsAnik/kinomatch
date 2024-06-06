const Router = require("express");
const UserController = require('../controllers/user.controller');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');

router.get('/findUser/:login', authMiddleware, UserController.findUser);

router.patch('/updateUser', authMiddleware, UserController.updateUser);
router.post('/changeUserAvatar', authMiddleware, UserController.changeUserAvatar);

module.exports = router;