const { Cart, validate } = require("../models/cart");
const { Products } = require("../models/products");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const Fawn = require("fawn");
const express = require("express");
const router = express.Router();

Fawn.init(mongoose);

router.get("/", async (req, res) => {
  const carts = await Cart.find();
  res.send(carts);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // const product = await Products.findById(req.body.products);
  // if (!product) return res.status(400).send("Invalid product.");

  const isValidUser = await User.findById(req.body.userId);
  if (!isValidUser) return res.status(400).send("Invalid user");

  let cart = new Cart({
    userId: isValidUser._id,
    products: req.body.products,
  });

  try {
    new Fawn.Task().save("carts", cart).run();

    res.send(cart);
  } catch (ex) {
    res.status(500).send("Something failed.");
  }
});

router.get("/:id", async (req, res) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart)
    return res.status(404).send("The cart with the given ID was not found.");

  res.send(cart);
});

module.exports = router;
