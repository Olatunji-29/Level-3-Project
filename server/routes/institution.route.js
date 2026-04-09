const express = require('express');
const router = express.Router();
const { createInstitution, getAllInstitutions, getSingleSchool } = require('../controllers/institutionController');

// This matches your request
router.post('/institution', createInstitution);

// Other helpful routes
router.get('/schools', getAllInstitutions);
router.get('/school/:id', getSingleSchool);

module.exports = router;