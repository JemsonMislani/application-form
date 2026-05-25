const mongoose = require('mongoose')

const ApplicantSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    contact: String,
    applying: String
})

const ApplicantModel = mongoose.model('applicants', ApplicantSchema)
module.exports = ApplicantModel