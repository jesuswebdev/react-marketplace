"use strict";

const Mongoose = require("mongoose");

module.exports = {
  name: "mongoose",
  version: "1.0.0",
  register: async function (server, options) {
    try {
      const db = await Mongoose.createConnection(options.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      require("./src/permission/model")(db);
      require("./src/role/model")(db);
      console.log("imported all models");
      server.expose("connection", db);
    } catch (error) {
      throw error;
    }
  }
};
