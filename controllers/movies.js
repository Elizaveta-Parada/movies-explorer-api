const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movie) => res.send(movie))
    .catch(next);
};

module.exports.addMovie = (req, res, next) => {
  const {
    country, director, duration, year,
    description, image, trailerLink, thumbnail, movieId, nameRU, nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new ValidationError(`${Object.values(err.errors).map(() => err.message).join(', ')}`));
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  const removeCard = () => {
    Movie.findByIdAndRemove(movieId)
      .then(() => {
        res.send({ message: 'Фильм удален' });
      })
      .catch(next);
  };
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм не найден');
      }
      if (req.user._id === movie.owner.toString()) {
        return removeCard();
      }
      throw new ForbiddenError('Попытка удалить фильм другого пользователя');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new ValidationError('Введены не корректные данные'));
      }
      return next(err);
    });
};
