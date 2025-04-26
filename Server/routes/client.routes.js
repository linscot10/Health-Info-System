const express = require('express');
const router = express.Router();



const validateClient = require('../middleware/validateClient');
const { registerClient, enrollClientInPrograms, getAllClients, getClientById } = require('../controllers/client.controller');



router.post('/', validateClient, registerClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/:id/enroll', enrollClientInPrograms);

module.exports = router;