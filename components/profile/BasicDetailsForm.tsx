'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { updateUser } from '@/redux/appSlice'
import { basicDetailsSchema } from '@/schemas/authSchema'
import http from '@/services/http'
import { BasicDetails } from '@/types/user'
import { getErrorText } from '@/utils/error'
import { Stack, FormControl, FormLabel, Input, Button, Typography, FormHelperText } from '@mui/joy'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

export default function BasicDetailsForm() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const { errors, touched, handleSubmit, getFieldProps, isSubmitting, isValid } =
    useFormik<BasicDetails>({
      initialValues: {
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || ''
      },
      enableReinitialize: true,
      validationSchema: basicDetailsSchema,
      onSubmit: async (values) => {
        try {
          const response = await http<{ user: BasicDetails }>('/auth/me', {
            method: 'PATCH',
            data: values
          })
          dispatch(updateUser({ user: response.user, isLoggedIn: true, isLoading: false }))
          toast.success('Basic details updated successfully')
        } catch (error) {
          toast.error(getErrorText(error))
        }
      }
    })

  return (
    <Stack gap={2} flex={1} component="form" onSubmit={handleSubmit}>
      <Typography level="h4" color="primary">
        Basic Details
      </Typography>
      <FormControl error={Boolean(errors.name && touched.name)}>
        <FormLabel>Full Name</FormLabel>
        <Input type="text" placeholder="John Doe" {...getFieldProps('name')} />
        {errors.name && touched.name && <FormHelperText>{errors.name}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.email && touched.email)}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="johndoe@gmail.com" {...getFieldProps('email')} />
        {errors.email && touched.email && <FormHelperText>{errors.email}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.phone && touched.phone)}>
        <FormLabel>Phone</FormLabel>
        <Input type="tel" placeholder="9876543210" {...getFieldProps('phone')} />
        {errors.phone && touched.phone && <FormHelperText>{errors.phone}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.address && touched.address)}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          placeholder="123, Main Street City, State, Country LET 123"
          {...getFieldProps('address')}
        />
        {errors.address && touched.address && <FormHelperText>{errors.address}</FormHelperText>}
      </FormControl>
      <Button
        variant="solid"
        color="primary"
        sx={{ alignSelf: 'start' }}
        type="submit"
        disabled={isSubmitting || !isValid}
        loading={isSubmitting}
      >
        Save Changes
      </Button>
    </Stack>
  )
}
