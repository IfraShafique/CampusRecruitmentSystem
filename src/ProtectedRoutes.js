import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Components/AuthContext';

const ProtectedRoute = ({ children, expectedRole }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (expectedRole && user && user.Role !== expectedRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;