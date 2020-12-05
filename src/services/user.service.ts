import Axios from '../utils/axios';
import { headers } from './headers';
import AuthService from '../services/auth.service'

const currentUser = AuthService.getCurrentUser();

Axios.interceptors.request.use((request) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = user.auth_token;

  if (user && user.auth_token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }

  return request;
});

async function createSwapper(params: any) {
  try {
    const response = await Axios
      .post('/swappers', {
        swapper: {
          name: params.name,
          surname: params.surname,
          phone_number: params.phoneNumber,
          address: params.address,
          city: params.city,
          country: params.country,
          date_of_birth: params.dateOfBirth,
          email: currentUser.email,
          username: currentUser.username,
          user_id: currentUser.user_id
        },
        headers: headers
      })

    if (response.data) {
      localStorage.setItem('swapper', JSON.stringify(response.data));
    }
  } catch (error) { return error }
}

function currentSwapper() {
  const swapper = JSON.parse(localStorage.getItem('swapper') || '{}');

  return swapper.user_id ? swapper : null
}

export default {
  currentSwapper,
  createSwapper
};
