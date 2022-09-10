const express = require('express');

const { salesController } = require('../controllers');
const {
  validateProductSoldById,
  validateProductSold,
} = require('../middlewares/product.middleware');

const router = express.Router();

router.post('/',
  validateProductSold,
  validateProductSoldById,
  salesController.insert);

module.exports = router;
