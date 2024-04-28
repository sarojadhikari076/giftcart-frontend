import React from 'react'
import DrawerWrapper from './DrawerWrapper'
import { Stack, Link, IconButton, Box } from '@mui/joy'
import {
  mainRightNavLinks,
  mainLeftNavLinks,
  preNavLinks
} from '@/constants/routes'
import NextLink from 'next/link'

function NavDrawer() {
  return (
    <DrawerWrapper title="Navbar" modal="navbar">
      <Box display="flex" gap={2} mb={2}>
        {mainRightNavLinks.map((link) => (
          <IconButton
            variant="outlined"
            color="primary"
            key={link.href}
            href={link.href}
            component={NextLink}
          >
            {link.icon}
          </IconButton>
        ))}
      </Box>
      <Stack gap={2} alignItems="start">
        {mainLeftNavLinks.map((link) => (
          <Link key={link.href} href={link.href} component={NextLink}>
            {link.label}
          </Link>
        ))}
        {preNavLinks.map((link) => (
          <Link key={link.href} href={link.href} component={NextLink}>
            {link.label}
          </Link>
        ))}
      </Stack>
    </DrawerWrapper>
  )
}

export default NavDrawer
