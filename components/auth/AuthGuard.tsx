'use client'

import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/useRedux'
import { useRouter } from 'next/navigation'

function AuthGuard({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isLoading, isLoggedIn } = useAppSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (isLoading === false && isLoggedIn === false) {
      router.replace('/auth/login')
    }
  }, [isLoading, isLoggedIn, router])

  if (isLoading || isLoggedIn === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
