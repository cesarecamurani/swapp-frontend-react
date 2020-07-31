import React from 'react';
import { Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import useStyles from './styles';
import './LoginForm.scss'
import NavbarButton from '../NavbarButton/NavbarButton';

export default function LoginForm(props: any) {
  const classes = useStyles();

  return (
    <div className='login-page'>
      <div className='form'>
        <div className='welcomeMessage'>Welcome!</div>
        <p className='p'>Please insert your details below to start swapping around</p>
        <form className='login-form'>
          <input type='text' placeholder='Email address'/>
          <input type='password' placeholder='Password'/>
          <NavbarButton type='submit'> Login </NavbarButton>
        </form>
      </div>
    </div>
  );
}
