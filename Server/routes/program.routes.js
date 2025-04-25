const express = require('express');
const { createProgram, getAllPrograms, getProgramById } = require('../controllers/program.controller')
const validateProgram = require('../middleware/validateProgram')

const router = express.Router();


router.post('/', validateProgram, createProgram)
router.get('/', getAllPrograms)
router.get('/:id', getProgramById)

module.exports = router
