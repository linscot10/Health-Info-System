import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-sm">
            <div className='container'>
                <Link className="navbar-brand text-white fw-bold" to='/'>Health Info System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/programs">Programs</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/clients">Clients</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/clients/register">Register Client</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar