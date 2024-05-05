import * as yup from 'yup'

export const productReviewSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: yup.string().required('Email is required').email('Enter a valid email'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  review: yup
    .string()
    .required('Review is required')
    .min(5, 'Review must be at least 5 characters')
    .max(500, 'Review must be at most 500 characters')
})
