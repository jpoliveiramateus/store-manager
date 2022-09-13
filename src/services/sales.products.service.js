const { salesProductsModel } = require('../models');

const insert = (saleId, itemsSold) => {
  itemsSold.forEach(async (item) => {
    await salesProductsModel.insert(saleId, item);
  });
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

const updateById = (saleId, itemsUpdated) => {
  itemsUpdated.forEach(async (itemUpdated) => {
    await salesProductsModel.updateById(saleId, itemUpdated);
  });
};

module.exports = {
  insert,
  findAll,
  findById,
  updateById,
};