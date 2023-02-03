const Joi = require("joi");
const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    products: [],
  })
);

function validateCart(cart) {
  const schema = {
    userId: Joi.objectId().required(),
    products: Joi.array().required(),
  };

  return Joi.validate(cart, schema);
}

exports.Cart = Cart;
exports.validate = validateCart;
