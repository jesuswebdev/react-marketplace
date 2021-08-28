"use strict";

const Mongoose = require("mongoose");

module.exports = (mongoose, config = {}) => {
  const schema = new Mongoose.Schema(
    {
      name: { type: String, required: true },
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      roles: { type: [Mongoose.Types.ObjectId], ref: "Role" }
    },
    { timestamps: true, ...config }
  );

  return mongoose.model("Role", schema);
};
