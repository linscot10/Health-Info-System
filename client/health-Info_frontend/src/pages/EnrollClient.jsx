import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api/api';

const EnrollClient = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  useEffect(() => {
    fetchClient();
    fetchPrograms();
  }, []);

  const fetchClient = async () => {
    try {
      const res = await API.get(`/clients/${clientId}`);
      setClient(res.data);
    } catch (error) {
      console.error('Failed to fetch client info', error);
    }
  };

  const fetchPrograms = async () => {
    try {
      const res = await API.get('/programs');
      setPrograms(Array.isArray(res.data.programs) ? res.data.programs : []);
    } catch (error) {
      console.error('Failed to fetch programs', error);
    }
  };

  const handleProgramChange = (programId) => {
    if (selectedPrograms.includes(programId)) {
      setSelectedPrograms(selectedPrograms.filter(id => id !== programId));
    } else {
      setSelectedPrograms([...selectedPrograms, programId]);
    }
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const programIds = selectedPrograms.map(program => program._id || program);
      await API.post(`/clients/${clientId}/enroll`, { programIds });
      alert('Client enrolled successfully!');
      navigate('/clients');
    } catch (error) {
      console.error('Failed to enroll client', error);
    }
  };

  if (!client) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>Enroll {client.fullName}</h2>

      <form onSubmit={handleEnroll}>
        <div className="row">
          {programs.map(program => (
            <div key={program._id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{program.name}</h5>
                  <p className="card-text">{program.description}</p>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id={program._id}
                      className="form-check-input"
                      onChange={() => handleProgramChange(program._id)}
                    />
                    <label htmlFor={program._id} className="form-check-label">
                      Select Program
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary">
          Enroll Client
        </button>
      </form>
    </div>
  );
};

export default EnrollClient;
