import React from 'react';
// import AuthService from '../../../services/auth.service'
import { Formik } from 'formik';
// import { format } from 'date-fns'
import Axios from '../../../utils/axios';
import { History } from '../../../utils/history'
import { headers } from '../../../services/headers'
import { HOME_PATH } from '../../../utils/paths';
import useStyles from '../styles';
import FormProps from '../formProps'
import DefaultButton from '../../DefaultButton/DefaultButton';
import { swapperValidationSchema } from '../../../utils/validations'

export default function SwapperForm() {
  const classes = useStyles();

  function createSwapper(params: any) {
    Axios
      .post('/swappers', {
        swapper: {
          name: params.name,
          surname: params.username,
          phone_number: params.phoneNumber,
          address: params.address,
          city: params.city,
          country: params.country,
          date_of_birth: params.dateOfBirth,
          email: '',
          username: '',
          user_id: ''
        },
        headers: headers
      })
      .then(() => { History.push(HOME_PATH) })
      .catch(error => console.log(error));
  }
 
  return (
    <div className={classes.page}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          // username: '',
          // email: '',
          dateOfBirth: '',
          city: '',
          country: '',
          address: '',
          phoneNumber: '',
          dirty: true,
          isValid: false
        }}
        validationSchema={swapperValidationSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors, isValid, dirty }: FormProps) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <p className={classes.p}>
              Please complete your SWApper profile!
            </p>
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('name', true)}
              value={values.name}
              name='name'
              placeholder='First Name'
            />
            { errors.name && touched.name ? <p className={classes.error}>{errors.name}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('surname', true)}
              value={values.surname}
              name='surname'
              placeholder='Last Name'
            />
            { errors.surname && touched.surname ? <p className={classes.error}>{errors.surname}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('dateOfBirth', true)}
              value={values.dateOfBirth}
              name='dateOfBirth'
              placeholder='Date of Birth'
            />
            { errors.dateOfBirth && touched.dateOfBirth ? <p className={classes.error}>{errors.dateOfBirth}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('city', true)}
              value={values.city}
              name='city'
              placeholder='City'
            />
            { errors.city && touched.city ? <p className={classes.error}>{errors.city}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('country', true)}
              value={values.country}
              name='country'
              placeholder='Country'
            />
            { errors.country && touched.country ? <p className={classes.error}>{errors.country}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('address', true)}
              value={values.address}
              name='address'
              placeholder='Full Address (including postcode)'
            />
            { errors.address && touched.address ? <p className={classes.error}>{errors.address}</p> : ''}
            <input
              className={classes.formInput}
              type='text'
              onChange={handleChange}
              onBlur={() => setFieldTouched('phoneNumber', true)}
              value={values.phoneNumber}
              name='phoneNumber'
              placeholder='Mobile Number'
            />
            { errors.phoneNumber && touched.phoneNumber ? <p className={classes.error}>{errors.phoneNumber}</p> : ''}
            <DefaultButton
              type='submit'
              disabled={!(isValid && dirty)}
              onClick={() => createSwapper(values)}
            > Complete your Profile! </DefaultButton>
          </form>
        )}
      </Formik>
    </div>
  );
}

