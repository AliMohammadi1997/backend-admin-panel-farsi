const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const ordersRouter = express.Router();

// routes

ordersRouter.get("/", (req, res) => {
  let selectAllOrdersQuery = `SELECT * FROM Orders`;

  SabzLearnShopDB.query(selectAllOrdersQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

ordersRouter.delete("/:orderID", (req, res) => {
  let orderID = req.params.orderID;
  let deleteOrderQuery = `DELETE FROM Orders WHERE id = ${orderID}`;

  SabzLearnShopDB.query(deleteOrderQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

ordersRouter.put("/active-order/:orderID/:isActive", (req, res) => {
  let orderID = req.params.orderID;
  let isActive = req.params.isActive;
  let activeOrderQuery = `UPDATE Orders SET isActive=${isActive} WHERE id = ${orderID}`;

  SabzLearnShopDB.query(activeOrderQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

ordersRouter.put("/:orderID", (req, res) => {
    let orderID = req.params.orderID;
    let body = req.body;

    let editUserQuery = `UPDATE Orders SET productID="${body.productID}", name="${body.name}", address="${body.address}", price="${body.price}", count=${body.count}, off="${body.off}", sale="${body.sale}" WHERE id = ${orderID}`;

    SabzLearnShopDB.query(editUserQuery, (err, result) => {
      if (err) {
        res.send(null);
      } else {
        res.send(result);
      }
    });
  });

module.exports = ordersRouter;
