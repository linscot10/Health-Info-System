const express = require('express');
const router = express.Router();



const validateClient = require('../middleware/validateClient');
const registerClient = require('../controllers/client.controller');


router.post('/', validateClient, registerClient);

module.exports = router;