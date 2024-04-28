import AuthWrapper from '@/components/auth/AuthWrapper'
import SocialLogin from '@/components/auth/SocialLogin'
import { Metadata } from 'next'
import LoginForm from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account to continue shopping',
  keywords: 'login, account, shopping',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

function LoginPage() {
  return (
    <AuthWrapper
      title="Login"
      subtitle="Login to your account to continue shopping"
    >
      <LoginForm />
      <SocialLogin />
    </AuthWrapper>
  )
}

export default LoginPage
