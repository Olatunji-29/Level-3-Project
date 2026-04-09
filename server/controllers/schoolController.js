const schoolModel = require("../models/schoolModel");

const getAllInstitutions = async (req, res) => {
  try {
    // Check if schools already exist in database
    let schools = await schoolModel.find();

    // If no schools exist, insert them
    if (schools.length === 0) {
      schools = await schoolModel.insertMany([
        // FEDERAL UNIVERSITIES
        {
          institutionId: "UNILAG",
          name: "University of Lagos",
          type: "Federal University",
          location: "Lagos Island",
          state: "Lagos State",
          courses: [
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200, tution: 500000 },
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 250 , tution: 500000 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 240 , tution: 500000 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 220 , tution: 500000 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 230 , tution: 500000 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 180 },
            { name: "Economics", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 175 , tution: 500000 },
            { name: "Architecture", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 , tution: 500000 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "The University of Lagos (UNILAG) was founded in 1962 and is one of Nigeria’s leading public research universities. Popularly known as the ‘University of First Choice and the Nation’s Pride’, UNILAG is renowned for academic excellence, research, and innovation.",
            motto: "In Deed and in Truth",
            founded: "1962",
            viceChancellor: "Prof. Folasade Ogunsola",
            campusCount: 3,
            studentPopulation: "57,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Sciences",
              "Business & Management"
            ],
            website: "https://unilag.edu.ng"
          }
        },
        {
          institutionId: "UI",
          name: "University of Ibadan",
          type: "Federal University",
          location: "Ibadan",
          state: "Oyo State",
          courses: [
            { name: "Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 260 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 245 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 225 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 200 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 235 },
            { name: "Veterinary Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240 },
            { name: "Dentistry", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 245 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 170 },
            { name: "Social Sciences", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 165 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "The University of Ibadan (UI), established in 1948, is Nigeria's oldest university and one of the most prestigious in Africa. Known globally for academic excellence and groundbreaking research.",
            motto: "Leadership in Thought and Action",
            founded: "1948",
            viceChancellor: "Prof. Adeyemi A. Abass",
            campusCount: 1,
            studentPopulation: "35,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Law",
              "Engineering",
              "Agriculture",
              "Research"
            ],
            website: "https://ui.edu.ng"
          }
        },
        {
          institutionId: "ABU",
          name: "Ahmadu Bello University",
          type: "Federal University",
          location: "Zaria",
          state: "Kaduna State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 220 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 200 },
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 250 },
            { name: "Veterinary Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 230 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 235 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 175 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Environmental Science", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 190 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Ahmadu Bello University (ABU), founded in 1962, is one of Nigeria's foremost research institutions. Located in Zaria, Kaduna State, it serves as a major hub for agricultural research and development in West Africa.",
            motto: "Centered on Humanity and Excellence",
            founded: "1962",
            viceChancellor: "Prof. Kabir Minjibir",
            campusCount: 2,
            studentPopulation: "40,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Agriculture",
              "Engineering",
              "Medicine",
              "Veterinary Science",
              "Environmental Studies"
            ],
            website: "https://abu.edu.ng"
          }
        },
        {
          institutionId: "OAU",
          name: "Obafemi Awolowo University",
          type: "Federal University",
          location: "Ile-Ife",
          state: "Osun State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 255 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 225 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 240 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 235 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 205 },
            { name: "Dentistry", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 250 },
            { name: "Physics", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 },
            { name: "Chemistry", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 170 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Obafemi Awolowo University (OAU), established in 1962 in Ile-Ife, Osun State, is a foremost research university known for academic excellence and scholarly pursuits across various disciplines.",
            motto: "Thought and Action",
            founded: "1962",
            viceChancellor: "Prof. Eyitope Ogunbodede",
            campusCount: 1,
            studentPopulation: "30,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Agriculture",
              "Sciences"
            ],
            website: "https://oauife.edu.ng"
          }
        },
        {
          institutionId: "UNN",
          name: "University of Nigeria",
          type: "Federal University",
          location: "Nsukka",
          state: "Enugu State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 255 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 225 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 240 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 235 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 205 },
            { name: "Veterinary Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 170 },
            { name: "Science Education", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 185 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "University of Nigeria (UNN), founded in 1960, is one of Nigeria's oldest and most prestigious institutions. Located in Nsukka, Enugu State, it was the first autonomous university in Nigeria.",
            motto: "To Restore the Dignity of Man",
            founded: "1960",
            viceChancellor: "Prof. Charles C. Amaefule",
            campusCount: 2,
            studentPopulation: "35,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Research",
              "Medicine",
              "Engineering",
              "Education",
              "Social Sciences"
            ],
            website: "https://unn.edu.ng"
          }
        },
        {
          institutionId: "FUTMINNA",
          name: "Federal University of Technology Minna",
          type: "Federal University",
          location: "Minna",
          state: "Niger State",
          courses: [
            { name: "Software Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Civil Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Mechanical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Electrical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Chemical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Agricultural Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Information Technology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University of Technology Minna (FUTMINNA), established in 1983, is a leading technology institution specializing in engineering and applied sciences. Located in Minna, Niger State.",
            motto: "Excellence in Technology and Innovation",
            founded: "1983",
            viceChancellor: "Prof. Faruk Kuta",
            campusCount: 1,
            studentPopulation: "15,000+",
            accreditation: "National Universities Commission (NUC), COREN",
            strengths: [
              "Software Engineering",
              "Civil Engineering",
              "Mechanical Engineering",
              "Electrical Engineering",
              "Technology Innovation"
            ],
            website: "https://futminna.edu.ng"
          }
        },
        {
          institutionId: "FUTA",
          name: "Federal University of Technology Akure",
          type: "Federal University",
          location: "Akure",
          state: "Ondo State",
          courses: [
            { name: "Software Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Civil Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Mechanical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Electrical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Petroleum Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 215 },
            { name: "Chemical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 },
            { name: "Architecture", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University of Technology Akure (FUTA), founded in 1981, is a premier technology university in Ondo State known for innovative engineering and technology programs.",
            motto: "Excellence in Engineering and Technology",
            founded: "1981",
            viceChancellor: "Prof. Adeniran Ogunwande",
            campusCount: 1,
            studentPopulation: "18,000+",
            accreditation: "National Universities Commission (NUC), COREN, NAAB",
            strengths: [
              "Petroleum Engineering",
              "Software Engineering",
              "Electrical Engineering",
              "Civil Engineering",
              "Research Excellence"
            ],
            website: "https://futa.edu.ng"
          }
        },
        {
          institutionId: "UNILORIN",
          name: "University of Ilorin",
          type: "Federal University",
          location: "Ilorin",
          state: "Kwara State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 250 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 220 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 235 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 230 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 200 },
            { name: "Veterinary Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 170 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "University of Ilorin (UNILORIN), established in 1975, is a comprehensive university in Kwara State offering diverse academic programs with strong emphasis on research and professional education.",
            motto: "Learning and Service for Humanity",
            founded: "1975",
            viceChancellor: "Prof. Sulyman A. Abdulkareem",
            campusCount: 1,
            studentPopulation: "17,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Education",
              "Law",
              "Agriculture"
            ],
            website: "https://unilorin.edu.ng"
          }
        },
        {
          institutionId: "BUK",
          name: "Bayero University Kano",
          type: "Federal University",
          location: "Kano",
          state: "Kano State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 245 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 215 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 230 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 228 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 165 },
            { name: "Science Education", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 180 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 195 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Bayero University Kano (BUK), founded in 1977, is a leading research university in Northern Nigeria with strong emphasis on medical sciences and professional education. Located in Kano State.",
            motto: "A University for the People",
            founded: "1977",
            viceChancellor: "Prof. Muhammad Yahuza Baba",
            campusCount: 1,
            studentPopulation: "22,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Law",
              "Engineering",
              "Education",
              "Agriculture"
            ],
            website: "https://buk.edu.ng"
          }
        },
        {
          institutionId: "FUTO",
          name: "Federal University of Technology Owerri",
          type: "Federal University",
          location: "Owerri",
          state: "Imo State",
          courses: [
            { name: "Software Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Civil Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Mechanical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Electrical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Chemical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Petroleum Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Food Science and Technology", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 185 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University of Technology Owerri (FUTO), established in 1980, is a technology-focused institution in Imo State known for engineering excellence and innovation.",
            motto: "Technology for Sustainable Development",
            founded: "1980",
            viceChancellor: "Prof. Godfrey C. Ilechukwu",
            campusCount: 1,
            studentPopulation: "16,000+",
            accreditation: "National Universities Commission (NUC), COREN, NAAB",
            strengths: [
              "Software Engineering",
              "Civil Engineering",
              "Petroleum Engineering",
              "Electrical Engineering",
              "Innovation"
            ],
            website: "https://futo.edu.ng"
          }
        },
        {
          institutionId: "UNIPORT",
          name: "University of Port Harcourt",
          type: "Federal University",
          location: "Port Harcourt",
          state: "Rivers State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 250 },
            { name: "Petroleum Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 240 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 225 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 235 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 230 },
            { name: "Marine Biology", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 210 },
            { name: "Geology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "University of Port Harcourt (UNIPORT), founded in 1977, is a leading research university in the oil-rich Niger Delta region of Rivers State. Known for petroleum engineering and marine science research.",
            motto: "Unity and Service",
            founded: "1977",
            viceChancellor: "Prof. Owunari Georgewill",
            campusCount: 1,
            studentPopulation: "25,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Petroleum Engineering",
              "Marine Biology",
              "Medicine",
              "Engineering",
              "Geology"
            ],
            website: "https://uniport.edu.ng"
          }
        },
        {
          institutionId: "FULAFIA",
          name: "Federal University Lafia",
          type: "Federal University",
          location: "Lafia",
          state: "Nasarawa State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 185 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 170 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 225 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Lafia (FULAFIA), established in 2010, is a newer federal university in Nasarawa State offering various programs in engineering, sciences, and humanities.",
            motto: "Excellence in Education and Research",
            founded: "2010",
            viceChancellor: "Prof. Isa Abdul Njidda",
            campusCount: 1,
            studentPopulation: "8,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Sciences",
              "Business Administration",
              "Education",
              "Law"
            ],
            website: "https://fulafia.edu.ng"
          }
        },
        {
          institutionId: "FUDK",
          name: "Federal University Dutsinma",
          type: "Federal University",
          location: "Dutsinma",
          state: "Katsina State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 165 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 175 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Dutsinma (FUDK), established in 2011, is a newer federal university in Katsina State providing quality education in engineering and agriculture.",
            motto: "Excellence and Innovation",
            founded: "2011",
            viceChancellor: "Prof. Abdullahi M. Kara",
            campusCount: 1,
            studentPopulation: "7,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Education",
              "Computer Science",
              "Business Administration"
            ],
            website: "https://fudk.edu.ng"
          }
        },
        {
          institutionId: "FUOTO",
          name: "Federal University Otuoke",
          type: "Federal University",
          location: "Otuoke",
          state: "Bayelsa State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Petroleum Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 },
            { name: "Environmental Science", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 180 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Otuoke (FUOTO), established in 2012, is a newer federal university in Bayelsa State with focus on petroleum engineering and environmental sciences.",
            motto: "Knowledge and Sustainability",
            founded: "2012",
            viceChancellor: "Prof. Okhiria Samuel",
            campusCount: 1,
            studentPopulation: "6,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Petroleum Engineering",
              "Environmental Science",
              "Engineering",
              "Computer Science",
              "Education"
            ],
            website: "https://fuotuoke.edu.ng"
          }
        },
        {
          institutionId: "FUKAS",
          name: "Federal University Kashere",
          type: "Federal University",
          location: "Kashere",
          state: "Gombe State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 175 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 165 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Kashere (FUKAS), established in 2010, is a federal university in Gombe State offering diverse academic programs with emphasis on practical training.",
            motto: "Knowledge for Development",
            founded: "2010",
            viceChancellor: "Prof. Usman Ibrahim",
            campusCount: 1,
            studentPopulation: "7,500+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Education",
              "Computer Science",
              "Business Administration"
            ],
            website: "https://fukas.edu.ng"
          }
        },
        {
          institutionId: "FUNAU",
          name: "Federal University Ndufu-Alike",
          type: "Federal University",
          location: "Ndufu-Alike",
          state: "Ebonyi State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 180 },
            { name: "Science Education", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 170 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Ndufu-Alike (FUNAU), established in 2011, is a federal university in Ebonyi State dedicated to providing quality education in science and engineering.",
            motto: "Excellence and Service",
            founded: "2011",
            viceChancellor: "Prof. Chilaka Ifeanyi",
            campusCount: 1,
            studentPopulation: "6,500+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Education",
              "Computer Science",
              "Science Education"
            ],
            website: "https://funau.edu.ng"
          }
        },
        {
          institutionId: "FUOYEEKITI",
          name: "Federal University Oye-Ekiti",
          type: "Federal University",
          location: "Oye-Ekiti",
          state: "Ekiti State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 165 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 225 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 180 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Oye-Ekiti (FUOYEEKITI), established in 2011, is a comprehensive federal university in Ekiti State offering diverse academic programs.",
            motto: "Wisdom and Integrity",
            founded: "2011",
            viceChancellor: "Prof. Adeniyi Samuel",
            campusCount: 1,
            studentPopulation: "7,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Education",
              "Law",
              "Computer Science",
              "Agriculture"
            ],
            website: "https://fuoye.edu.ng"
          }
        },
        {
          institutionId: "FUWUKARI",
          name: "Federal University Wukari",
          type: "Federal University",
          location: "Wukari",
          state: "Taraba State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 175 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 },
            { name: "Technology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Wukari (FUWUKARI), established in 2011, is a federal university in Taraba State committed to quality education and research.",
            motto: "Education for National Development",
            founded: "2011",
            viceChancellor: "Prof. Ieren Samwel",
            campusCount: 1,
            studentPopulation: "6,500+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Education",
              "Computer Science",
              "Technology"
            ],
            website: "https://fuwukari.edu.ng"
          }
        },
        {
          institutionId: "FUNGUSAU",
          name: "Federal University Gusau",
          type: "Federal University",
          location: "Gusau",
          state: "Zamfara State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 155 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 170 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 220 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Gusau (FUNGUSAU), established in 2011, is a federal university in Zamfara State focusing on engineering and agriculture education.",
            motto: "Strength through Knowledge",
            founded: "2011",
            viceChancellor: "Prof. Ibrahim Dada",
            campusCount: 1,
            studentPopulation: "6,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Law",
              "Education",
              "Sciences"
            ],
            website: "https://fungusau.edu.ng"
          }
        },
        {
          institutionId: "FULOKOJA",
          name: "Federal University Lokoja",
          type: "Federal University",
          location: "Lokoja",
          state: "Kogi State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 165 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 230 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 175 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Lokoja (FULOKOJA), established in 2011, is a comprehensive federal university in Kogi State offering quality education across multiple disciplines.",
            motto: "Unity in Diversity",
            founded: "2011",
            viceChancellor: "Prof. Rafiu Salimonu",
            campusCount: 1,
            studentPopulation: "7,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Law",
              "Education",
              "Computer Science",
              "Agriculture"
            ],
            website: "https://fulokoja.edu.ng"
          }
        },
        {
          institutionId: "FUJIGAWA",
          name: "Federal University Jigawa",
          type: "Federal University",
          location: "Dutse",
          state: "Jigawa State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 170 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Jigawa (FUJIGAWA), established in 2011, is a federal university in Jigawa State dedicated to engineering and agricultural sciences.",
            motto: "Innovation for Progress",
            founded: "2011",
            viceChancellor: "Prof. Abdullahi Gunduma",
            campusCount: 1,
            studentPopulation: "6,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Education",
              "Computer Science",
              "Sciences"
            ],
            website: "https://fujigawa.edu.ng"
          }
        },
        {
          institutionId: "FUGASHUA",
          name: "Federal University Gashua",
          type: "Federal University",
          location: "Gashua",
          state: "Yobe State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 170 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 165 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Gashua (FUGASHUA), established in 2011, is a federal university in Yobe State promoting education in agriculture and applied sciences.",
            motto: "Knowledge and Progress",
            founded: "2011",
            viceChancellor: "Prof. Abubakar Maikarfi",
            campusCount: 1,
            studentPopulation: "5,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Agriculture",
              "Engineering",
              "Education",
              "Business Administration",
              "Sciences"
            ],
            website: "https://fugashua.edu.ng"
          }
        },
        {
          institutionId: "FUIKEJA",
          name: "Federal University Ikeja",
          type: "Federal University",
          location: "Ikeja",
          state: "Lagos State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 },
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 245 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 230 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 165 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Ikeja (FUIKEJA), established in 2012, is a federal university in Lagos State offering diverse programs including medicine, engineering, and law.",
            motto: "Excellence in Education",
            founded: "2012",
            viceChancellor: "Prof. Lydia Diah",
            campusCount: 1,
            studentPopulation: "8,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Computer Science",
              "Education"
            ],
            website: "https://fuikeja.edu.ng"
          }
        },
        {
          institutionId: "FUBIDA",
          name: "Federal University Bida",
          type: "Federal University",
          location: "Bida",
          state: "Niger State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 175 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Federal University Bida (FUBIDA), established in 2012, is a federal university in Niger State focused on engineering and agricultural education.",
            motto: "Development through Education",
            founded: "2012",
            viceChancellor: "Prof. Ibrahim Umar",
            campusCount: 1,
            studentPopulation: "6,500+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Engineering",
              "Agriculture",
              "Education",
              "Computer Science",
              "Sciences"
            ],
            website: "https://fubida.edu.ng"
          }
        },

        // STATE UNIVERSITIES
        {
          institutionId: "LASU",
          name: "Lagos State University",
          type: "State University",
          location: "Ojo",
          state: "Lagos State",
          courses: [
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 220 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 170 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 225 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Lagos State University (LASU), established in 1983, is a leading state university in Lagos offering quality education across diverse disciplines.",
            motto: "Knowledge, Service, Unity",
            founded: "1983",
            viceChancellor: "Prof. Olagoke Olanipekun",
            campusCount: 1,
            studentPopulation: "20,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Law",
              "Medicine",
              "Engineering",
              "Computer Science",
              "Business Administration"
            ],
            website: "https://lasu.edu.ng"
          }
        },
        {
          institutionId: "OAUIFE",
          name: "Osun State University",
          type: "State University",
          location: "Osogbo",
          state: "Osun State",
          courses: [
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 215 },
            { name: "Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 235 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 180 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 155 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Osun State University (OAUIFE), established in 2006, is a state university in Osun State dedicated to quality education and research.",
            motto: "Education for All",
            founded: "2006",
            viceChancellor: "Prof. Clement Adebooye",
            campusCount: 1,
            studentPopulation: "12,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Agriculture",
              "Computer Science"
            ],
            website: "https://uniosun.edu.ng"
          }
        },
        {
          institutionId: "EKSU",
          name: "Ekiti State University",
          type: "State University",
          location: "Ado-Ekiti",
          state: "Ekiti State",
          courses: [
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 210 },
            { name: "Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 230 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 185 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 175 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Ekiti State University (EKSU), established in 1999, is a state university in Ekiti State promoting quality education and research.",
            motto: "Knowledge for All",
            founded: "1999",
            viceChancellor: "Prof. Edward Olowoniyi",
            campusCount: 1,
            studentPopulation: "10,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Computer Science",
              "Agriculture"
            ],
            website: "https://eksu.edu.ng"
          }
        },
        {
          institutionId: "OOUAGOIWOYE",
          name: "Olabisi Onabanjo University",
          type: "State University",
          location: "Ago-Iwoye",
          state: "Ogun State",
          courses: [
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 215 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 },
            { name: "Medicine", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 235 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 180 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Olabisi Onabanjo University (OOUAGOIWOYE), established in 1982, is a state university in Ogun State dedicated to academic excellence and research.",
            motto: "Excellence and Quality",
            founded: "1982",
            viceChancellor: "Prof. Clement Doherty",
            campusCount: 2,
            studentPopulation: "15,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Law",
              "Medicine",
              "Engineering",
              "Computer Science",
              "Agriculture"
            ],
            website: "https://oounaija.edu.ng"
          }
        },
        {
          institutionId: "YASUTECH",
          name: "Yaba College of Technology",
          type: "State Polytechnic",
          location: "Yaba",
          state: "Lagos State",
          courses: [
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 170 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 175 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 150 },
            { name: "Built Environment", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 160 },
            { name: "Information Technology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 165 }
          ],
          degrees: [
            { type: "National Diploma (ND)", duration: "2 years" },
            { type: "Higher National Diploma (HND)", duration: "2 years" },
            { type: "MSc", duration: "2 years" }
          ],
          description: {
            history: "Yaba College of Technology (YASUTECH), established in 1947, is one of Nigeria's premier polytechnic institutions located in Lagos, producing highly skilled technologists.",
            motto: "Quality Education for Development",
            founded: "1947",
            viceChancellor: "Dr. Ibraheem Olalere",
            campusCount: 1,
            studentPopulation: "8,000+",
            accreditation: "National Board for Technical Education (NBTE)",
            strengths: [
              "Computer Science",
              "Engineering Technology",
              "Built Environment",
              "Information Technology",
              "Business Administration"
            ],
            website: "https://yabatech.edu.ng"
          }
        },
        {
          institutionId: "KANOPOLY",
          name: "Kano State Polytechnic",
          type: "State Polytechnic",
          location: "Kano",
          state: "Kano State",
          courses: [
            { name: "Engineering Technology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 170 },
            { name: "Computer Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 175 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 145 },
            { name: "Hospitality Management", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 140 },
            { name: "Information Technology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 165 }
          ],
          degrees: [
            { type: "National Diploma (ND)", duration: "2 years" },
            { type: "Higher National Diploma (HND)", duration: "2 years" },
            { type: "MSc", duration: "2 years" }
          ],
          description: {
            history: "Kano State Polytechnic (KANOPOLY), established in 1981, is a leading polytechnic in Northern Nigeria offering quality technical and vocational education.",
            motto: "Excellence through Discipline",
            founded: "1981",
            viceChancellor: "Engr. Abdullahi Lawan",
            campusCount: 1,
            studentPopulation: "6,000+",
            accreditation: "National Board for Technical Education (NBTE)",
            strengths: [
              "Engineering Technology",
              "Computer Engineering",
              "Business Administration",
              "Information Technology",
              "Hospitality Management"
            ],
            website: "https://kanopoly.edu.ng"
          }
        },
        {
          institutionId: "IMOPOLY",
          name: "Federal Polytechnic Nekede Owerri",
          type: "Federal Polytechnic",
          location: "Owerri",
          state: "Imo State",
          courses: [
            { name: "Software Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 170 },
            { name: "Civil Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 165 },
            { name: "Electrical Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 175 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 150 },
            { name: "Hospitality Management", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 145 }
          ],
          degrees: [
            { type: "National Diploma (ND)", duration: "2 years" },
            { type: "Higher National Diploma (HND)", duration: "2 years" },
            { type: "MSc", duration: "2 years" }
          ],
          description: {
            history: "Federal Polytechnic Nekede Owerri (IMOPOLY), established in 1979, is a federal polytechnic in Imo State known for quality technical education and innovation.",
            motto: "Competence and Excellence",
            founded: "1979",
            viceChancellor: "Engr. Uche Chukwu",
            campusCount: 1,
            studentPopulation: "7,000+",
            accreditation: "National Board for Technical Education (NBTE)",
            strengths: [
              "Software Engineering",
              "Civil Engineering",
              "Electrical Engineering",
              "Business Administration",
              "Hospitality Management"
            ],
            website: "https://fepnek.edu.ng"
          }
        },
        {
          institutionId: "IBADANPOLY",
          name: "Ibadan Polytechnic",
          type: "State Polytechnic",
          location: "Ibadan",
          state: "Oyo State",
          courses: [
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 175 },
            { name: "Computer Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 180 },
            { name: "Business Administration", jambSubjectCombination: ["English", "Maths", "Government"], cutOffMark: 155 },
            { name: "Architecture", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 170 },
            { name: "Information Technology", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 170 }
          ],
          degrees: [
            { type: "National Diploma (ND)", duration: "2 years" },
            { type: "Higher National Diploma (HND)", duration: "2 years" },
            { type: "MSc", duration: "2 years" }
          ],
          description: {
            history: "Ibadan Polytechnic (IBADANPOLY), established in 1963, is a prestigious state polytechnic in Oyo State known for excellent technical and vocational training.",
            motto: "Dignity and Excellence",
            founded: "1963",
            viceChancellor: "Engr. Wole Omoyosola",
            campusCount: 1,
            studentPopulation: "7,500+",
            accreditation: "National Board for Technical Education (NBTE)",
            strengths: [
              "Engineering",
              "Computer Engineering",
              "Architecture",
              "Information Technology",
              "Business Administration"
            ],
            website: "https://ibadanpoly.edu.ng"
          }
        },
        {
          institutionId: "BENIN",
          name: "University of Benin",
          type: "Federal University",
          location: "Benin City",
          state: "Edo State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 250 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 220 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 235 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 230 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 200 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 165 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 205 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "University of Benin (BENIN), founded in 1970, is a federal university in Edo State known for quality education and research in diverse fields.",
            motto: "Knowledge for Service",
            founded: "1970",
            viceChancellor: "Prof. Lilian Salako",
            campusCount: 1,
            studentPopulation: "20,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Pharmacy",
              "Agriculture"
            ],
            website: "https://uniben.edu.ng"
          }
        },
        {
          institutionId: "UNICAL",
          name: "University of Calabar",
          type: "Federal University",
          location: "Calabar",
          state: "Cross River State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 245 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 230 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 215 },
            { name: "Pharmacy", jambSubjectCombination: ["Chemistry", "Biology", "Physics"], cutOffMark: 228 },
            { name: "Marine Science", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 200 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 200 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "University of Calabar (UNICAL), founded in 1975, is a federal university in Cross River State with strong emphasis on marine science and medical education.",
            motto: "Knowledge in Service to Humanity",
            founded: "1975",
            viceChancellor: "Prof. Florence Obi",
            campusCount: 1,
            studentPopulation: "18,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Law",
              "Marine Science",
              "Engineering",
              "Pharmacy"
            ],
            website: "https://unical.edu.ng"
          }
        },
        {
          institutionId: "UNIMAID",
          name: "University of Maiduguri",
          type: "Federal University",
          location: "Maiduguri",
          state: "Borno State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 225 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 195 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 155 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 195 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "University of Maiduguri (UNIMAID), founded in 1975, is a federal university in Borno State committed to quality education and research.",
            motto: "Education, Research and Service",
            founded: "1975",
            viceChancellor: "Prof. Muhammad Umaru",
            campusCount: 1,
            studentPopulation: "12,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Agriculture",
              "Computer Science"
            ],
            website: "https://unimaid.edu.ng"
          }
        },
        {
          institutionId: "USU",
          name: "Usman Danfodiyo University",
          type: "Federal University",
          location: "Sokoto",
          state: "Sokoto State",
          courses: [
            { name: "Medicine and Surgery", jambSubjectCombination: ["Biology", "Chemistry", "Physics"], cutOffMark: 240, tution: 300000 },
            { name: "Engineering", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 210 },
            { name: "Law", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 225 },
            { name: "Education", jambSubjectCombination: ["English", "Government", "History"], cutOffMark: 160 },
            { name: "Agriculture", jambSubjectCombination: ["Biology", "Chemistry", "Maths"], cutOffMark: 190 },
            { name: "Computer Science", jambSubjectCombination: ["Maths", "Physics", "Chemistry"], cutOffMark: 190 }
          ],
          degrees: [
            { type: "BSc (Bachelor of Science)", duration: "4 years" },
            { type: "MSc (Master of Science)", duration: "2 years" },
            { type: "PhD", duration: "3-4 years" }
          ],
          description: {
            history: "Usman Danfodiyo University (USU), founded in 1975, is a federal university in Sokoto State with strong emphasis on Islamic studies and various academic disciplines.",
            motto: "Service to Humanity",
            founded: "1975",
            viceChancellor: "Prof. Lawal Bilbis",
            campusCount: 1,
            studentPopulation: "15,000+",
            accreditation: "National Universities Commission (NUC)",
            strengths: [
              "Medicine",
              "Engineering",
              "Law",
              "Education",
              "Agriculture"
            ],
            website: "https://udusok.edu.ng"
          }
        }
      ]);
    }

    res.status(200).json({
      success: true,
      total: schools.length,
      data: schools
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

module.exports = { getAllInstitutions };
