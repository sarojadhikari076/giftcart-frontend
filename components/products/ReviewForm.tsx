'use client'

import { productReviewSchema } from '@/schemas/productReviewSchema'
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Stack
} from '@mui/joy'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

function ReviewForm() {
  const { errors, getFieldProps, handleSubmit, touched, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: '',
      rating: '',
      review: ''
    },
    validationSchema: productReviewSchema,
    onSubmit: () => {
      toast.success('Review submitted successfully')
      resetForm()
    }
  })

  return (
    <Stack gap={1} maxWidth="50rem" component="form" onSubmit={handleSubmit}>
      <Typography level="title-lg">Leave a review for this product</Typography>
      <Box display="flex" gap={2} flexWrap="wrap">
        <FormControl sx={{ flex: 1 }} error={Boolean(touched.name && errors.name)}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" {...getFieldProps('name')} />
          <FormHelperText>{touched.name && errors.name}</FormHelperText>
        </FormControl>
        <FormControl sx={{ flex: 1 }} error={Boolean(touched.email && errors.email)}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your email" {...getFieldProps('email')} />
          <FormHelperText>{touched.email && errors.email}</FormHelperText>
        </FormControl>
        <FormControl sx={{ flex: 1 }} error={Boolean(touched.rating && errors.rating)}>
          <FormLabel>Rating</FormLabel>
          <Input placeholder="Enter your rating" type="number" {...getFieldProps('rating')} />
          <FormHelperText>{touched.rating && errors.rating}</FormHelperText>
        </FormControl>
      </Box>
      <FormControl error={Boolean(touched.review && errors.review)}>
        <FormLabel>Review</FormLabel>
        <Textarea
          minRows={5}
          maxRows={8}
          placeholder="Enter your review"
          {...getFieldProps('review')}
        />
        <FormHelperText>{touched.review && errors.review}</FormHelperText>
      </FormControl>
      <Button sx={{ alignSelf: 'start' }} type="submit">
        Submit
      </Button>
    </Stack>
  )
}

export default ReviewForm
