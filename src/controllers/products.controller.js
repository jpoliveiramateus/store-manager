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

const findByName = async (req, res) => {
  const products = await productsService.findAll();
  const productsByName = products.message.filter((product) => product.name.includes(req.query.q));
  res.status(200).json(productsByName);
};

const insert = async (req, res) => {
  const productId = await productsService.insert(req.body);
  const productById = await productsService.findById(productId.message);

  return res.status(201).json(productById.message);
};

const updateById = async (req, res) => {
  await productsService.updateById(req.body.name, req.params.id);
  const productById = await productsService.findById(req.params.id);
  return res.status(200).json(productById.message);
};

const deleteById = async (req, res) => {
  await productsService.deleteById(req.params.id);
  return res.sendStatus(204);
};

module.exports = {
  findAll,
  findById,
  findByName,
  insert,
  updateById,
  deleteById,
};