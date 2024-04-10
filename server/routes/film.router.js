const Router = require("express");
const FilmController = require('../controllers/film.controller');
const router = new Router();


router.get('/getFilmFullInf/:id', FilmController.getFilmFullInf);
router.get('/getFilmShortInf/:id', FilmController.getFilmShortInf);
// router.get('/getFilm/:genres/:actors/:director', FilmController.getFilm);

router.get('/getGenres', FilmController.getGenres);
router.get('/getActing', FilmController.getActing);
router.get('/getActingInf/:id', FilmController.getActingInf);

router.post('/addWantToWatch', FilmController.addWantToWatch);
router.get('/getWantedFilms', FilmController.getWantedFilms);

module.exports = router;