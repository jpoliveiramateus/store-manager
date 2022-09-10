const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: 'root',
  password: 'password',
  database: 'StoreManager',
});

module.exports = connection;
