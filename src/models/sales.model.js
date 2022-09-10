const connection = require('./connection');

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUE ()',
  );
  return insertId;
};

module.exports = {
  insert,
};