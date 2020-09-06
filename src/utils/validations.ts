import * as Yup from 'yup';

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
  confirm_password: Yup.string()
    .required('Please confirm your Password!')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match!')
})
