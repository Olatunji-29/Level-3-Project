const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1. Define Course Schema separately for better validation
const courseSchema = new Schema({
  name: { type: String, required: true },
  cutOffMark: { type: Number, required: true },
  jambSubjectCombination: [String], // Array of strings: ['Maths', 'Physics', etc]
  tuition: { type: String }, 
  faculty: { type: String }
});

// 2. Define Degree Schema 
const degreeSchema = new Schema({
  type: { type: String,  },
  duration: { type: String,  }
});

// 3. Main Institution Schema
const schoolSchema = new Schema({
  institutionId: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['Federal University', 'State University', 'Private University', 'Polytechnic', 'College'] 
  },
  location: { type: String, required: true },
  state: { type: String, required: true },
  
  // Use the sub-schemas here
  courses: [courseSchema], 
  degrees: {
    type: [degreeSchema],
    default: [
      { type: "B.Sc", duration: "4 years" },
      { type: "B.Eng", duration: "5 years" }
    ]
  },

  description: {
    history: String,
    motto: String,
    founded: String,
    viceChancellor: String,
    campusCount: { type: Number, default: 1 },
    studentPopulation: String,
    accreditation: String,
    strengths: [String],
    website: String
  }
}, { timestamps: true }); // Adds createdAt and updatedAt automatically

module.exports = mongoose.model("institutions", schoolSchema);