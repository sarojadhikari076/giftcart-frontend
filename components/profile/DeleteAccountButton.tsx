'use client'

import { useAppDispatch } from '@/hooks/useRedux'
import { logout } from '@/redux/appSlice'
import http from '@/services/http'
import { Delete } from '@mui/icons-material'
import { Button } from '@mui/joy'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

function DeleteAccountButton() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  async function handleClick() {
    try {
      setIsLoading(true)
      await http('/auth/delete-account', { method: 'DELETE' })

      localStorage.removeItem('gift_cart_token')
      dispatch(logout())

      toast.success('Account deleted successfully')
      router.replace('/auth/login')
    } catch (error) {
      console.error(error)
      toast.error('Failed to delete account')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button endDecorator={<Delete />} loading={isLoading} onClick={handleClick} color="danger">
      Delete Account
    </Button>
  )
}

export default DeleteAccountButton
