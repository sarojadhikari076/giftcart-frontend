import { Typography, Box, Container, Button } from '@mui/joy'
import Image from 'next/image'
import Link from 'next/link'

export default function MainProduct() {
  return (
    <Box py={10} bgcolor="primary.500">
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap'
        }}
      >
        <Box maxWidth={600}>
          <Typography level="h1" textColor="common.white" fontSize="3rem" fontWeight={600}>
            iPhone 16 - 5G, 1TB
          </Typography>
          <Typography level="body-lg" mb={2} textColor="neutral.800">
            Get the latest iPhone 16 with 5G support and 1TB storage at an affordable price. You can
            also get a discount of 10% on your first purchase.
          </Typography>
          <Button color="neutral" variant="outlined" component={Link} href="/products">
            Shop now
          </Button>
        </Box>
        <Box position="relative" height={{ xs: 350, md: 600 }} width={{ xs: 350, md: 600 }}>
          <Image
            src="/images/iphone-16.png"
            alt="Main product"
            fill
            style={{ objectFit: 'contain' }}
          />
          <Box
            position="relative"
            zIndex={1}
            left={30}
            top={30}
            height={130}
            width={130}
            className="linear-gradient"
            borderRadius={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center">
              <Typography fontSize="2rem" textColor="common.white">
                £1299
              </Typography>
              <Box>
                <Typography level="body-xs" textColor="common.white">
                  /pcs
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
