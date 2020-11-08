import * as Yup from 'yup';
import 'yup-phone';

export const loginValidationSchema = Yup.object().shape({
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

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!'),
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
  confirmPassword: Yup.string()
    .required('Please confirm your Password!')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match!')
})

export const swapperValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('First Name is required!'),
  surname: Yup.string()
    .required('Last Name is required!'),
  dateOfBirth: Yup.string()
    .required('Date of birth is required!'),
  city: Yup.string()
    .required('City is required!'),
  country: Yup.string()
    .required('Country is required!'),
  address: Yup.string()
    .required('Address is required!'),
  phoneNumber: Yup.string()
    .required('Phone Number is required!')
    .phone('GB', true, 'Must be a valid phone number!')
})
