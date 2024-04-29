const express = require('express');
const { addToCart, fetchCartByUser } = require('../controller/Cart');

const router = express.Router();
//product is already added in base path
router.post('/', addToCart)
      .get('/',fetchCartByUser)
     


exports.router = router;