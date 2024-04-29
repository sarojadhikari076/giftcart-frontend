'use client'

import { useAppSelector } from '@/hooks/useRedux'
import { useRouter } from 'next/navigation'

function AuthGuard({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isLoading, isLoggedIn } = useAppSelector((state) => state.auth)
  const router = useRouter()

  if (isLoading) {
    return null
  }

  if (isLoggedIn === false) {
    router.replace('/auth/login')
    return null
  }

  return <>{children}</>
}

export default AuthGuard
