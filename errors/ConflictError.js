class ConflictError extends Error {
  constructor(message = 'Пользователь c таким email уже зарегестрирован') {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
