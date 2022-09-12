const express = require('express');

const { salesProductsController } = require('../controllers');

const {
  validateProductSoldById,
  validateProductSold,
} = require('../middlewares/product.middleware');

const router = express.Router();

router.post('/',
  validateProductSold,
  validateProductSoldById,
  salesProductsController.insert);

router.get('/', salesProductsController.findAll);

router.get('/:id', salesProductsController.findById);

module.exports = router;
