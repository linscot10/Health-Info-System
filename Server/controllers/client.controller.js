const Client = require('../models/client.model')

// register a new client

const registerClient = async (req, res) => {
    try {
        const { fullName, gender, dateOfBirth, nationalId, phoneNumber, address } = req.body;

        // Check for existing national ID
        const existing = await Client.findOne({ nationalId });
        if (existing) {
            return res.status(400).json({ message: 'Client with this national ID already exists' });
        }

        const client = new Client({
            fullName,
            gender,
            dateOfBirth,
            nationalId,
            phoneNumber,
            address
        });

        await client.save();

        res.status(201).json({
            message: 'Client registered successfully',
            client
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports= registerClient