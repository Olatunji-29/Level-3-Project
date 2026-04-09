const Institution = require("../models/institutionModel");


// 1. Create a new institution
const createInstitution = async (req, res) => {
  try {
    const savedInstitution = await Institution.create(req.body);
    res.status(201).json({
      success: true,
      message: "Institution deployed successfully!",
      data: savedInstitution
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Get all institutions (For the dropdown list)
const getAllInstitutions = async (req, res) => {
  try {
    const schools = await Institution.find().select('name institutionId location');
    res.status(200).json({ success: true, data: schools });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching data" });
  }
};

// 3. Get a SINGLE school by its MongoDB ID
const getSingleSchool = async (req, res) => {
  try {
    // We use req.params.id to get the ID from the URL (e.g., /school/65abc...)
    const school = await Institution.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: "Institution not found"
      });
    }

    res.status(200).json({
      success: true,
      data: school
    });
  } catch (error) {
    // If the ID is formatted incorrectly, catch the error
    res.status(400).json({
      success: false,
      message: "Invalid Institution ID format"
    });
  }
};

// --- MODULE EXPORTS AT THE BOTTOM ---
module.exports = {
  createInstitution,
  getAllInstitutions,
  getSingleSchool
};