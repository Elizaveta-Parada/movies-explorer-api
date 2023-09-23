const { celebrate, Joi } = require('celebrate');
const { regexHttp } = require('../utils/constants');

const signupValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      'string.empty': 'Поле "name" должно быть заполнено',
      'string.min': 'Поле "name" должно быть не менее 2 символов',
      'string.max': 'Поле "name" должно быть не более 30 символов',
      'any.required': 'Поле "name" обязательное для заполнения',
    }),
    email:
    Joi.string().email().required().messages({
      'string.empty': 'Поле "email" должно быть заполнено',
      'any.required': 'Поле "email" обязательное для заполнения',
      'string.email': 'Поле "email" содержит некорректные данные',
    }),
    password:
    Joi.string().required().messages({
      'string.empty': 'Введите пароль',
      'any.required': 'Поле "password" обязательное для заполнения',
    }),
  }),
});

const signinValidator = celebrate({
  body: Joi.object().keys({
    email:
    Joi.string().email().required().messages({
      'string.empty': 'Поле "email" должно быть заполнено',
      'any.required': 'Поле "email" обязательное для заполнения',
      'string.email': 'Поле "email" содержит некорректные данные',
    }),
    password:
    Joi.string().required().messages({
      'string.empty': 'Введите пароль',
      'any.required': 'Поле "password" обязательное для заполнения',
    }),
  }),
});

const userUpdateValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.empty': 'Поле "name" должно быть заполнено',
        'string.min': 'Поле "name" должно быть не менее 2 символов',
        'string.max': 'Поле "name" должно быть не более 30 символов',
        'any.required': 'Поле "name" обязательное для заполнения',
      }),
    email:
      Joi.string().email().required().messages({
        'string.empty': 'Поле "email" должно быть заполнено',
        'any.required': 'Поле "email" обязательное для заполнения',
        'string.email': 'Поле "email" содержит некорректные данные',
      }),
  }),
});

const movieAddValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'string.empty': 'Поле "country" должно быть заполнено',
      'any.required': 'Поле "country" обязательное для заполнения',
    }),
    director: Joi.string().required().messages({
      'string.empty': 'Поле "director" должно быть заполнено',
      'any.required': 'Поле "director" обязательное для заполнения',
    }),
    duration: Joi.number().required().messages({
      'any.required': 'Поле "duration" обязательное для заполнения',
    }),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom((value, helper) => {
      if (!value.match(regexHttp)) {
        return helper.message('Поле "image" содержит некорректные данные');
      }
      return value;
    }).messages({
      'string.empty': 'Поле "image" должно быть заполнено',
      'any.required': 'Поле "image" обязательное для заполнения',
    }),
    trailerLink: Joi.string().required().custom((value, helper) => {
      if (!value.match(regexHttp)) {
        return helper.message('Поле "trailerLink" содержит некорректные данные');
      }
      return value;
    }).messages({
      'string.empty': 'Поле "trailerLink" должно быть заполнено',
      'any.required': 'Поле "trailerLink" обязательное для заполнения',
    }),
    thumbnail: Joi.string().required().custom((value, helper) => {
      if (!value.match(regexHttp)) {
        return helper.message('Поле "thumbnail" содержит некорректные данные');
      }
      return value;
    }).messages({
      'string.empty': 'Поле "thumbnail" должно быть заполнено',
      'any.required': 'Поле "thumbnail" обязательное для заполнения',
    }),
    movieId: Joi.number().required().messages({
      'any.required': 'Поле "movieId" обязательное для заполнения.',
    }),
    nameRU: Joi.string().required().messages({
      'string.empty': 'Поле "nameRU" должно быть заполнено',
      'any.required': 'Поле "nameRU" обязательное для заполнения',
    }),
    nameEN: Joi.string().required().messages({
      'string.empty': 'Поле "nameEN" должно быть заполнено',
      'any.required': 'Поле "nameEN" обязательное для заполнения',
    }),
  }),
});

const movieDeleteValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required()
      .messages({
        'any.required': 'Поле "movieId" обязательное для заполнения.',
      }),
  }),
});

module.exports = {
  signupValidator,
  userUpdateValidator,
  signinValidator,
  movieAddValidator,
  movieDeleteValidator,
};
