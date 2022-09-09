const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

module.exports = router;