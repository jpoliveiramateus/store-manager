const productsModel = require('../models/products.model');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const productById = await productsModel.findById(productId);

  if (productById) {
    return { type: null, message: productById };
  }

  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};