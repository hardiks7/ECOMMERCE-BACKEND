const express = require('express');
const { feachUserById,
       updateUser } = require('../controller/User');


const router = express.Router();
//user is already added in base path
router.post('/:id', feachUserById)
      .patch('/:id', updateUser)

exports.router = router;