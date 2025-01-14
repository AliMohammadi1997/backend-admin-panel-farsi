const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const commentsRouter = express.Router();

// routes

commentsRouter.get("/", (req, res) => {
  let selectAllCommentsQuery = `SELECT * FROM Comments`;

  SabzLearnShopDB.query(selectAllCommentsQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.delete("/:commentID", (req, res) => {
  let commentID = req.params.commentID;

  let deleteCommentQuery = `DELETE FROM Comments WHERE id = ${commentID}`;
  SabzLearnShopDB.query(deleteCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.put("/:commentID", (req, res) => {
  let commentID = req.params.commentID;
  let editCommentQuery = `UPDATE Comments SET body="${req.body.body}" WHERE id = ${commentID}`;

  SabzLearnShopDB.query(editCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.post("/accept/:commentID", (req, res) => {
  let commentID = req.params.commentID;
  console.log(commentID);
  let editCommentQuery = `UPDATE Comments SET isAccept = 1 WHERE id = ${commentID}`;

  SabzLearnShopDB.query(editCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.post("/reject/:commentID", (req, res) => {
  let commentID = req.params.commentID;
  console.log(commentID);
  let editCommentQuery = `UPDATE Comments SET isAccept = 0 WHERE id = ${commentID}`;

  SabzLearnShopDB.query(editCommentQuery, (err, result) => {
    if (err) {
      res.send(null);
    } else {
      res.send(result);
    }
  });
});

commentsRouter.post("/:commentID", (req, res) => {
    let commentID = req.params.commentID;
    console.log(commentID);
    let editCommentQuery = `UPDATE Comments SET answer = "${req.body.answer}" WHERE id = ${commentID}`;

    SabzLearnShopDB.query(editCommentQuery, (err, result) => {
      if (err) {
        res.send(null);
      } else {
        res.send(result);
        console.log(req);

      }
    });
  });

module.exports = commentsRouter;
