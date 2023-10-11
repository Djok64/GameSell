require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const router = require("./router");

const app = express();

app.use(cors("*")); // a modifier pour linstant tout passe il faudra mettre localhost avec le process.env pour permettre l'acces seulement de cet endroit

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("on est la! sur le /  du server dans app");
});

app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found!" });
});

module.exports = app;
