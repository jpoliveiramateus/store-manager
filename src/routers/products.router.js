const express = require('express');
const { productsController } = require('../controllers');
const { productMiddleware } = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

router.post('/', productMiddleware, productsController.insert);

module.exports = router;