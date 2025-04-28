import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import { Link } from 'react-router-dom';

const ClientProfile = () => {
  const { clientId } = useParams();
  // const navigate = useNavigate();

  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClient();
  }, [clientId]);

  const fetchClient = async () => {
    try {
      const res = await API.get(`/clients/${clientId}`);
      setClient(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch client', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!client) {
    return <div className="container mt-5 text-center">Client not found</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{client.fullName}'s Profile</h2>

      <div className="row">
        {/* Client Information */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Client Information</h5>
              <p><strong>Full Name:</strong> {client.fullName}</p>
              <p><strong>Phone:</strong> {client.phone}</p>
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Address:</strong> {client.address}</p>
              <p><strong>Gender:</strong> {client.gender}</p>
            </div>
          </div>
        </div>

        {/* Enrolled Programs */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Enrolled Programs</h5>
              {client.enrolledPrograms && client.enrolledPrograms.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {client.enrolledPrograms.map((program) => (
                    <li key={program._id} className="list-group-item">
                      {program.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No programs enrolled yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>


      <Link to="/clients" className="btn btn-secondary">
        Back to Clients
      </Link>
    </div>
  );
};

export default ClientProfile;
