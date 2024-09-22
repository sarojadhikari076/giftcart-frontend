import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(50, 'Password is too long')
})

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(50, 'Name is too long'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number is too short')
    .max(12, 'Phone number is too long'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short')
    .max(50, 'Password is too long'),
  address: yup
    .string()
    .required('Address is required')
    .min(10, 'Address is too short')
    .max(100, 'Address is too long'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

export const basicDetailsSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name is too short')
    .max(50, 'Name is too long'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number is too short')
    .max(12, 'Phone number is too long'),
  address: yup
    .string()
    .required('Address is required')
    .min(10, 'Address is too short')
    .max(100, 'Address is too long'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date of birth is required')
})

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Old password is required')
    .min(6, 'Password is too short'),
  newPassword: yup
    .string()
    .required('New password is required')
    .min(6, 'Password is too short')
    .max(50, 'Password is too long'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
})
