const express = require('express');
const { feachCategories, createCategory } = require('../controller/Category');


const router = express.Router();
//categories is already added in base path
router.get('/',feachCategories).post('/', createCategory)
      


exports.router = router;