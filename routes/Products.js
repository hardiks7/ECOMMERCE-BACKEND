const express = require('express')
const { createProduct } = require('../controller/Product');


const router = express.Router();
//product is already
router.post('/',createProduct)


exports.router = router;