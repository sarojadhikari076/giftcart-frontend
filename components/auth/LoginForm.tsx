'use client'

import {
  Box,
  Stack,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Link,
  FormHelperText
} from '@mui/joy'
import { useFormik } from 'formik'
import NextLink from 'next/link'
import { loginSchema } from '@/schemas/authSchema'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import http from '@/services/http'
import { User } from '@/types/user'
import { useAppDispatch } from '@/hooks/useRedux'
import { updateUser } from '@/redux/appSlice'

function LoginForm() {
  const { replace } = useRouter()
  const dispatch = useAppDispatch()
  const { getFieldProps, handleSubmit, errors, touched, isValid, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnMount: false,
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const response = await http<{ token: string; user: User }>('/auth/login', {
          method: 'POST',
          data: {
            email,
            password
          }
        })

        dispatch(updateUser({ isLoggedIn: true, user: response.user, isLoading: false }))
        localStorage.setItem('fresh_harvest_token', response.token)

        toast.success('Logged in successfully')
        replace('/')
      } catch (error) {
        toast.error('Invalid email or password')
      }
    }
  })
  return (
    <Stack gap={2} component="form" onSubmit={handleSubmit}>
      <FormControl error={Boolean(errors.email && touched.email)}>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...getFieldProps('email')} placeholder="Enter your email" />
        {errors.email && touched.email && <FormHelperText>{errors.email}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.password && touched.password)}>
        <FormLabel>Password</FormLabel>
        <Input type="password" {...getFieldProps('password')} placeholder="Enter your password" />
        {errors.password && touched.password && <FormHelperText>{errors.password}</FormHelperText>}
      </FormControl>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={1}>
        <FormControl>
          <Checkbox label="Remember me" />
        </FormControl>
        <Link href="/auth/forgot-password" component={NextLink}>
          Forgot Password?
        </Link>
      </Box>
      <Button
        size="lg"
        fullWidth
        type="submit"
        disabled={isValid === false || isSubmitting}
        loading={isSubmitting}
      >
        Login
      </Button>
      <Typography textAlign="center">
        Don&apos;t have an account?&nbsp;
        <Link href="/auth/register" component={NextLink}>
          Register
        </Link>
      </Typography>
    </Stack>
  )
}

export default LoginForm
