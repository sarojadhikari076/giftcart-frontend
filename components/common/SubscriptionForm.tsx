'use client'

import { subscriptionSchema } from '@/schemas/subscriptionSchema'
import { Send } from '@mui/icons-material'
import { Box, FormControl, FormLabel, IconButton, Input, FormHelperText } from '@mui/joy'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

function SubscriptionForm() {
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      email: ''
    },
    validateOnMount: false,
    validationSchema: subscriptionSchema,
    onSubmit: async (values) => {
      toast.success(`Subscribed with ${values.email}`)
    }
  })

  return (
    <Box sx={{ maxWidth: { xs: 1, md: 600 }, width: 1 }} component="form" onSubmit={handleSubmit}>
      <FormControl error={Boolean(errors.email && touched.email)}>
        <FormLabel sx={{ color: 'neutral.300' }}>Subscribe to our newsletter</FormLabel>
        <Input
          placeholder="Enter your email"
          size="lg"
          sx={{ borderRadius: 90 }}
          {...getFieldProps('email')}
          endDecorator={
            <IconButton color="primary" variant="solid" sx={{ borderRadius: 50 }} type="submit">
              <Send />
            </IconButton>
          }
        />
        {errors.email && touched.email && (
          <FormHelperText sx={{ color: 'error.main' }}>{errors.email}</FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}

export default SubscriptionForm
