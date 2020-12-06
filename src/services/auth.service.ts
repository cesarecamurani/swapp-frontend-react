import Axios from '../utils/axios';
import { headers } from './headers';

Axios.interceptors.request.use((request) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = user.auth_token;

  if (user && user.auth_token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }

  return request;
});

async function register(username: string, email: string, password: string) {
  try {
    await Axios
      .post('/users', {
        user: {
          username: username,
          email: email,
          password: password
        },
        headers: headers
      });
  } catch (error) { return error }
}

async function login(email: string, password: string) {
  try {
    const response = await Axios
      .post('/auth/login', {
        email: email,
        password: password
      })

    if (response.data.auth_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    if (response.data.swapper) {
      localStorage.setItem('swapper', JSON.stringify(response.data.swapper));
    }
  } catch (error) { return error }
}

async function logout() {
  try {
    const response = await Axios.post('/auth/logout', { headers: headers });

    console.log(headers)

    console.log(response.data.message)

    localStorage.removeItem('user');

    localStorage.removeItem('swapper');

  } catch (error) {
    return console.log(error);
  }
}

function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (user.auth_token && user.user_id) ? user : null
}

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
