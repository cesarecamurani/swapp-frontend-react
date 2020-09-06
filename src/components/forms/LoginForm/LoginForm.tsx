import React, { FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import useStyles from '../styles';
import DefaultButton from '../../DefaultButton/DefaultButton';
import { REGISTER_PATH } from '../../../utils/paths';
import { loginUser } from '../../../store/user/userActions'
import { loginValidationSchema } from '../../../utils/validations'

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
        validationSchema={loginValidationSchema}
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
            <DefaultButton
              type='submit'
              disabled={!(isValid && dirty)}
              onClick={() => loginUser(values)}
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
