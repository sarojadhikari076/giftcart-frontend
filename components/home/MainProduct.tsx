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
          <Typography level="h1" textColor="common.white" fontSize="3rem" fontWeight={400}>
            Fresh Fruits & Vegetables
          </Typography>
          <Typography level="body-lg" mb={2} textColor="neutral.800">
            Buy fresh and organic fruits and vegetables from our store. You can get the best quality
            fruits and vegetables at the best price.
          </Typography>
          <Button color="neutral" variant="outlined" component={Link} href="/products">
            Shop now
          </Button>
        </Box>
        <Box position="relative" height={{ xs: 350, md: 600 }} width={{ xs: 350, md: 600 }}>
          <Image
            src="/images/main-product.png"
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
            bgcolor="common.white"
            borderRadius={100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center">
              <Typography fontSize="3.5rem">£1</Typography>
              <Box>
                <Typography level="title-lg">.50</Typography>
                <Typography level="body-xs">/kg</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
