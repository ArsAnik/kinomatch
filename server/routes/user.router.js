const Router = require("express");
const UserController = require('../controllers/user.controller');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');


router.get('/getUser/:id', UserController.getUser);
router.get('/findUser/:login', UserController.findUser);

router.patch('/updateUser', UserController.updateUser);
router.post('/changeUserAvatar', authMiddleware, UserController.changeUserAvatar);

module.exports = router;