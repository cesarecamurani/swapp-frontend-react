import React from 'react';
import useStyles from './styles';
import AuthService from '../../services/auth.service'

export default function Profile() {
  const classes = useStyles();
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <div className={classes.welcomeMessage}>
           {currentUser.username} Profile Page
        </div>
      </div>
    </div>
  );
}
