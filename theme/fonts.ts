import { Space_Grotesk, Sen } from 'next/font/google'

export const headFont = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin-ext']
})

export const bodyFont = Sen({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin-ext']
})
