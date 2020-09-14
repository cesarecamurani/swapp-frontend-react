import Axios from '../utils/axios';
import authHeader from './auth-header';
import { PROFILE_PATH, SWAPPER_PATH } from '../utils/paths';

function getUserProfile() {
  return Axios.get(PROFILE_PATH, { headers: authHeader() });
}

function getUserSwapper() {
  return Axios.get(SWAPPER_PATH, { headers: authHeader() });
}

export default {
  getUserProfile,
  getUserSwapper
};
