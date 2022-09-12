const { salesProductsModel } = require('../models');

const insert = async (saleId, itemsSold) => {
  await salesProductsModel.insert(saleId, itemsSold);
};

const findAll = async () => {
  const salesProducts = await salesProductsModel.findAll();
  return { type: null, message: salesProducts };
};

const findById = async (saleId) => {
  const saleById = await salesProductsModel.findById(saleId);

  if (saleById.length) {
    return { type: null, message: saleById };
  }

  return { type: 'NOT_FOUND', message: 'Sale not found' };
};

module.exports = {
  insert,
  findAll,
  findById,
};