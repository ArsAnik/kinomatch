const Router = require("express");
const FilmController = require('../controllers/film.controller');
const authMiddleware = require("../middleware/auth.middleware");
const router = new Router();

router.get('/getFilmForUser', authMiddleware, FilmController.getFilmForUser);
router.post('/getFilmForTwoUsers', authMiddleware, FilmController.getFilmForTwoUsers);
router.post('/getUserFilms', authMiddleware, FilmController.getUserFilms);

router.get('/getInfFilm/:id', authMiddleware, FilmController.getInfFilm);
router.get('/getFilmActing/:id/:number', authMiddleware, FilmController.getFilmActing);
router.get('/getFilmByGenre/:genres', authMiddleware, FilmController.getFilmByGenre);

router.get('/getGenres', authMiddleware, FilmController.getGenres);
router.post('/addFilm', authMiddleware, FilmController.addFilm);
router.post('/editFilmStatus', authMiddleware, FilmController.editFilmStatus);

module.exports = router;