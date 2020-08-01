import React from 'react';
import useStyles from '../styles';
import NavbarButton from '../../NavbarButton/NavbarButton';
import { Link } from 'react-router-dom';
import { REGISTER_PATH } from '../../../utils/paths';

export default function LoginForm() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div className={classes.welcomeMessage}> Welcome </div>
        <p className={classes.p}> 
          Please LOGIN below and start SWApping around! 
        </p>
        <input 
          className={classes.formInput}
          type='text' 
          placeholder='Email address (or Username)'
        />
        <input 
          className={classes.formInput} 
          type='password' 
          placeholder='Password'
        />
        <NavbarButton> Login </NavbarButton>
        <p className={classes.p}> 
          Not registered yet? &nbsp; 
          <Link className={classes.textLink} to={REGISTER_PATH}> 
            Register here!
          </Link>
        </p>
      </div>
    </div>
  );
}
