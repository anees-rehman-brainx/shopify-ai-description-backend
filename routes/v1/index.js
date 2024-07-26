const router = require('express').Router();

router.use('/product', require('./productRoutes'));

module.exports = router;
