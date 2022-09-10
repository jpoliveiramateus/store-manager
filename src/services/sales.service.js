const { salesModel } = require('../models');

const insert = async () => {
  const saleId = await salesModel.insert();
  return { type: null, message: saleId };
};

module.exports = {
  insert,
};