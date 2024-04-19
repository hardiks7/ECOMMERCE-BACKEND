const express = require('express')
const { createProduct, feachAllProducts, feachProductById, updateProduct } = require('../controller/Product');


const router = express.Router();
//product is already added in base path
router.post('/',createProduct)
      .get('/',feachAllProducts)
      .get('/:id',feachProductById)
      .patch('/:id', updateProduct)


exports.router = router;