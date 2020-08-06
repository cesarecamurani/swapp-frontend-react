import React, { FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import useStyles from '../styles';
import * as Yup from 'yup';
import * as Nord from '../../../utils/nordPalette'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, FormControlLabel, withStyles, Box } from '@material-ui/core';
import DefaultButton from '../../DefaultButton/DefaultButton';
import { LOGIN_PATH, TERMS_AND_CONDITIONS_PATH } from '../../../utils/paths';


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
    ),
  confirm_password: Yup.string()
    .required('Please confirm your Password!')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match!')
})

const CustomCheckbox = withStyles({
  root: {
    color: `${Nord.snowStorm0}`,
    '&$checked': {
      color: `${Nord.aurora3}`,
    },
  },
  checked: {},
})((props: any) => <Checkbox color='default' {...props} />);

interface Props {
  handleSubmit: FormEventHandler;
  handleChange: FormEventHandler;
  setFieldTouched: (field: string, value: any, shouldValidate?: boolean) => void;
  isValid: boolean
  dirty: boolean
  touched: { [field: string]: boolean }
  values: { [field: string]: any };
  errors: { [field: string]: any };
  checked: boolean
}

export default function RegisterForm() {
  const classes = useStyles();
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [checkedCheckbox, setCheckedCheckbox] = useState(false)

  function togglePasswordVisibility() {
    setVisiblePassword(!visiblePassword)
  }

  function toggleCheckbox() {
    setCheckedCheckbox(!checkedCheckbox)
  }

  function sayHello() {
    alert('You clicked me!');
  }

  return (
    <div className={classes.page}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirm_password: '' ,
          isValid: false,
          dirty: false
        }}
        validationSchema={validationSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors, isValid, dirty }: Props) => (
          <form className={classes.form}  onSubmit={handleSubmit}>
            <div className={classes.welcomeMessage}> Welcome! </div>
            <p className={classes.p}>
              Please Register below and start SWApping around!
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
              placeholder='Password (min 8 chars with 1 digit & 1 caps)'
            />
            { errors.password && touched.password ? <p className={classes.error}>{errors.password}</p> : ''}
            <input
              className={classes.formInput}
              type={ visiblePassword ? 'text' : 'password' }
              onChange={handleChange}
              onBlur={() => setFieldTouched('confirm_password', true)}
              value={values.confirm_password}
              name='confirm_password'
              placeholder='Please confirm Password'
            />
            { errors.confirm_password && touched.confirm_password ? <p className={classes.error}>{errors.confirm_password}</p> : ''}
            <i onClick={togglePasswordVisibility} className={classes.eyeIcon}>
              {
                visiblePassword ?
                <FontAwesomeIcon icon={faEye} /> :
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </i>
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
              onClick={sayHello}
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
