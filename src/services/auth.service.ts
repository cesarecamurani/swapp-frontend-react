import Axios from '../utils/axios';
import { History } from '../utils/history'
import { HOME_PATH, PROFILE_PATH, SWAPPER_PATH } from '../utils/paths';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

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
    .then(() => { History.push(SWAPPER_PATH) })
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
      localStorage.setItem('user', response.data);
      console.log(response.data.auth_token)
      History.push(PROFILE_PATH);
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
