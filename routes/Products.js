const express = require('express')
const { createProduct, feachAllProducts } = require('../controller/Product');


const router = express.Router();
//product is already added in base path
router.post('/',createProduct)
      .get('/',feachAllProducts)


exports.router = router;