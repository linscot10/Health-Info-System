const Program = require('../models/program.model')

// create a new health program

const createProgram = async (req, res) => {
    try {

        const { name, description } = req.body

        // check if the program exist

        const existing = await Program.findOne({ name })

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Program already exists",
            }
            )
        }

        const program = new Program({ name, description })
        await program.save();

       
        res.status(201).json({
            message: 'Program created successfully',
            program,
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

// get all health records

const getAllPrograms = async (req, res) => {
    try {
        const programs = await Program.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Programs fetched successfully",
            programs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}



// get a single program by ID

const getProgramById = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);

        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        res.status(200).json(program);
    } catch (err) {
        
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createProgram, getAllPrograms, getProgramById }