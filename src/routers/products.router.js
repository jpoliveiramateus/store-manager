const express = require('express');
const { productsController } = require('../controllers');
const { validateProductByName } = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

router.post('/', validateProductByName, productsController.insert);

module.exports = router;