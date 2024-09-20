'use client'
import { useAppDispatch } from '@/hooks/useRedux'
import { updateUser } from '@/redux/appSlice'
import http from '@/services/http'
import { User } from '@/types/user'
import { getErrorText } from '@/utils/error'
import { useEffect } from 'react'

export default function Auth() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await http<User>('/auth/me', {
          method: 'GET'
        })

        dispatch(updateUser({ isLoggedIn: true, user, isLoading: false }))
      } catch (error) {
        console.error(getErrorText(error))
      }
    }

    const token = localStorage.getItem('gift_cart_token')
    if (token) {
      fetchUser()
    }
  }, [dispatch])

  return null
}
