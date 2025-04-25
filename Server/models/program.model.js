const mongoose = require("mongoose")

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Program name is required'],
        unique: true,
        trim: true
    }
    ,
    description: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Program', programSchema)
