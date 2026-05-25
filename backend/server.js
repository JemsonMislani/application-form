const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/27017/user_applicant')

PORT = 3002;
app.listen(PORT, () => {
    console.log('Jem, your applicant server is running!')
})
