const { productsModel } = require('../models');
const schemas = require('./schemas');

const validateProductByName = (req, res, next) => {
  const { error } = schemas.productSchema.validate(req.body);

  if (error) {
    return res
      .status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message });
  }

  next();
};

const validateProductSold = (req, res, next) => {
  const { error } = schemas.productsSoldsSchema.validate(req.body);

  if (error) {
    const newError = error.message.replace('[1].', '').replace('[0].', '');
    return res
      .status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: newError });
  }

  next();
};

const validateProductSoldById = async (req, res, next) => {
  const products = await Promise.all(
    req.body.map(async (product) => productsModel.findById(product.productId)),
  );

  const someProductIsMissing = products.some((product) => product === undefined);
  if (someProductIsMissing) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  validateProductByName,
  validateProductSoldById,
  validateProductSold,
};