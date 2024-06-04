const Router = require("express");
const FilmController = require('../controllers/film.controller');
const authMiddleware = require("../middleware/auth.middleware");
const router = new Router();


router.get('/getFilmInf/:id', authMiddleware, FilmController.getFilmInf);
router.get('/getFilmActing/:id', authMiddleware, FilmController.getFilmActing);
router.get('/getFilmForUser', authMiddleware, FilmController.getFilmForUser);
router.get('/getFilmByGenre/:genres', FilmController.getFilmByGenre);
router.get('/getFilmByYear/:year', FilmController.getFilmByYear);

router.get('/getGenres', FilmController.getGenres);

router.post('/addWantToWatch', FilmController.addFilm);
router.get('/getUserFilms', FilmController.getUserFilms);

module.exports = router;