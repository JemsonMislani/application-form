const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const ApplicantModel = require('./models/Applicant')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/user_applicant')

// get applicant data from schema
app.get('/', (req, res) => {
    ApplicantModel.find({})
    .then(applicants => res.json(applicants))
    .catch(err => res.json(err))
})

// create applicant
app.post('/createApplicant', (req, res) => {
    ApplicantModel.create(req.body)
    .then(applicants => res.json(applicants))
    .catch(err => res.json(err))
})

// get applicant id
app.post('/getApplicant/:id', (req, res) => {
    const id = req.params.id;
    ApplicantModel.findById({_id:id})
    .then(applicants => res.json(applicants))
    .catch(err => res.json(err))
})

PORT = 3002;
app.listen(PORT, () => {
    console.log('Jem, your applicant server is running!')
})
