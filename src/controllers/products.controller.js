const { productsService } = require('../services');

const findAll = async (_req, res) => {
  const products = await productsService.findAll();
  res.status(200).json(products.message);
};

const findById = async (req, res) => {
  const productById = await productsService.findById(req.params.id);

  if (productById.type) {
    return res.status(404).json({ message: productById.message });
  }

  return res.status(200).json(productById.message);
};

const insert = async (req, res) => {
  const productId = await productsService.insert(req.body);
  const productById = await productsService.findById(productId.message); 

  return res.status(201).json(productById.message);
};

module.exports = {
  findAll,
  findById,
  insert,
};