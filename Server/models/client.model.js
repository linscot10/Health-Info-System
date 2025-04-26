const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    nationalId: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: String,
    enrolledPrograms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Program'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Client', clientSchema)