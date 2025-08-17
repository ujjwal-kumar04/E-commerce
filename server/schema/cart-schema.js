const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  username: String,
  productId: String,
  name: String,
  img: String,
  price: Number,
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model("Cart", cartSchema);
