import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await API.get('/programs');
        setPrograms(Array.isArray(res.data.programs) ? res.data.programs : []);
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border text-primary"></div></div>;
  }

  return (
    <div className="container mt-5 position-relative" style={{ minHeight: '100vh' }}>
      <h2 className="mb-4 text-center fw-bold" style={{ color: '#007bff' }}>Health Programs</h2>

      {programs.length === 0 ? (
        <div className="alert alert-info text-center">
          No health programs found. Please create one.
        </div>
      ) : (
        <div className="row g-4">
          {programs.map((program) => (
            <div className="col-md-4" key={program._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{program.name}</h5>
                  <p className="card-text text-muted flex-grow-1">
                    {program.description || "No description available."}
                  </p>
                  <p className="text-muted small mb-0">Created: {new Date(program.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}


      <Link
        to="/programs/create-program"
        className="btn btn-primary position-relative bottom-50 start-50 translate-middle-x mb-4"
      >
        + Create New Program
      </Link>
    </div>
  );
};

export default Programs;
