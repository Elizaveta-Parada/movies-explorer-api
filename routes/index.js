const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');
const auth = require('../middlewares/auth');

router.use('/', require('./auth'));

router.use(auth);
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('/*', (req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
