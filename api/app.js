const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.listen(8080, () => {});
