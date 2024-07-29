const router = require('express').Router();
const { productController } = require('../../controllers');
const {authMiddleware} = require('../../middlewares/index')

router.post('/detail',authMiddleware.verifyUser, productController.productDescription);

module.exports = router;
