import React from 'react';
import useStyles from './styles';
import AuthService from '../../services/auth.service'
import UserService from '../../services/user.service'
import { Link } from 'react-router-dom';
import { SWAPPER_PATH } from '../../utils/paths';

export default function Profile() {
  const classes = useStyles();
  const currentUser = AuthService.getCurrentUser();
  const currentSwapper = UserService.currentSwapper();

  return (
    <div className={classes.page}>
      <div className={classes.box}>
        {currentSwapper ? (
          <>
            <div className={classes.welcomeMessage}> Profile Page </div>
            <div> Username: { currentSwapper.username } </div>
            <div> First Name: { currentSwapper.name } </div>
            <div> Last Name: { currentSwapper.surname } </div>
            <div> Email: { currentSwapper.email } </div>
            <div> Phone Number: { currentSwapper.phone_number } </div>
            <div> Date of Birth: { currentSwapper.date_of_birth } </div>
            <div> City: { currentSwapper.city } </div>
            <div> Country: { currentSwapper.country } </div>
          </>
        ) : (
          <div className={classes.welcomeMessage}>
            {currentUser.username} Profile Page
            <p className={classes.p}>
              <Link className={classes.textLink} to={SWAPPER_PATH}>
                Complete your profile!
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
