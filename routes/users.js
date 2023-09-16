const router = require('express').Router();
const { editUser, getMeUser } = require('../controllers/users');
const { userUpdateValidator } = require('../middlewares/validator');

router.get('/me', getMeUser);
router.patch('/me', userUpdateValidator, editUser);

module.exports = router;
