const router = require('express').Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movies');
const { movieAddValidator, movieDeleteValidator } = require('../middlewares/validator');

router.get('/', getMovies);
router.post('/', movieAddValidator, addMovie);
router.delete('/:movieId', movieDeleteValidator, deleteMovie);

module.exports = router;
