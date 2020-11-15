import React, { useState } from 'react';
import useStyles from './styles';
import AuthService from '../../services/auth.service'
import UserService from '../../services/user.service'

export default function Profile() {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const currentUser = AuthService.getCurrentUser();
  const fetchUser = (id: string) => {
    UserService
      .getUser(id)
      .then((response) => { 
        return response 
      },
      (error: any) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  }

  const userDetails = fetchUser(currentUser['user_id'])

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.welcomeMessage}> 
          {userDetails} profile
          {message && (<div className={classes.error}> {message} </div>)}
        </div>
      </div>
    </div>
  );
}
