import React, {useEffect} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Components/AuthContext';
import { refreshAccessToken } from './Components/TokenService';
import jwtDecode from 'jwt-decode';

const ProtectedRoute = ({ children, expectedRole }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if (decodedToken.exp - currentTime < 300) {
      // Token is about to expire, refresh it
      refreshAccessToken(token)
        .then((newToken) => {
          // Token refreshed successfully, you can now use it
          localStorage.setItem('jwt', newToken);
        })
        .catch((error) => {
          // Handle token refresh error (e.g., log out the user)
        });
    }
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (expectedRole && user && user.Role !== expectedRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;