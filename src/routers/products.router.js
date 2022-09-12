const express = require('express');
const { productsController } = require('../controllers');
const {
  validateProductById,
  validateProductByName,
} = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

router.post('/', validateProductByName, productsController.insert);

router.put('/:id', validateProductById, validateProductByName, productsController.updateById);

module.exports = router;