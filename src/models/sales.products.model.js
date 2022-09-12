const camelize = require('camelize');
const connection = require('./connection');

const insert = (saleId, itemsSold) => {
   itemsSold.forEach(async (item) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
      [saleId, item.productId, item.quantity],
    );
  });
};

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS sa ON sp.sale_id = sa.id`,
  );
  return camelize(result);
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT date, product_id, quantity FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS sa ON sp.sale_id = sa.id WHERE id = ?`,
    [saleId],
  );
  return camelize(result);
};

module.exports = {
  insert,
  findAll,
  findById,
};