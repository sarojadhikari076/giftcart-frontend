import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password is too short')
})

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name is too short'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number is too short')
    .max(12, 'Phone number is too long'),
  password: yup.string().required('Password is required').min(6, 'Password is too short'),
  address: yup.string().required('Address is required').min(10, 'Address is too short'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

export const basicDetailsSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name is too short'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(10, 'Phone number is too short')
    .max(12, 'Phone number is too long'),
  address: yup.string().required('Address is required').min(10, 'Address is too short')
})

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Old password is required')
    .min(6, 'Password is too short'),
  newPassword: yup.string().required('New password is required').min(6, 'Password is too short'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
})
