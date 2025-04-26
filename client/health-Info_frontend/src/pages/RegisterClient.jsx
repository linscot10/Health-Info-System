import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const RegisterClient = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('clients', formData);
      alert('Client registered successfully!');
      navigate('/clients');
    } catch (error) {
      console.error('Error registering client:', error);
      alert('Failed to register client.');
    }
  };
  return (
    <div>RegisterClient</div>
  )
}

export default RegisterClient