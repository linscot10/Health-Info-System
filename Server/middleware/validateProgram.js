const Joi = require('joi')

const programSchema = Joi.object({
    name: Joi.string().trim().min(3).max(100).required(),
    description: Joi.string().trim().allow('', null)
});

const validateProgram = (req, res, next) => {
    const { error } = programSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = validateProgram;