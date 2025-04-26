import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="mb-4 fw-bold" style={{ color: '#007bff' }}>Welcome, Doctor! 👨‍⚕️</h1>
      <p className="lead text-muted mb-5">Manage health programs, register clients, and view profiles seamlessly.</p>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <Link to="/programs" className="btn btn-outline-primary btn-lg shadow-sm">View Programs</Link>
        <Link to="/clients" className="btn btn-outline-success btn-lg shadow-sm">View Clients</Link>
        <Link to="/clients/register" className="btn btn-outline-info btn-lg shadow-sm">Register New Client</Link>
      </div>
    </div>
  )
}

export default Home