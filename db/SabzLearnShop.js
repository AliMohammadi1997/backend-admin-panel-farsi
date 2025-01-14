const mysql = require("mysql");

const SabzlearnShopDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cms-shop",
});

module.exports = SabzlearnShopDB;
