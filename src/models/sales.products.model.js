const camelize = require('camelize');
const connection = require('./connection');

const insert = async (saleId, itemSold) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
    [saleId, itemSold.productId, itemSold.quantity],
  );
  return affectedRows;
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

const updateById = async (saleId, itemUpdated) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.sales_products
    SET product_id = ?, quantity = ?
    WHERE sale_id = ? AND product_id = ?`,
    [itemUpdated.productId, itemUpdated.quantity, saleId, itemUpdated.productId],
  );
  return affectedRows;
};

module.exports = {
  insert,
  findAll,
  findById,
  updateById,
};