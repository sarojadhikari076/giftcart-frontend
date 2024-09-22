'use client'
import { useAppSelector } from '@/hooks/useRedux'
import http from '@/services/http'
import { useEffect } from 'react'

function UpdateSearchHistory({ id }: { id: number }) {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    async function updateRecentSearches() {
      await http(`/products/${id}/search-history`, { method: 'POST' })
    }

    if (isLoggedIn) {
      updateRecentSearches()
    }
  }, [isLoggedIn, id])
  return null
}

export default UpdateSearchHistory
