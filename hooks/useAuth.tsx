// Auth hook
import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('fresh_harvest_token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])
}
