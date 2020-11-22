import Axios from '../utils/axios';
import { headers } from './headers';

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
    } catch (error) {
    return error
  }
}

async function login(email: string, password: string) {
  const response = await Axios
    .post('/auth/login', {
      email: email,
      password: password,
      headers: headers
    });

  if (response.data.auth_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  console.log(response.data);

  return response.data;
}

async function logout() {
  try {
    const response = await Axios.post('/auth/logout', { headers: headers });

    console.log(headers)

    console.log(response.data.message)

    localStorage.removeItem('user');

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
