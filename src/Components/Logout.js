import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logout() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_CONNECTION_URI}/logout`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log("Logout Successful");
        localStorage.removeItem('jwt');
       
        navigate('/');
      } else {
        console.error("Logout failed with status:", response.status);
        setError("Failed to logout. Please try again later.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setError("Failed to logout. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    logout();
  }, []); // The empty dependency array ensures this effect runs once after initial render

  return (
    <div>
      
      {error && <p>{error}</p>}
      
    </div>
  );
}
