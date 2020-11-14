import authHeader from './auth-header';

export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  ...authHeader()
}
