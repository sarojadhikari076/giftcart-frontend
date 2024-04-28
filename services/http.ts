import api from '@/lib/axios'
import { AxiosRequestConfig } from 'axios'

export default async function http<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
  let token: string | null = null

  if (typeof window === 'object') {
    token = window.localStorage.getItem('fresh_harvest_token')
  }

  const response = await api(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
