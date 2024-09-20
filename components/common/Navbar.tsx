import { mainLeftNavLinks, preNavLinks } from '@/constants/routes'
import { Box, Link, Container, Divider, Typography } from '@mui/joy'
import Image from 'next/image'
import NextLink from 'next/link'
import NavToggleButton from '../buttons/NavToggleButton'
import { contactData } from '@/constants/contactData'
import { Fragment } from 'react'
import RightNavbar from './RightNavbar'

function PreNavbar() {
  return (
    <Container sx={{ py: 2, display: { xs: 'none', md: 'block' } }}>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
      >
        <Box display="flex" flexWrap="wrap" gap={1}>
          {contactData.map((contact, id) => (
            <>
              {id > 0 && <Divider orientation="vertical" />}
              <Link
                key={contact.label}
                color="neutral"
                href={contact.link}
                level="body-sm"
                startDecorator={contact.icon}
                target="_blank"
              >
                {contact.value}
              </Link>
            </>
          ))}
        </Box>
        <Box display="flex" gap={1}>
          {preNavLinks.map((link, id) => (
            <Fragment key={link.label}>
              {id > 0 && <Divider orientation="vertical" />}
              <Link level="body-sm" component={NextLink} href={link.href} key={link.href}>
                {link.label}
              </Link>
            </Fragment>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

function MainNavbar() {
  return (
    <Box
      bgcolor="common.white"
      boxShadow="md"
      py={1}
      position="sticky"
      top={0}
      zIndex={99}
      component="nav"
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <NextLink href="/">
          <Image
            src="/icons/favicon.png"
            width={32}
            height={32}
            style={{ objectFit: 'contain', objectPosition: '0 0' }}
            alt="logo"
          />
        </NextLink>
        <Box display={{ xs: 'none', sm: 'flex' }} gap={2}>
          {mainLeftNavLinks.map((link) => (
            <Link level="body-sm" component={NextLink} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </Box>
        <RightNavbar />
        <NavToggleButton />
      </Container>
    </Box>
  )
}

function Navbar() {
  return (
    <>
      <PreNavbar />
      <MainNavbar />
    </>
  )
}

export default Navbar
