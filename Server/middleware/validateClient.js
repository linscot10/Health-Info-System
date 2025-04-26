const Joi = require('joi');

const clientSchema = Joi.object({
    fullName: Joi.string().min(3).max(100).required(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    dateOfBirth: Joi.date().less('now').required(),
    nationalId: Joi.string().min(5).required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10,13}$/).required(),
    email: Joi.string().email().required(),
    address: Joi.string().optional()
});

const validateClient = (req, res, next) => {
    const { error } = clientSchema.validate(req.body);
    if (error) {
        console.log('Validation Error:', error.details[0].message);
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = validateClient;
