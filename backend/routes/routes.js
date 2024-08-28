const express = require("express");
const Router = express.Router();
const {
  getAllCows,
  addCow,
  updateOne,
  deleteOne,
} = require("../controller/cowsController");

Router.get("/cows", getAllCows);
Router.post("/cows", addCow);
Router.put("/cows/:id", updateOne);
Router.delete("/cows/:id", deleteOne);

module.exports = Router;
