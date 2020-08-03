import React, { FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import useStyles from '../styles';
import NavbarButton from '../../NavbarButton/NavbarButton';
import { REGISTER_PATH } from '../../../utils/paths';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password is too short - 8 characters minimum!')
    .matches(
      /(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]*/,
      'Password must contain at least a number and a capital letter!'
    )
})

interface Props {
  handleSubmit: FormEventHandler
  handleChange: FormEventHandler
  setFieldTouched: (field: string, value: any, shouldValidate?: boolean) => void
  isValid: boolean
  dirty: boolean
  touched: { [field: string]: boolean }
  values: { [field: string]: any }
  errors: { [field: string]: any }
}

export default function LoginForm() {
  const classes = useStyles();
  const [visiblePassword, setVisiblePassword] = useState(false)

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword)
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
        validationSchema={validationSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors, isValid, dirty }: Props) => (
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
            <div className={classes.inputContainer}>
              <input
                className={classes.formInput}
                type={ visiblePassword ? 'text' : 'password' }
                onChange={handleChange}
                onBlur={() => setFieldTouched('password', true)}
                value={values.password}
                name='password'
                placeholder='Password'
              />
              <i onClick={togglePasswordVisibility} style={{ fontSize: '30px', cursor: 'pointer' }}>
                {
                  visiblePassword ?
                  <FontAwesomeIcon icon={faEye} /> :
                  <FontAwesomeIcon icon={faEyeSlash} />
                }
              </i>
            </div>
            { errors.password && touched.password ? <p className={classes.error}>{errors.password}</p> : ''}
            <NavbarButton type='submit' disabled={!(isValid && dirty)}> Login </NavbarButton>
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
