import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import useStyles from '../styles';
import FormProps from '../formProps'
import DefaultButton from '../../DefaultButton/DefaultButton';
import { PROFILE_PATH, REGISTER_PATH } from '../../../utils/paths';
import AuthService from '../../../services/auth.service'
import { History } from '../../../utils/history'
import { loginValidationSchema } from '../../../utils/validations'

export default function LoginForm() {
  const classes = useStyles();
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [message, setMessage] = useState('');

  function togglePasswordVisibility() {
    setVisiblePassword(!visiblePassword);
  }

  function loginHandler(username: string, password: string) {
    AuthService
      .login(username, password)
      .then(
        (error: any) => {
          if (error) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();

            setMessage(errorMessage);
          } else {
            History.push(PROFILE_PATH);
          }
        }
      );
  }

  return (
    <div className={classes.page}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          visiblePassword: false,
          dirty: true,
          isValid: false
        }}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          loginHandler(values.email, values.password)
          console.log(values)
        }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors, isValid, dirty }: FormProps) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.welcomeMessage}> Welcome!</div>
            <p className={classes.p}>
              Please Login below and start SWApping around!
            </p>
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
              placeholder='Password'
            />
            { errors.password && touched.password ? <p className={classes.error}>{errors.password}</p> : ''}
            <i onClick={togglePasswordVisibility} className={classes.eyeIcon}>
              {
                visiblePassword ?
                <FontAwesomeIcon icon={faEye} /> :
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </i>
            { message && (<div className={classes.error}> {message} </div>) }
            <DefaultButton
              type='submit'
              disabled={!(isValid && dirty)}
            > Login </DefaultButton>
            <p className={classes.p}>
              Not registered yet? &nbsp;
              <Link className={classes.textLink} to={REGISTER_PATH}>
                Register here!
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
}
