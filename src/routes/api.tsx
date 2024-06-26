export const BACKEND_API_URL =
  import.meta.env.VITE_BACKEND_API_URL || 'https://reqres.in/api';

export const apiRoutes = {
  login: `${BACKEND_API_URL}/login`,
  logout: `${BACKEND_API_URL}/logout`,
  users: `${BACKEND_API_URL}/users`,
  reviews: `${BACKEND_API_URL}/unknown`,
};
