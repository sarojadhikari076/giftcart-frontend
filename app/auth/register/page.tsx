import AuthWrapper from '@/components/auth/AuthWrapper'
import SocialLogin from '@/components/auth/SocialLogin'
import { Metadata } from 'next'
import RegisterForm from '@/components/auth/RegisterForm'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create an account to continue shopping',
  keywords: 'register, account, shopping',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

function RegisterPage() {
  return (
    <AuthWrapper
      title="Register"
      subtitle="Create an account to continue shopping"
    >
      <RegisterForm />

      <SocialLogin />
    </AuthWrapper>
  )
}

export default RegisterPage
