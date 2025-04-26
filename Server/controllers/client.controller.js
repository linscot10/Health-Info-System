const Client = require('../models/client.model')
const Program = require('../models/program.model')
const mongoose = require('mongoose')

// register a new client

const registerClient = async (req, res) => {
    try {

        console.log('Received Client Data:', req.body);
        const { fullName, gender, dateOfBirth, nationalId, phoneNumber, email, address } = req.body;

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
            email,
            address
        });

        await client.save();
        console.log(client);


        res.status(201).json({
            message: 'Client registered successfully',
            client
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// gell all clients
const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Clients fetched successfully",
            clients
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}


//get  client profile

const getClientProfile = async (req, res) => {
    try {

        const clientId = req.params.id;

        console.log("clientId:", clientId);

        // if (!mongoose.Types.ObjectId.isValid(clientId)) {
        //     return res.status(400).json({ message: 'Invalid client ID' });
        // }

        const client = await Client.findById(clientId)
            .populate('enrolledPrograms', 'name description')
            .select('-__v');;


        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        res.status(200).json(client);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
// enroll client in one or more  programs

const enrollClientInPrograms = async (req, res) => {



    try {
        console.log("Request body:", req.body);


        const clientId = req.params.id;
        const { programIds } = req.body


        if (!Array.isArray(programIds) || programIds.length === 0) {
            return res.status(400).json({ message: 'Please provide at least one program ID' });
        }

        // Check if client exists
        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Verify all programs exist
        const validPrograms = await Program.find({ _id: { $in: programIds } });
        if (validPrograms.length !== programIds.length) {
            return res.status(400).json({ message: 'Some program IDs are invalid' });
        }

        // Avoid duplicate enrollments
        const newEnrollments = programIds.filter(
            pid => !client.enrolledPrograms.includes(pid)
        );
        if (newEnrollments.length === 0) {
            return res.status(400).json({ message: 'Client is already enrolled in all selected programs' });
        }

        // Add programs and save
        client.enrolledPrograms.push(...newEnrollments);
        await client.save();


        res.status(200).json({
            success: true,
            message: 'Client enrolled successfully',
            enrolledPrograms: client.enrolledPrograms
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });

    }
}



const searchClients = async (req, res) => {

    console.log("Route hit")
    console.log("Request Query Object: ", req.query);
    try {
        const { query } = req.query
        console.log(" query: ", query)
        if (!query) {
            return res.status(400).json({ message: 'Please provide a search query' });


        }

        const clients = await Client.find({
            $or: [
                { fullName: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        }).select('-__v').sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            clients
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Get a client's public profile by ID

const getPublicClientProfile = async (req, res) => {
    try {
        const { clientId } = req.params;
        const client = await Client.findById(clientId)
            .populate('enrolledPrograms', 'name description')
            .select('-__v');

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        res.status(200).json({
            clientId: client._id,
            fullName: client.fullName,
            phone: client.phone,
            enrolledPrograms: client.enrolledPrograms,
            createdAt: client.createdAt,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
module.exports = { registerClient, enrollClientInPrograms, getAllClients, getClientProfile, searchClients, getPublicClientProfile }