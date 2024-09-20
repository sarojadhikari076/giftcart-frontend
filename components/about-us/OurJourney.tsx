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
        <Image src="/images/team.jpeg" fill style={{ objectFit: 'cover' }} alt="Our Journey" />
      </Box>
      <Stack gap={1} flex={1} px={2} py={4} alignSelf="center">
        <Typography level="h2" color="primary">
          Our Journey
        </Typography>
        <Typography level="body-lg" textColor="neutral.600">
          GiftCart is an online marketplace that delivers a wide range of products directly to your
          doorstep.
        </Typography>
        <Typography level="body-sm">
          We started our journey in 2021 with the aim of providing customers with access to a
          variety of quality products. Since then, we have served thousands of satisfied customers
          across the country.
        </Typography>
        <Typography level="body-sm">
          Our mission is to offer a wide selection of high-quality products at affordable prices. We
          are committed to ensuring the best shopping experience and delivering your purchases
          safely to your home.
        </Typography>
        <Typography level="body-sm">
          We are constantly improving our services to enhance your shopping experience. Whether its
          expanding our product range or making our platform more user-friendly, we strive to offer
          better value and convenience. While we have made significant progress since our launch, we
          always welcome feedback and suggestions to help us continue to grow. Feel free to reach
          out to us with any ideas or comments!
        </Typography>
      </Stack>
    </Box>
  )
}

export default OurJourney
