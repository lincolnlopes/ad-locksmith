const express = require("express");
var cors = require("cors");
const routes = express.Router();
routes.use(cors());

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

routes.get("/hello", cors(corsOptions), (_req, res) => {
  return res.json({ message: "Hello World!" });
});

const LoginController = require("./app/controllers/LoginController");

routes.get("/login", cors(corsOptions), LoginController.login);

module.exports = routes;
