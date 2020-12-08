import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { GiShakingHands } from 'react-icons/gi';
import NavbarButtons from '../NavbarButtons/NavbarButtons';
import { Link } from 'react-router-dom';
import { HOME_PATH, LOGIN_PATH, PROFILE_PATH, REGISTER_PATH } from '../../utils/paths';
import AuthService from '../../services/auth.service'
import { History } from '../../utils/history'

export default function Navbar() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState<any>()

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) { setCurrentUser(user) }
  }, []);

  function logoutHandler() {
    AuthService.logout().then(() => { History.push(LOGIN_PATH) })
  }

  return (
    <div className={classes.navbar}>
      <Link className={classes.homeLink} to={HOME_PATH}>
        <div className={classes.title}><GiShakingHands /> SWApp </div>
        <p className={classes.motto}> All you need is Swapp! </p>
      </Link>
      {currentUser ? (
        <NavbarButtons>
          <Link className={classes.textLink} to={PROFILE_PATH}>
            {currentUser.username}
          </Link>
          <Link className={classes.textLink} to={LOGIN_PATH} onClick={logoutHandler}>
            Logout
          </Link>
        </NavbarButtons>
      ) : (
        <NavbarButtons>
          <Link className={classes.textLink} to={LOGIN_PATH}>
            Login
          </Link>
          <Link className={classes.textLink} to={REGISTER_PATH}>
            Register
          </Link>
        </NavbarButtons>
      )}
    </div>
  )
}
