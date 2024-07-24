const router = require('express').Router();

router.use('/user', require('./userRoutes'));

router.use('/product', require('./productRoutes'));

module.exports = router;
