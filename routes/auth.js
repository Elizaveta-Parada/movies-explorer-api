const router = require('express').Router();
const { addNewUser, login } = require('../controllers/users');
const { signupValidator, signinValidator } = require('../middlewares/validator');

router.post('/signup', signupValidator, addNewUser);
router.post('/signin', signinValidator, login);

module.exports = router;
