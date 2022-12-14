const { productsModel } = require('../models');

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

const insert = async ({ name }) => {
  const productId = await productsModel.insert(name);
  return { type: null, message: productId };
};

const updateById = async (newProductName, productId) => {
  await productsModel.updateById(newProductName, productId);
};

const deleteById = async (productId) => {
  await productsModel.deleteById(productId);
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};