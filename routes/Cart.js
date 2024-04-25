const express = require('express');
const { addToCart, feachCartByUser } = require('../controller/Cart');

const router = express.Router();
//product is already added in base path
router.post('/', addToCart)
      .get('/',feachCartByUser)
     


exports.router = router;