const Router = require("express");
const FilmController = require('../controllers/film.controller');
const router = new Router();


router.get('/getFilmInf/:id', FilmController.getFilmInf);
router.get('/getFilms', FilmController.getFilms);
router.get('/getFilmByGenre/:genres', FilmController.getFilmByGenre);
router.get('/getFilmByYear/:year', FilmController.getFilmByYear);

router.get('/getGenres', FilmController.getGenres);

router.post('/addWantToWatch', FilmController.addWantToWatch);
router.get('/getUserFilms', FilmController.getUserFilms);

module.exports = router;