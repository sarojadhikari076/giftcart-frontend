'use client'

import { removeLoggedInUser } from '@/actions/auth.actions'
import { useAppDispatch } from '@/hooks/useRedux'
import { logout } from '@/redux/appSlice'
import { Logout } from '@mui/icons-material'
import { Button } from '@mui/joy'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function LogoutButton() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  async function handleClick() {
    try {
      setIsLoading(true)
      localStorage.removeItem('fresh_harvest_token')
      dispatch(logout())
      await removeLoggedInUser()
      toast.success('Logged out successfully')
      router.replace('/auth/login')
    } catch (error) {
      console.error(error)
      toast.error('Failed to logout')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      endDecorator={<Logout />}
      disabled={isLoading}
      loading={isLoading}
      onClick={handleClick}
    >
      Logout
    </Button>
  )
}
