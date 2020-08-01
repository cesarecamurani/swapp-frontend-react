import React from 'react';
import NavbarButton from '../../NavbarButton/NavbarButton';
import useStyles from '../styles';
import { LOGIN_PATH } from '../../../utils/paths';
import { Link } from 'react-router-dom';

export default function RegisterForm(props: any) {
  const classes = useStyles();
 
  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div className={classes.welcomeMessage}> Welcome </div>
        <p className={classes.p}> 
          Please REGISTER below and start SWApping around! 
        </p>
        <input 
          className={classes.formInput}
          type='text' 
          placeholder='Email address'
        />
        <input 
          className={classes.formInput} 
          type='password' 
          placeholder='Password (minimum 8 characters)'
        />
        <input 
          className={classes.formInput} 
          type='password' 
          placeholder='Please confirm Password'
        />
        <NavbarButton> Register now! </NavbarButton>
        <p className={classes.p}> 
          Already registered? &nbsp; 
          <Link className={classes.textLink} to={LOGIN_PATH}> 
            Login here!
          </Link>
        </p>
      </div>
    </div>
  );
}
