const mongoose = require("mongoose")

const patientSchema = mongoose.Schema(
    {
        patientName:String,
        mobileNo:String,
        address:String,
        symdoms:String,
        status:String
    }
)

module.exports = mongoose.model("patient", patientSchema)