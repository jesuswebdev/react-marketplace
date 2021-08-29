const Mongoose = require("mongoose");

function castToObjectId(value) {
  return typeof value === "string" ? Mongoose.Types.ObjectId(value) : value;
}

module.exports = { castToObjectId };
