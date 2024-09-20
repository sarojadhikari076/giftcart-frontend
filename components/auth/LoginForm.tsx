'use client'

import {
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
import { getErrorText } from '@/utils/error'

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
        const response = await http<{ accessToken: string; user: User }>('/auth/login', {
          method: 'POST',
          data: {
            email,
            password
          }
        })

        dispatch(updateUser({ isLoggedIn: true, user: response.user, isLoading: false }))
        localStorage.setItem('gift_cart_token', response.accessToken)

        toast.success('Logged in successfully')
        replace('/')
      } catch (error) {
        console.log(error)
        toast.error(getErrorText(error))
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
      <FormControl>
        <Checkbox label="Remember me" />
      </FormControl>
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
