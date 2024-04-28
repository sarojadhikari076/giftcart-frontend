'use client'
import { useAppSelector } from '@/hooks/useRedux'
import { ShoppingBag, Search, Person } from '@mui/icons-material'
import { Box, IconButton } from '@mui/joy'
import NextLink from 'next/link'
import { useMemo } from 'react'

function RightNavbar() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  const mainRightNavLinks = useMemo(() => {
    return [
      {
        icon: <ShoppingBag />,
        href: isLoggedIn ? '/user/carts' : '/auth/login',
        label: 'Carts'
      },
      {
        icon: <Search />,
        href: '/products',
        label: 'Search'
      },
      {
        icon: <Person />,
        href: isLoggedIn ? '/user/profile' : '/auth/login',
        label: isLoggedIn ? 'Profile' : 'Login'
      }
    ]
  }, [isLoggedIn])

  return (
    <Box display={{ xs: 'none', sm: 'flex' }} gap={1}>
      {mainRightNavLinks.map((link) => (
        <IconButton
          color="primary"
          size="sm"
          variant="outlined"
          component={NextLink}
          href={link.href}
          key={link.label}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default RightNavbar
