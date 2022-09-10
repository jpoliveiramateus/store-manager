const { salesProductsModel } = require('../models');

const insert = async (saleId, itemsSold) => {
  await salesProductsModel.insert(saleId, itemsSold);
};

module.exports = {
  insert,
};