/*
//routes to get and create new users
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/api/', 
    
    userController.createUser
);

//Get info of user by id
router.get('/api/',
//authentication first then display info
    userController.getUserInfo
);

module.exports = router;
*/