"use strict";

const Mongoose = require("mongoose");

module.exports = (mongoose, config = {}) => {
  const schema = new Mongoose.Schema(
    {
      name: { type: String, required: true },
      permissions: { type: [Mongoose.Types.ObjectId], ref: "Permission" }
    },
    { timestamps: true, ...config }
  );

  return mongoose.model("Role", schema);
};
