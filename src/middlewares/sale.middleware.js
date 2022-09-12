const { salesModel } = require('../models');

const validateSaleById = async (req, res, next) => {
  const sale = await salesModel.findById(req.params.id);

  if (!sale) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  next();
};

module.exports = {
  validateSaleById,
};