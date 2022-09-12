const { salesModel } = require('../models');

const insert = async () => {
  const saleId = await salesModel.insert();
  return { type: null, message: saleId };
};

const deleteById = async (saleId) => {
  await salesModel.deleteById(saleId);
};

module.exports = {
  insert,
  deleteById,
};