'use client'
import { registerSchema } from '@/schemas/authSchema'
import http from '@/services/http'
import { User } from '@/types/user'
import { getErrorText } from '@/utils/error'
import {
  Box,
  Stack,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Checkbox,
  Link,
  Select,
  Option
} from '@mui/joy'
import { Form, useFormik } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function RegisterForm() {
  const { replace } = useRouter()
  const {
    errors,
    values,
    setFieldValue,
    touched,
    getFieldProps,
    handleSubmit,
    isValid,
    isSubmitting
  } = useFormik<User>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      gender: '',
      dateOfBirth: '',
      password: '',
      confirmPassword: ''
    },
    validateOnMount: false,
    validationSchema: registerSchema,
    onSubmit: async (data) => {
      try {
        await http('/auth/register', {
          method: 'POST',
          data: {
            ...data,
            confirmPassword: undefined
          }
        })

        toast.success('Registered successfully')
        replace('/auth/login')
      } catch (error) {
        toast.error(getErrorText(error))
      }
    }
  })

  return (
    <Stack gap={2} component="form" onSubmit={handleSubmit}>
      <FormControl error={Boolean(errors.name && touched.name)}>
        <FormLabel>Name</FormLabel>
        <Input type="text" {...getFieldProps('name')} placeholder="Enter your full name" />
        {errors.name && touched.name && <FormHelperText>{errors.name}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.email && touched.email)}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" {...getFieldProps('email')} />
        {errors.email && touched.email && <FormHelperText>{errors.email}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.phone && touched.phone)}>
        <FormLabel>Phone</FormLabel>
        <Input type="tel" placeholder="Enter your phone number" {...getFieldProps('phone')} />
        {errors.phone && touched.phone && <FormHelperText>{errors.phone}</FormHelperText>}
      </FormControl>
      <FormControl error={Boolean(errors.address && touched.address)}>
        <FormLabel>Address</FormLabel>
        <Input type="tel" placeholder="Enter your address" {...getFieldProps('address')} />
        {errors.address && touched.address && <FormHelperText>{errors.address}</FormHelperText>}
      </FormControl>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <FormControl sx={{ flex: 1 }} error={Boolean(errors.gender && touched.gender)}>
          <FormLabel>Choose your gender</FormLabel>
          <Select
            value={values.gender}
            placeholder="Select your gender"
            onChange={(_, v) => setFieldValue('gender', v)}
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
          {errors.gender && touched.gender && <FormHelperText>{errors.gender}</FormHelperText>}
        </FormControl>
        <FormControl sx={{ flex: 1 }} error={Boolean(errors.dateOfBirth && touched.dateOfBirth)}>
          <FormLabel>Date of birth</FormLabel>
          <Input type="date" {...getFieldProps('dateOfBirth')} />
          {errors.dateOfBirth && touched.dateOfBirth && (
            <FormHelperText>{errors.dateOfBirth}</FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap">
        <FormControl sx={{ flex: 1 }} error={Boolean(errors.password && touched.password)}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" {...getFieldProps('password')} />
          {errors.password && touched.password && (
            <FormHelperText>{errors.password}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          sx={{ flex: 1 }}
          error={Boolean(errors.confirmPassword && touched.confirmPassword)}
        >
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your password"
            {...getFieldProps('confirmPassword')}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <FormHelperText>{errors.confirmPassword}</FormHelperText>
          )}
        </FormControl>
      </Box>
      <FormControl>
        <Checkbox label="Remember me" />
      </FormControl>
      <Typography level="body-xs" fontWeight={200}>
        By creating an account, you agree to our&nbsp;
        <Link href="/legal#terms-of-service" component={NextLink}>
          Terms of service
        </Link>
        &nbsp;and&nbsp;
        <Link href="/legal#privacy-policy" component={NextLink}>
          Privacy Policy
        </Link>
      </Typography>
      <Button
        size="lg"
        fullWidth
        type="submit"
        disabled={isValid === false || isSubmitting}
        loading={isSubmitting}
      >
        Register
      </Button>
      <Typography textAlign="center">
        Already have an account?&nbsp;
        <Link href="/auth/login" component={NextLink}>
          Login
        </Link>
      </Typography>
    </Stack>
  )
}

export default RegisterForm
