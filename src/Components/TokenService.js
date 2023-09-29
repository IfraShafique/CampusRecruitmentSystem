// tokenService.js
import axios from 'axios';

export const refreshAccessToken = async (expiredToken) => {
  try {
    const response = await axios.post('https://campus-recruitment-system-backend-btjmnyhxc-ifrashafique.vercel.app/refreshToken', { token: expiredToken });
    const newToken = response.data.token;
    return newToken;
  } catch (error) {
    // Handle token refresh error (e.g., log out the user)
    throw error;
  }
};
