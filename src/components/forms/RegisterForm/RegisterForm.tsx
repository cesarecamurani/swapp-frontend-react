import React, { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useStyles from '../styles';
import NavbarButton from '../../NavbarButton/NavbarButton';
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

interface Props {
  handleSubmit: FormEventHandler;
  handleChange: FormEventHandler;
  setFieldTouched: (field: string, value: any, shouldValidate?: boolean) => void;
  touched: { [field: string]: boolean }
  values: { [field: string]: any };
  errors: { [field: string]: any };
}

export default function RegisterForm() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Formik
        initialValues={{ email: '', password: '', confirm_password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors }: Props) => (
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
              type='password'
              onChange={handleChange}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              name='password'
              placeholder='Password (minimum 8 characters)'
            />
            { errors.password && touched.password ? <p className={classes.error}>{errors.password}</p> : ''}
            <input
              className={classes.formInput}
              type='password'
              onChange={handleChange}
              onBlur={() => setFieldTouched('confirm_password', true)}
              value={values.confirm_password}
              name='confirm_password'
              placeholder='Please confirm Password'
            />
            { errors.confirm_password && touched.confirm_password ? <p className={classes.error}>{errors.confirm_password}</p> : ''}
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
          </form>
        )}
      </Formik>
    </div>
  );
}
