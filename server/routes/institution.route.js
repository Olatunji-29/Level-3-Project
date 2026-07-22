const express = require('express');
const router = express.Router();
const { createInstitution, getAllInstitutions, getSingleSchool, addCourse, deleteInstitution, updateInstitution,} = require('../controllers/institutionController');

// This matches your request


router.post('/institution', createInstitution);

// Other helpful routes
router.get('/schools', getAllInstitutions);
router.get('/school/:id', getSingleSchool);


router.patch('/:id/add-course', addCourse);

router.delete('/:id', deleteInstitution);

router.put("/institution/:id", updateInstitution);


router.get('/institutions/:id', async (req, res) => {
    try {
        const institution = await Institution.findById(req.params.id);

        if (!institution) {
            return res.status(404).json({ message: "Institution not found" });
        }

        res.json({ data: institution });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;