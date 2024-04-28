import BgOverlay from '@/components/common/BgOverlay'
import { Box, Button, Container, Stack, Typography } from '@mui/joy'
import Link from 'next/link'

function AboutHeroSection() {
  return (
    <Box position="relative">
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          minHeight="70vh"
          py={2}
          gap={2}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Typography level="h1" color="primary">
            About Us
          </Typography>
          <Typography textColor="neutral.200">
            Fresh Harvest is an online fruits and vegetables store that delivers
            fresh produce to your doorstep.
          </Typography>
          <Box display="flex" gap={2}>
            <Button component={Link} href="/products">
              Go to Shop
            </Button>
            <Button component={Link} href="/" variant="outlined">
              Go to Home
            </Button>
          </Box>
        </Stack>
      </Container>
      <BgOverlay bg="/images/about-us.jpeg" />
    </Box>
  )
}

export default AboutHeroSection
