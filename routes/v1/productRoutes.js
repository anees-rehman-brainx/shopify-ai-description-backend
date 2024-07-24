const router = require('express').Router();
const { productController } = require('../../controllers');

router.post('/detail', productController.productDescription);

module.exports = router;
