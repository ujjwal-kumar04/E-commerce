const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  mobile: String,
  address: String,
  paymentMethod: String,
  bank: String,
  totalAmount: Number,
  cartItems: [
    {
      name: String,
      price: Number,
      quantity: Number,
      img: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
