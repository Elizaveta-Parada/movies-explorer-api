const regexHttp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const {
  JWT_SECRET = 'secret-key',
  DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  PORT = 3000,
  NODE_ENV = 'dev',
} = process.env;

module.exports = {
  regexHttp,
  JWT_SECRET,
  DB_URL,
  PORT,
  NODE_ENV,
};
