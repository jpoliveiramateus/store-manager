const { salesService, salesProductsService } = require('../services');

const insert = async (req, res) => {
  const { message: saleId } = await salesService.insert();
  await salesProductsService.insert(saleId, req.body);
  const response = { id: saleId, itemsSold: req.body };
  return res.status(201).json(response);
};

module.exports = {
  insert,
};
