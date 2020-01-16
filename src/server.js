const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const path = require("path");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middleware();
    this.views();
    this.routes();
  }

  middleware() {
    this.express.use(express.urlencoded({ extended: false }));

    this.express.use(
      session({
        name: "root",
        secret: "77fc217ba05f42dcbb0b35c37100397b",
        resave: true,
        store: new FileStore({
          path: path.resolve(__dirname, "..", "tmp", "sessions")
        }),
        saveUninitialized: true
      })
    );
  }

  views() {
    this.express.use(express.static(path.resolve(__dirname, "public")));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
