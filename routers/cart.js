const express = require('express');
const authMiddleware = require('../authMiddleware');

const cartRouter = express.Router();

const cartItems = [];

cartRouter.use(authMiddleware);

cartRouter.get('/', (req, res) => {
  const totalPrice = cartItems.reduce((acc, ci) => acc + ci.price, 0);
  const itemsCount = cartItems.length;
  res.status(200).send({ cartItems });
});

cartRouter.put('/add', (req, res) => {
  const totalPrice = cartItems.reduce((acc, ci) => acc + ci.price, 0);
  const itemsCount = cartItems.length;
  res.status(200).send({ cartItems });
});

cartRouter.put('/delete', (req, res) => {
  const totalPrice = cartItems.reduce((acc, ci) => acc + ci.price, 0);
  const itemsCount = cartItems.length;
  res.status(200).send({ itemsCount, totalPrice, cartItems });
});

module.exports = cartRouter;
