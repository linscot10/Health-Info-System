import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
const CreateProgram = () => {

    const navigate = useNavigate();

    const [programData, setProgramData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        setProgramData({ ...programData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.post('/programs', programData);
            alert('Program created successfully!');
            navigate('/programs');
        } catch (error) {
            console.error('Failed to create program', error);
            alert('Failed to create program!');
        }
    };
    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4">Create New Health Program</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Program Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={programData.name}
                            onChange={handleChange}
                            placeholder="Enter program name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Program Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            rows="4"
                            value={programData.description}
                            onChange={handleChange}
                            placeholder="Enter short description"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success">
                        Create Program
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateProgram