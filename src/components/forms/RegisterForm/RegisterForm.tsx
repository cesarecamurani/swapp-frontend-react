import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import useStyles from '../styles';
import FormProps from '../formProps'
import * as Nord from '../../../utils/nordPalette'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, FormControlLabel, withStyles, Box } from '@material-ui/core';
import DefaultButton from '../../DefaultButton/DefaultButton';
import { LOGIN_PATH, TERMS_AND_CONDITIONS_PATH } from '../../../utils/paths';
import AuthService from '../../../services/auth.service'
import { History } from '../../../utils/history'
import { registerValidationSchema } from '../../../utils/validations'

const CustomCheckbox = withStyles({
  root: {
    color: `${Nord.snowStorm0}`,
    '&$checked': {
      color: `${Nord.aurora3}`,
    },
  },
  checked: {},
})((FormProps: any) => <Checkbox color='default' {...FormProps} />);

export default function RegisterForm() {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [checkedCheckbox, setCheckedCheckbox] = useState(false)

  function togglePasswordVisibility() {
    setVisiblePassword(!visiblePassword)
  }

  function toggleCheckbox() {
    setCheckedCheckbox(!checkedCheckbox)
  }

  const registerHandler = (username: string, email: string, password: string) => {
    AuthService
      .register(username, email, password)
      .then(() => {
        History.push(LOGIN_PATH)
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

  return (
    <div className={classes.page}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '' ,
          isValid: false,
          dirty: false
        }}
        validationSchema={registerValidationSchema}
        onSubmit={values => {
          registerHandler(values.username, values.email, values.password)
          console.log(values)
        }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors, isValid, dirty }: FormProps) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.welcomeMessage}> Welcome! </div>
            <p className={classes.p}>
              Please Register below and start SWApping around!
            </p>
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('username', true)}
              value={values.username}
              name='username'
              placeholder='Username'
            />
            { errors.username && touched.username ? <p className={classes.error}>{errors.username}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('email', true)}
              value={values.email}
              name='email'
              placeholder='Email address'
            />
            { errors.email && touched.email ? <p className={classes.error}>{errors.email}</p> : ''}
            <input
              className={classes.formInput}
              type={ visiblePassword ? 'text' : 'password' }
              onChange={handleChange}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              name='password'
              placeholder='Password (min 8 chars with 1 digit & 1 caps)'
            />
            { errors.password && touched.password ? <p className={classes.error}>{errors.password}</p> : ''}
            <input
              className={classes.formInput}
              type={ visiblePassword ? 'text' : 'password' }
              onChange={handleChange}
              onBlur={() => setFieldTouched('confirmPassword', true)}
              value={values.confirmPassword}
              name='confirmPassword'
              placeholder='Please confirm Password'
            />
            { errors.confirmPassword && touched.confirmPassword ? <p className={classes.error}>{errors.confirmPassword}</p> : ''}
            <i onClick={togglePasswordVisibility} className={classes.eyeIcon}>
              {
                visiblePassword ?
                <FontAwesomeIcon icon={faEye} /> :
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </i>
            {message && (<div className={classes.error}> {message} </div>)}
            <p className={classes.p}>
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={checkedCheckbox}
                    onClick={toggleCheckbox}
                  />
                }
                label={
                  <Box
                    component='div'
                    fontFamily='Arcon'
                    fontSize='18px'
                  > You must agree with the website policy </Box>}
              /><br/>
              (Please read our &nbsp;
              <Link className={classes.textLink} to={TERMS_AND_CONDITIONS_PATH}>
                Terms and Conditions
              </Link>
              )
            </p>
            <DefaultButton
              type='submit'
              disabled={!(isValid && dirty && checkedCheckbox)}
            > Register </DefaultButton>
            <p className={classes.p}>
              Already registered? &nbsp;
              <Link className={classes.textLink} to={LOGIN_PATH}>
                Login here!
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
}
