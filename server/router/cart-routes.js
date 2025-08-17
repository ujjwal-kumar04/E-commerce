const express = require('express');
const router = express.Router();
const Cart = require('../schema/cart-schema');

// Add to cart
router.post("/cart", async (req, res) => {
  const { username, product } = req.body;

  try {
    // Check if item already in cart
    const existingItem = await Cart.findOne({ username, productId: product.id });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const newCartItem = new Cart({
      username,
      productId: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
    });

    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

// Get cart by username
router.get("/cart/:username", async (req, res) => {
  try {
    const items = await Cart.find({ username: req.params.username });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to get cart" });
  }
});
router.delete("/cart/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Item deleted");
  } catch (err) {
    res.status(500).json("Delete failed");
  }
});
router.put("/cart/:id", async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { quantity: req.body.quantity } },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json("Update failed");
  }
});


module.exports = router;
