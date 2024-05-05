'use client'

import { contactUsSchema } from '@/schemas/contactUsSchema'

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Typography,
  FormHelperText
} from '@mui/joy'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

function ContactUsForm() {
  const { errors, touched, handleSubmit, resetForm, getFieldProps } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: contactUsSchema,
    onSubmit: () => {
      toast.success('Message sent successfully')
      resetForm()
    }
  })

  return (
    <Stack gap={1} component="form" onSubmit={handleSubmit}>
      <Typography level="title-lg">Please fill out the form below</Typography>
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
      </Box>
      <FormControl sx={{ flex: 1 }} error={Boolean(touched.subject && errors.subject)}>
        <FormLabel>Subject</FormLabel>
        <Input placeholder="Enter your subject" {...getFieldProps('subject')} />
        <FormHelperText>{touched.subject && errors.subject}</FormHelperText>
      </FormControl>
      <FormControl error={Boolean(touched.message && errors.message)}>
        <FormLabel>Message</FormLabel>
        <Textarea
          minRows={5}
          maxRows={8}
          placeholder="Enter your message"
          {...getFieldProps('message')}
        />
        <FormHelperText>{touched.message && errors.message}</FormHelperText>
      </FormControl>
      <Button sx={{ alignSelf: 'start' }} type="submit">
        Submit
      </Button>
    </Stack>
  )
}

export default ContactUsForm
