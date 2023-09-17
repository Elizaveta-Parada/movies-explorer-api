const regexHttp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = { regexHttp, DB_URL };
