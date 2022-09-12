const connection = require('./connection');

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUE ()',
  );
  return insertId;
};

const findById = async (saleId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  return result;
};

const deleteById = async (saleId) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE FROM StoreManager.sales
    WHERE id = ?`,
    [saleId],
  );
  return affectedRows;
};

module.exports = {
  insert,
  deleteById,
  findById,
};