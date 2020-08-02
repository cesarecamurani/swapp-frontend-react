import React from 'react';
import NavbarButton from '../../NavbarButton/NavbarButton';
import useStyles from '../styles';
import { LOGIN_PATH, TERMS_AND_CONDITIONS_PATH } from '../../../utils/paths';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default function RegisterForm(props: any) {
  const classes = useStyles();
 
  return (
    <div className={classes.page}>
      <div className={classes.form}>
        <div className={classes.welcomeMessage}> Welcome ! </div>
        <p className={classes.p}> 
          Please register below and start SWApping around! 
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
        <p className={classes.p}>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='You must agree with the website policy' />
          </Form.Group>
            (Please read our &nbsp;
          <Link className={classes.textLink} to={TERMS_AND_CONDITIONS_PATH}> 
            Terms and Conditions
          </Link>
            )
        </p>
        <NavbarButton> Register </NavbarButton>
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
