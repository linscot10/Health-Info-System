import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Programs = () => {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get('/programs')
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setLoading(false);
      }
    }
  })

  return (
    
  )
}

export default Programs