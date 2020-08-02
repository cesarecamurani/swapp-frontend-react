import React, { FormEventHandler } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useStyles from '../styles';
import NavbarButton from '../../NavbarButton/NavbarButton';
import { Link } from 'react-router-dom';
import { REGISTER_PATH } from '../../../utils/paths';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - 8 characters minimum')
    .matches(
      /(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]*/, 
      'Password must contain at least a number and a capital letter'
    )
})

interface Props {
  handleSubmit: FormEventHandler;
  handleChange: FormEventHandler;
  setFieldTouched: (field: string, value: any, shouldValidate?: boolean) => void;
  touched: { [field: string]: boolean }
  values: { [field: string]: any };
  errors: { [field: string]: any };
}

export default function LoginForm() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors }: Props) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.welcomeMessage}> Welcome !</div>
            <p className={classes.p}> 
              Please login below and start SWApping around! 
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
              placeholder='Password'
            />
            { errors.password && touched.password ? <p className={classes.error}>{errors.password}</p> : ''}
            <NavbarButton type='submit'> Login </NavbarButton>
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
