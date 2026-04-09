


const mongoose = require("mongoose");
const { Schema, model } = mongoose

const schoolSchema = new Schema({
  institutionId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  state: { type: String },
  courses: { type: Array, required: true },
  degrees: {
    type: Array,
    default: [
      { type: "BSc (Bachelor of Science)", duration: "4 years" },
      { type: "MSc (Master of Science)", duration: "2 years" },
      { type: "PhD", duration: "3-4 years" }
    ]
  },
 description: {
    history: String,
    motto: String,
    founded: String,
    viceChancellor: String,
    campusCount: Number,
    studentPopulation: String,
    accreditation: String,
    strengths: [String],
    website: String
  }


});

module.exports = mongoose.model("Institutions", schoolSchema);
