const express = require('express');
const router = express.Router();



const validateClient = require('../middleware/validateClient');
const { registerClient, enrollClientInPrograms, getAllClients, getClientProfile, searchClients, } = require('../controllers/client.controller');



router.post('/', validateClient, registerClient);
router.get('/', getAllClients);
router.get('/search', searchClients);
router.post('/:id/enroll', enrollClientInPrograms);
router.get('/:id', getClientProfile);

module.exports = router;
