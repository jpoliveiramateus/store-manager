const connection = require('./connection');

const insert = (saleId, itemsSold) => {
   itemsSold.forEach(async (item) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
      [saleId, item.productId, item.quantity],
    );
  });
};

module.exports = {
  insert,
};