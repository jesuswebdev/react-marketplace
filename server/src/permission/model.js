"use strict";

const Mongoose = require("mongoose");

module.exports = (mongoose, config = {}) => {
  const schema = new Mongoose.Schema(
    {
      name: { type: String, required: true },
      value: { type: String, required: true }
    },
    { timestamps: true, ...config }
  );

  return mongoose.model("Permission", schema);
};
