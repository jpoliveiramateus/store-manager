const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const productSoldSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

const productsSoldsSchema = Joi.array().items(productSoldSchema);

module.exports = {
  productSchema,
  productsSoldsSchema,
};