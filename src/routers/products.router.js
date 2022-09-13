const express = require('express');
const { productsController } = require('../controllers');
const {
  validateProductById,
  validateProductByName,
} = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/search', productsController.findByName);

router.get('/:id', validateProductById, productsController.findById);

router.post('/', validateProductByName, productsController.insert);

router.put('/:id', validateProductById, validateProductByName, productsController.updateById);

router.delete('/:id', validateProductById, productsController.deleteById);

module.exports = router;