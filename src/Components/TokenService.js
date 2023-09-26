// tokenService.js
import axios from 'axios';

export const refreshAccessToken = async (expiredToken) => {
  try {
    const response = await axios.post('/refreshToken', { token: expiredToken });
    const newToken = response.data.token;
    return newToken;
  } catch (error) {
    // Handle token refresh error (e.g., log out the user)
    throw error;
  }
};
