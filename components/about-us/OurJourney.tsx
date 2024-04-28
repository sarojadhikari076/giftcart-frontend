import { Box, Stack, Typography } from '@mui/joy'
import Image from 'next/image'

function OurJourney() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
      gridTemplateRows={{ xs: '16rem auto', md: '30rem' }}
      alignItems="start"
      gap={2}
      bgcolor="primary.100"
    >
      <Box position="relative" width={1} height={1}>
        <Image
          src="/images/team.jpeg"
          fill
          style={{ objectFit: 'cover' }}
          alt="Our Journey"
        />
      </Box>
      <Stack gap={1} flex={1} px={2} py={4} alignSelf="center">
        <Typography level="h2" color="primary">
          Our Journey
        </Typography>
        <Typography level="body-lg" textColor="neutral.600">
          Fresh Harvest is an online fruits and vegetables store that delivers
          fresh produce to your doorstep.
        </Typography>
        <Typography level="body-sm">
          We started our journey in 2021 with the aim of providing fresh and
          organic fruits and vegetables to our customers. We have been able to
          deliver fresh produce to thousands of customers across the country.
        </Typography>
        <Typography level="body-sm">
          Our mission is to provide fresh and organic fruits and vegetables to
          our customers at an affordable price. We are committed to delivering
          the best quality produce to your doorstep.
        </Typography>
        <Typography level="body-sm">
          We are constantly working to improve our services and provide the best
          shopping experience to our customers. We are always looking for ways
          to make our products better and more affordable. While we have come a
          long way since our inception, we still have a long way to go. If you
          have any feedback or suggestions, please feel free to reach out to us.
        </Typography>
      </Stack>
    </Box>
  )
}

export default OurJourney
