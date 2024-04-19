const express = require('express');
const { feachBrands, createBrand } = require('../controller/Brand');


const router = express.Router();
//brands is already added in base path
router.get('/',feachBrands).post('/', createBrand)
      


exports.router = router;