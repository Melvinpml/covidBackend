const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const patientRoute = require("./controller/patientRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://melvinpoulose06:melvinpml4151@cluster0.yshbagz.mongodb.net/covidDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/patient", patientRoute)

app.listen(3001,()=>{
    console.log("server running")
})



