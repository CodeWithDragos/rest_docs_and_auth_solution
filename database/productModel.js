const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: String,
  price: Number,
});

module.exports = Product
