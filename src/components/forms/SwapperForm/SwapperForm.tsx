import React, { useState } from 'react';
import Select from 'react-select'
import { Formik } from 'formik';
import Cleave from 'cleave.js/react';
import { History } from '../../../utils/history'
import UserService from '../../../services/user.service'
import { PROFILE_PATH } from '../../../utils/paths';
import useStyles from '../styles';
import FormProps from '../formProps'
import DefaultButton from '../../DefaultButton/DefaultButton';
import { swapperValidationSchema } from '../../../utils/validations'
import Grid from '@material-ui/core/Grid';
import { countryOptions } from '../../../utils/country-options'
import { countryOptionsStyles } from '../../../utils/country-options-styles'

export default function SwapperForm() {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState({ value: '', label: ''});

  function handleCountryChange(e: any) {
    setCountry({ value: e.value, label: e.label })

    console.log(country)
  }

  function createSwapperHandler(params: any) {
    UserService
      .createSwapper(params)
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
          name: '',
          surname: '',
          dateOfBirth: '',
          city: '',
          country: country,
          address: '',
          phoneNumber: '',
          dirty: true,
          isValid: false
        }}
        validationSchema={swapperValidationSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({ handleSubmit, handleChange, setFieldTouched, values, touched, errors, isValid, dirty }: FormProps) => (
          <form className={classes.form} style={{ maxWidth: '620px', width: '620px', marginLeft: '-330px' }} onSubmit={handleSubmit}>
            <p className={classes.p}>
              Please complete your SWApper profile!
            </p>
            <Grid container spacing={1}>
              <Grid item md={6}>
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
              </Grid>
              <Grid item md={6}>
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
              </Grid>
              <Grid item md={6}>
                <Cleave
                  className={classes.formInput}
                  type='text'
                  options={{ date: true, datePattern: ['d', 'm', 'Y'] }}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched('dateOfBirth', true)}
                  value={values.dateOfBirth}
                  name='dateOfBirth'
                  placeholder='Date of Birth (DD/MM/YYYY)'
                />
                { errors.dateOfBirth && touched.dateOfBirth ? <p className={classes.error}>{errors.dateOfBirth}</p> : ''}
              </Grid>
              <Grid item md={6}>
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
              </Grid>
              <Grid item md={6}>
                <div style={{ marginTop: '10px' }}>
                  <Select
                    options={countryOptions}
                    onChange={handleCountryChange}
                    onBlur={() => setFieldTouched('country', true)}
                    // value={values.country}
                    name='country'
                    placeholder='Select your Country'
                    styles={countryOptionsStyles}
                    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                  />
                  { errors.country && touched.country ? <p className={classes.error}>{errors.country}</p> : ''}
                </div>
              </Grid>
              <Grid item md={6}>
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
              </Grid>
              <Grid item md={6}>
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
              </Grid>
            </Grid>
            { message && (<div className={classes.error}> {message} </div>) }
            <DefaultButton
              type='submit'
              disabled={!(isValid && dirty)}
              onClick={() => createSwapperHandler(values)}
            > Complete your Profile! </DefaultButton>
          </form>
        )}
      </Formik>
    </div>
  );
}
