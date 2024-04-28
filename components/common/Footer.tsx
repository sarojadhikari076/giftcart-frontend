import { contactData } from '@/constants/contactData'
import { footerLinks, socialIcons } from '@/constants/routes'
import { Box, Container, IconButton, Link, Typography, Button, Divider, Stack } from '@mui/joy'
import Image from 'next/image'
import NextLink from 'next/link'
import SubscriptionForm from './SubscriptionForm'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <Box bgcolor="neutral.800" py={5}>
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="start"
          justifyContent="space-between"
          gap={2}
        >
          <Box>
            <Link
              href="/"
              component={NextLink}
              endDecorator={
                <Typography level="h2" color="primary">
                  FreshHarvest
                </Typography>
              }
            >
              <Image
                src="/icons/app-logo.png"
                width={50}
                height={40}
                style={{ objectFit: 'cover' }}
                alt="logo"
              />
            </Link>
            <Typography level="body-sm" textColor="neutral.500">
              Always Fresh & Organic
            </Typography>
          </Box>
          <SubscriptionForm />
          <Box display="flex" gap={1}>
            {socialIcons.map((icon) => (
              <IconButton
                color="primary"
                size="sm"
                variant="outlined"
                component={Link}
                href={icon.href}
                key={icon.href}
              >
                {icon.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        <Divider sx={{ my: 4, bgcolor: 'primary.600' }} />
        <Box display="flex" flexWrap="wrap" gap={4} justifyContent="space-between">
          <Box>
            <Typography level="title-md" textColor="primary.500" gutterBottom>
              About FreshHarvest
            </Typography>
            <Typography level="body-sm" textColor="neutral.500" mb={2} maxWidth={400}>
              We started our journey in 2005. We provide the best quality fruits and vegetables to
              our customers. We have the best quality products in the market.
            </Typography>
            <Button variant="outlined" component={NextLink} href="/about-us">
              Learn More
            </Button>
          </Box>
          <Box display="flex" gap={5} justifyContent="space-between">
            {footerLinks.map((footerLink) => (
              <Box key={footerLink.title}>
                <Typography level="title-md" gutterBottom textColor="primary.500">
                  {footerLink.title}
                </Typography>
                <Stack gap={0.5}>
                  {footerLink.links.map((link) => (
                    <Link
                      level="body-sm"
                      component={NextLink}
                      href={link.href}
                      key={link.label}
                      textColor="neutral.500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
          <Box maxWidth={400}>
            <Typography level="title-md" textColor="primary.500" gutterBottom>
              Contact Us
            </Typography>
            <Stack gap={1}>
              {contactData.map((link) => (
                <Link
                  level="body-sm"
                  component={Link}
                  href={link.link}
                  key={link.label}
                  textColor="neutral.500"
                  display="flex"
                  alignItems="start"
                  gap={1}
                >
                  {link.icon}
                  {link.value}
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>
        <Divider sx={{ my: 4, bgcolor: 'primary.600' }} />
        <Typography level="body-sm" textColor="neutral.500" textAlign="center">
          &copy; {currentYear} FreshHarvest. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
