const express = require('express');
const router = express.Router();



const validateClient = require('../middleware/validateClient');
const { registerClient, enrollClientInPrograms, getAllClients, getClientProfile, searchClients, getPublicClientProfile, } = require('../controllers/client.controller');



router.post('/', validateClient, registerClient);
router.get('/', getAllClients);
router.get('/search', searchClients);
router.get('/clients/:clientId', getPublicClientProfile);

router.post('/:id/enroll', enrollClientInPrograms);

router.get('/:id', getClientProfile);

module.exports = router;
