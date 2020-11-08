import Axios from '../utils/axios';
import { History } from '../utils/history'
import { HOME_PATH, LOGIN_PATH } from '../utils/paths';
import { headers } from './headers'

function register(userParams: any) {
  Axios
    .post('/users', {
      user: {
        username: userParams.username,
        email: userParams.email,
        password: userParams.password
      },
      headers: headers
    })
    .then(() => { History.push(LOGIN_PATH) })
    .catch(error => console.log(error));
}

function login(userParams: any) {
  Axios
    .post('/auth/login', {
      email: userParams.email,
      password: userParams.password,
      headers: headers
    })
    .then(response => {
      if (response.data.auth_token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      
      console.log(response.data)
      
      History.push(HOME_PATH);
    })
    .catch(error => console.log(error));
}

function logout() {
  Axios
    .post('/auth/logout', { headers: headers })
    .then(() => {
      localStorage.removeItem('user');
      
      History.push(HOME_PATH);
    })
    .catch(error => console.log(error));
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
