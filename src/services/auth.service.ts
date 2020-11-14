import Axios from '../utils/axios';
import { History } from '../utils/history'
import { HOME_PATH } from '../utils/paths';
import { headers } from './headers'

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
    return console.log(error);
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
    await Axios.post('/auth/logout', { headers: headers });

    localStorage.removeItem('user');

    History.push(HOME_PATH);
  
  } catch (error) {
    return console.log(error);
  }
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user') || '{}');
}

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
