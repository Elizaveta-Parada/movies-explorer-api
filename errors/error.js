const ForbiddenError = require('./ForbiddenError');
const NotFoundError = require('./NotFoundError');

module.exports.movieNotFound = new NotFoundError('Фильм не найден');
module.exports.movieErrorDelete = new ForbiddenError('Попытка удалить фильм другого пользователя');
