import Axios from '../utils/axios';
import { headers } from './headers';
// import { History } from '../utils/history'
// import authHeader from './auth-header';
// import { PROFILE_PATH } from '../utils/paths';

async function getUser(id: string) {
  try {
    const response = await Axios
      .get(`/users/${id}`, {
        headers: headers
      });
    
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}

function getSwapperProfile() {
 
}

export default {
  getUser,
  getSwapperProfile
};
