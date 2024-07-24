const router = require('express').Router();

router.use('/user', require('./userRoutes'));

router.use('/poduct', require('./productRoutes'));


module.exports = router;
