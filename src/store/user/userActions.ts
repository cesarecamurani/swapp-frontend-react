import Axios from '../../utils/axios';
import { History } from '../../utils/history'
import { HOME_PATH } from '../../utils/paths';

const setUser = (payload: any) => ({ type: 'LOGIN', payload})

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export const logoutUser = () => ({ type: 'LOGOUT' })

export const loginUser = (userParams: any) => (dispatch: any) => {
  Axios
    .post('/auth/login', {
      email: userParams.email,
      password: userParams.password,
      headers: headers
    })
    .then(res => {
      const data = res.data
      localStorage.setItem('token', data.token)
      dispatch(setUser(data.user))
      History.push(HOME_PATH)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const registerUser = (userParams: any) => (dispatch: any) => {
  Axios
    .post('/users', {
      username: userParams.username,
      email: userParams.email,
      password: userParams.password,
      headers: headers
    })
    .then(res => {
      const data = res.data
      localStorage.setItem('token', data.token)
      dispatch(setUser(data.user))
      History.push(HOME_PATH)
    })
    .catch((error) => {
      console.log(error)
    })
}
