'use client'

import { changePasswordSchema } from '@/schemas/authSchema'
import http from '@/services/http'
import { getErrorText } from '@/utils/error'
import { Stack, FormControl, FormLabel, Input, Button, Typography, FormHelperText } from '@mui/joy'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

export default function UpdatePasswordForm() {
  const { errors, touched, handleSubmit, getFieldProps, isSubmitting, isValid } = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: changePasswordSchema,
    validateOnMount: false,
    onSubmit: async (values) => {
      try {
        await http('/auth/change-password', {
          method: 'PATCH',
          data: values
        })
        toast.success('Password updated successfully')
      } catch (error) {
        toast.error(getErrorText(error))
      }
    }
  })

  return (
    <Stack gap={2} flex={1} component="form" onSubmit={handleSubmit}>
      <Typography level="h4" color="primary">
        Update Password
      </Typography>
      <FormControl error={Boolean(errors.currentPassword && touched.currentPassword)}>
        <FormLabel>Current Password</FormLabel>
        <Input
          type="password"
          placeholder="********"
          autoComplete="new-password"
          {...getFieldProps('currentPassword')}
        />
        {errors.currentPassword && touched.currentPassword && (
          <FormHelperText>{errors.currentPassword}</FormHelperText>
        )}
      </FormControl>
      <FormControl
        error={
          Boolean(errors.newPassword && touched.newPassword) || Boolean(errors.confirmPassword)
        }
      >
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          placeholder="********"
          autoComplete="new-password"
          {...getFieldProps('newPassword')}
        />
        {errors.newPassword && touched.newPassword && (
          <FormHelperText>{errors.newPassword}</FormHelperText>
        )}
      </FormControl>
      <FormControl
        error={
          Boolean(errors.confirmPassword && touched.confirmPassword) || Boolean(errors.newPassword)
        }
      >
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          placeholder="********"
          autoComplete="new-password"
          {...getFieldProps('confirmPassword')}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <FormHelperText>{errors.confirmPassword}</FormHelperText>
        )}
      </FormControl>
      <Button
        variant="solid"
        color="primary"
        sx={{ alignSelf: 'start' }}
        type="submit"
        disabled={isSubmitting || !isValid}
        loading={isSubmitting}
      >
        Update Password
      </Button>
    </Stack>
  )
}
