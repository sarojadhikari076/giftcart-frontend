'use client'
import { useAppDispatch } from '@/hooks/useRedux'
import { updateUser } from '@/redux/appSlice'
import http from '@/services/http'
import { User } from '@/types/user'
import { useEffect } from 'react'

export default function Auth() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    async function fetchUser() {
      try {
        const { user } = await http<{ user: User }>('/auth/me', {
          method: 'GET'
        })

        dispatch(updateUser({ isLoggedIn: true, user, isLoading: false }))
      } catch (error) {
        console.error('Error fetching user data')
      }
    }

    const token = localStorage.getItem('fresh_harvest_token')
    if (token) {
      fetchUser()
    }
  }, [dispatch])

  return null
}
