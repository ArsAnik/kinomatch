const Router = require("express");
const UserController = require('../controllers/user.controller');
const router = new Router();


router.get('/getUser/:id', UserController.getUser);
router.get('/findUser/:login', UserController.findUser);

router.patch('/updateUser', UserController.updateUser);
router.patch('/changeUserAvatar', UserController.changeUserAvatar);

module.exports = router;