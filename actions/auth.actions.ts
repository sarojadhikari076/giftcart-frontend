'use server'

import { cookies } from 'next/headers'

export async function setLoggedInUser() {
  const cookie = cookies()

  cookie.set('isLoggedIn', 'true', {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  })
}

export async function removeLoggedInUser() {
  const cookie = cookies()
  cookie.delete('isLoggedIn')
}
