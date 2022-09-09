const schemas = require('./schemas');

const productMiddleware = (req, res, next) => {
  const { error } = schemas.productSchema.validate(req.body);

  if (error) {
    return res
      .status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message });
  }

  next();
};

module.exports = {
  productMiddleware,
};