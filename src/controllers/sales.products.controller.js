const { salesService, salesProductsService } = require('../services');

const insert = async (req, res) => {
  const { message: saleId } = await salesService.insert();
  await salesProductsService.insert(saleId, req.body);
  const response = { id: saleId, itemsSold: req.body };
  return res.status(201).json(response);
};

const findAll = async (_req, res) => {
  const response = await salesProductsService.findAll();
  return res.status(200).json(response.message); 
};

const findById = async (req, res) => {
  const response = await salesProductsService.findById(req.params.id);

  if (response.type) {
    return res.status(404).json({ message: response.message });
  }

  return res.status(200).json(response.message);
};

const deleteById = async (req, res) => {
  await salesService.deleteById(req.params.id);
  return res.sendStatus(204);
};

const updateById = async (req, res) => {
  await salesProductsService.updateById(req.params.id, req.body);
  return res.status(200).json({ saleId: req.params.id, itemsUpdated: req.body }); 
};

module.exports = {
  insert,
  findAll,
  findById,
  deleteById,
  updateById,
};
