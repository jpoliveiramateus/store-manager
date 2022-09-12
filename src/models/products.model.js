const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return result;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const updateById = async (newProductName, productId) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`,
    [newProductName, productId],
  );
  return affectedRows;
};

const deleteById = async (productId) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ?`,
    [productId],
  );
  return affectedRows;
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};