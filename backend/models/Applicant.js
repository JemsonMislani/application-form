const mongoose = require('mongoose')

const ApplicantSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    applying: String
})

const ApplicantModel = mongoose.model('applicants', ApplicantSchema)
module.exports = ApplicantModel