const Admin = require("../models/adminModel")
const bcrypt = require("bcrypt")


const createAdmin = async (req, res) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please Provide Name, Email and Password"
            })
        }

        const existingAdmin = await Admin.findOne({email});
        if(existingAdmin){
            return res.status(409).json({
                success: false,
                message: "An Admin with this email already exists"
            })
        }

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt)

        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword
        });
        await newAdmin.save();

        return res.status(201).json({
            success: true,
            message: 'Admin created Successfully',
            admin: {
                id: newAdmin._id,
                email: newAdmin.email
            }
        })
    } catch(err){
        console.error("Error creating Admin", err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        })
    }
}


const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(password, existingAdmin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      admin: {
        id: existingAdmin._id,
        name: existingAdmin.name,
        email: existingAdmin.email,
      },
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

module.exports = {createAdmin, loginAdmin};