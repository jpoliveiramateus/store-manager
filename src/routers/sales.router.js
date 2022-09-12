const express = require('express');

const { salesProductsController } = require('../controllers');

const {
  validateProductSoldById,
  validateProductSold,
} = require('../middlewares/product.middleware');

const { validateSaleById } = require('../middlewares/sale.middleware');

const router = express.Router();

router.post('/',
  validateProductSold,
  validateProductSoldById,
  salesProductsController.insert);

router.get('/', salesProductsController.findAll);

router.get('/:id', salesProductsController.findById);

router.delete('/:id', validateSaleById, salesProductsController.deleteById);

module.exports = router;
