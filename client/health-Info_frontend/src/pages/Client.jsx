import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api';

const Client = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await API.get('/clients/');
        setClients(Array.isArray(res.data.clients) ? res.data.clients : []);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter clients based on search query
  const filteredClients = clients.filter(client => {
    const fullName = client.fullName?.toLowerCase() || '';
    const email = client.email?.toLowerCase() || '';
    const phone = client.phoneNumber?.toLowerCase() || '';
    const nationalId = client.nationalId?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();

    return (
      fullName.includes(query) ||
      email.includes(query) ||
      phone.includes(query) ||
      nationalId.includes(query)
    );
  });

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold" style={{ color: '#007bff' }}>Registered Clients</h2>
        <Link to="/clients/register" className="btn btn-primary">
          + Register New Client
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, phone, or national ID..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {filteredClients.length === 0 ? (
        <div className="alert alert-info text-center">
          No matching clients found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Phone</th>
                <th>Email</th>
                <th>National ID</th>
                <th>Address</th>
                <th>Enrolled Programs</th>
                <th>Profile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client._id}>
                  <td>{client.fullName}</td>
                  <td>{client.gender}</td>
                  <td>{new Date(client.dateOfBirth).toLocaleDateString()}</td>
                  <td>{client.phoneNumber}</td>
                  <td>{client.email}</td>
                  <td>{client.nationalId}</td>
                  <td>{client.address}</td>
                  <td>{client.enrolledPrograms?.length || 0}</td>
                  <td>
                    <Link to={`/clients/${client._id}`} className="btn btn-info btn-sm custom-btn">
                      View Profile
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/clients/${client._id}/enroll`}
                      className="btn btn-success btn-sm custom-btn"
                    >
                      Enroll
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Client;
