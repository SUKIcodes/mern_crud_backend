const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/router");

var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

// const url="mongodb+srv://admin:4LPZudtJGHHLK2Xx@cluster0.5qu8lrg.mongodb.net/?retryWrites=true&w=majority"
const url2 =
  "mongodb+srv://gowildgowildgowild:k40pW3ZUaiBTv5rt@cluster0.vvooqdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url2)
  .then(() => {
    console.log("Database Connected Succssfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000);
